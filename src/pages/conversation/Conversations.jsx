import ConversationList from "../../components/conversationList/ConversationList";
import UsersList from "../../components/usersList/usersList";

const Conversations = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen bg-slate-950 text-slate-100">
      <div className="border-r border-slate-800">
        <ConversationList />
      </div>

      <div className="border-l border-slate-800">
        <UsersList />
      </div>
    </div>
  );
};

export default Conversations;
