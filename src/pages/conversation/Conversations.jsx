import ConversationList from "../../components/conversationList/ConversationList";
import UsersList from "../../components/usersList/usersList";


const Conversations = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <ConversationList />
      <UsersList />
    </div>
  );
};

export default Conversations;
