import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useConversations } from "../../hooks/useConversations";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80";

const ConversationList = () => {
  const { data: user } = useCurrentUser();
  const { data: conversations = [], isLoading } = useConversations(user?._id);
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="p-4">
        <p className="text-slate-400 text-sm">Loading conversations...</p>
      </div>
    );

  const handleConversationClick = (conversation) => {
    if (!user) return;

    const otherUser = conversation.members.find((m) => m._id !== user._id);
    if (!otherUser) return;

    navigate(`/messages/${conversation._id}`, { state: { otherUser } });
  };

  return (
    <div className="p-4">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="text-lg font-semibold text-slate-100">Conversations</h2>
        {conversations.length > 0 && (
          <span className="text-[11px] text-slate-500">
            {conversations.length} active
            {conversations.length !== 1 && " chats"}
          </span>
        )}
      </div>

      
      <p className="text-xs text-slate-400 mb-4">
        Private messages with people from your circle. Select a chat to
        continue the conversation.
      </p>

      <div className="flex flex-col gap-2">
        {conversations.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-3">
            <p className="text-sm text-slate-300 mb-1">
              No conversations yet.
            </p>
            <p className="text-xs text-slate-500">
              Start a new chat from a user&apos;s profile by tapping{" "}
              <span className="font-semibold text-slate-300">Message</span>.
            </p>
          </div>
        ) : (
          conversations.map((conv) => {
            const otherUser = conv.members.find((m) => m._id !== user._id);
            if (!otherUser) return null;

            
            const lastMessageText =
              conv.lastMessage?.text ||
              "Continue conversation...";

            const isLastFromYou =
              conv.lastMessage?.sender?._id === user?._id ||
              conv.lastMessage?.sender === user?._id;

            return (
              <button
                key={conv._id}
                onClick={() => handleConversationClick(conv)}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/70 transition border border-transparent hover:border-slate-700 text-left"
              >
                <img
                  src={otherUser.profilePicture || FALLBACK_IMG}
                  alt={otherUser.username}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100 truncate">
                      {otherUser.username}
                    </span>

                    {conv.updatedAt && (
                      <span className="text-[10px] text-slate-500 flex-shrink-0">
                        {new Date(conv.updatedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">
                    {isLastFromYou && conv.lastMessage?.text ? "You: " : ""}
                    {lastMessageText}
                  </p>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ConversationList;