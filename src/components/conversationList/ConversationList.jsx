import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useConversations } from '../../hooks/useConversations'; // tvoj hook za konverzacije

const ConversationList = () => {
  const { data: user } = useCurrentUser();
  const { data: conversations = [], isLoading } = useConversations(user?._id);
  const navigate = useNavigate();

  if (isLoading) return <p className="text-slate-400 p-4">Loading conversations...</p>;

  const handleConversationClick = (conversation) => {
    if (!user) return;

    const otherUser = conversation.members.find((m) => m._id !== user._id);
    if (!otherUser) return;

    navigate(`/messages/${conversation._id}`, { state: { otherUser } });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-slate-100 mb-2">Conversations</h2>
      <div className="flex flex-col gap-2">
        {conversations.length === 0 ? (
          <p className="text-slate-400">No conversations yet.</p>
        ) : (
          conversations.map((conv) => {
            const otherUser = conv.members.find((m) => m._id !== user._id);
            if (!otherUser) return null;

            return (
              <button
                key={conv._id}
                onClick={() => handleConversationClick(conv)}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-700 transition"
              >
                <img
                  src={otherUser.image || "https://via.placeholder.com/40"}
                  alt={otherUser.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-slate-100">{otherUser.username}</span>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ConversationList;
