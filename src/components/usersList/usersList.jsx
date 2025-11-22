import { useUsers } from '../../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import conversationService from '../../services/conversationService';

const UsersList = ({ currentUser }) => {
  const { data: users = [], isLoading } = useUsers();
  const navigate = useNavigate();

  if (isLoading) return <p className="text-slate-400 p-4">Loading users...</p>;

  const handleUserClick = async (user) => {
    if (!currentUser) return;

    // 1. Pronađi ili kreiraj konverzaciju
    const conversation = await conversationService.createConversation([currentUser._id, user._id]);

    // 2. Navigiraj na stranicu poruka
    navigate(`/messages/${conversation._id}`, { state: { otherUser: user } });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-slate-100 mb-2">Users</h2>
      <div className="flex flex-col gap-2">
        {users
          .filter(u => u._id !== currentUser?._id)
          .map(user => (
            <button
              key={user._id}
              onClick={() => handleUserClick(user)}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-700 transition"
            >
              <img
                src={user.image || "https://via.placeholder.com/40"}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-slate-100">{user.username}</span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default UsersList;
