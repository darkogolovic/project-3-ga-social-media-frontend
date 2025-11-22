import React, { useState } from "react";
import ConversationList from "../../components/conversationList/ConversationList";
import UsersList from "../../components/usersList/usersList";
import Messages from "../messages/messages"; // tvoja Messages.jsx
import { useCurrentUser } from "../../hooks/useCurrentUser";
import conversationService from "../../services/conversationService";

const Conversations = () => {
  const { data: user } = useCurrentUser();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [otherUser, setOtherUser] = useState(null);

  const handleUserClick = async (clickedUser) => {
    if (!user) return;

    // 1. Probaj pronaći postojeću konverzaciju
    let conv = await conversationService.findConversation(user._id, clickedUser._id);

    // 2. Ako ne postoji, kreiraj novu
    if (!conv) {
      conv = await conversationService.createConversation([user._id, clickedUser._id]);
    }

    setSelectedConversation(conv);
    setOtherUser(clickedUser);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen bg-slate-950 text-slate-100">
      <div className="border-r border-slate-800">
        <ConversationList 
          selectedConversation={selectedConversation} 
          setSelectedConversation={setSelectedConversation} 
          setOtherUser={setOtherUser} 
        />
      </div>

      <div className="border-l border-slate-800">
        <UsersList 
          currentUser={user} 
          onUserClick={handleUserClick} 
        />
        {selectedConversation && otherUser && (
          <Messages 
            conversationId={selectedConversation._id} 
            otherUser={otherUser} 
          />
        )}
      </div>
    </div>
  );
};

export default Conversations;
