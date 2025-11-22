import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMessages, useSendMessage } from "../../hooks/useMessages";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { io } from "socket.io-client";

const Messages = () => {
  const { conversationId } = useParams(); // dolazi iz rute
  const { data: user } = useCurrentUser();
  const { data: messages = [], refetch, isLoading } = useMessages(conversationId);
  const sendMessageMutation = useSendMessage();
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef();
  const socketRef = useRef();
console.log(messages)
  // Socket connection
  useEffect(() => {
    if (!conversationId) return;

    socketRef.current = io("http://localhost:3000");
    socketRef.current.emit("joinRoom", conversationId);

    socketRef.current.on("receiveMessage", (msg) => {
      refetch(); // refresh messages
    });

    return () => socketRef.current.disconnect();
  }, [conversationId, refetch]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message
  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !conversationId || !user?._id) return;

    sendMessageMutation.mutate(
      {
        conversationId,
        sender: user._id,
        text: newMessage,
      },
      {
        onSuccess: (savedMessage) => {
          socketRef.current.emit("sendMessage", savedMessage);
        },
      }
    );

    setNewMessage("");
  };

  if (!conversationId) {
    return <p className="text-slate-400 p-4">No conversation selected</p>;
  }

  return (
    <div className="h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col h-[80vh] w-full max-w-2xl bg-slate-900 rounded-3xl shadow-lg overflow-hidden">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-slate-700">
          {isLoading ? (
            <p className="text-slate-400 text-center mt-10">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-slate-400 text-center mt-10">No messages yet.</p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg._id}
                className={`flex ${msg.sender === user._id ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs sm:max-w-md px-4 py-2 rounded-2xl break-words ${
                    msg.sender === user._id
                      ? "bg-sky-500 text-white rounded-tr-none"
                      : "bg-slate-700 text-slate-100 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-slate-400 block mt-1 text-right">
                    {new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 px-4 py-3 border-t border-slate-700 bg-slate-800"
        >
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 rounded-2xl border border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            disabled={sendMessageMutation.isLoading}
            className="px-4 py-2 bg-sky-500 text-white rounded-2xl font-semibold hover:bg-sky-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
