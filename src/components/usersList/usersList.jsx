import { useUsers } from "../../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import conversationService from "../../services/conversationService";
import { useOnlineUsers } from "../../hooks/useOnlineUsers";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80";

const UsersList = ({ currentUser }) => {
  const { data: users = [], isLoading } = useUsers();
  const navigate = useNavigate();

  const onlineUsers = useOnlineUsers(currentUser); 

  if (isLoading)
    return (
      <div className="p-4">
        <p className="text-slate-400 text-sm">Loading users...</p>
      </div>
    );

  const handleUserClick = async (user) => {
    if (!currentUser) return;

    const conversation = await conversationService.createConversation([
      currentUser._id,
      user._id,
    ]);

    navigate(`/messages/${conversation._id}`, { state: { otherUser: user } });
  };

  return (
    <div className="p-4">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="text-lg font-semibold text-slate-100">Users</h2>

        {users.length > 1 && (
          <span className="text-[11px] text-slate-500">
            {users.length - 1} available
          </span>
        )}
      </div>

      <p className="text-xs text-slate-400 mb-4">
        People you can start a private conversation with.
      </p>

      <div className="flex flex-col gap-2">
        {users
          .filter((u) => u._id !== currentUser?._id)
          .map((user) => {
            const isOnline = onlineUsers.includes(user._id);

            return (
              <button
                key={user._id}
                onClick={() => handleUserClick(user)}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/70 transition border border-transparent hover:border-slate-700 text-left"
              >
                <div className="relative">
                  <img
                    src={user.image || FALLBACK_IMG}
                    alt={user.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  {/* Online indicator */}
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900 ${
                      isOnline ? "bg-green-500" : "bg-slate-600"
                    }`}
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-100">
                    {user.username}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {isOnline ? "Online" : "Offline"}
                  </span>
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default UsersList;
