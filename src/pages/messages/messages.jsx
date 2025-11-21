// // MessageChat.js
// import React, { useState, useRef, useEffect } from 'react';
// import './messages.css';

// const MessageChat = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hey! How are you doing?", sender: "other", time: "10:30 AM" },
//     { id: 2, text: "I'm good! Just working on some projects.", sender: "me", time: "10:31 AM" },
//     { id: 3, text: "That's great! Want to meet up later?", sender: "other", time: "10:32 AM" },
//     { id: 4, text: "Sure, let's meet at the usual place.", sender: "me", time: "10:33 AM" }
//   ]);
  
//   const [newMessage, setNewMessage] = useState('');
//   const [isSummarizing, setIsSummarizing] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (newMessage.trim() === '') return;

//     const newMsg = {
//       id: messages.length + 1,
//       text: newMessage,
//       sender: "me",
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setMessages([...messages, newMsg]);
//     setNewMessage('');
//   };

//   const handleSummarize = () => {
//     setIsSummarizing(true);
//     // Simulacija AI sumarizacije
//     setTimeout(() => {
//       alert("Chat Summary:\n- Planning to meet up\n- Discussing work projects\n- Meeting at usual place");
//       setIsSummarizing(false);
//     }, 1000);
//   };

//   return (
//     <div className="message-chat">
//       {/* Header */}
//       <div className="chat-header">
//         <div className="user-info">
//           <div className="user-avatar">
//             <img src="https://via.placeholder.com/40" alt="User" />
//           </div>
//           <div className="user-details">
//             <h2>@otheruser</h2>
//             <span className="online-status">Online</span>
//           </div>
//         </div>
//         <button className="profile-btn">PROFILE</button>
//       </div>

//       {/* Chat Messages */}
//       <div className="messages-container">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`message ${message.sender === 'me' ? 'my-message' : 'other-message'}`}
//           >
//             <div className="message-bubble">
//               <p>{message.text}</p>
//               <span className="message-time">{message.time}</span>
// <div className="summarize-section">
//         <button 
//           className="summarize-btn"
//           onClick={handleSummarize}
//           disabled={isSummarizing}
//         >
//           {isSummarizing ? 'SUMMARIZING...' : 'SUMMARIZE'}
//         </button>
//       </div>

//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Summarize Button */}
      

//       {/* Message Input */}
//       <form className="message-input-form" onSubmit={handleSendMessage}>
//         <div className="input-container">
//           <input
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type your message..."
//             className="message-input"
//           />
//           <button type="submit" className="send-btn">
//             SEND
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MessageChat;


// MessageChat.js
import React, { useState, useRef, useEffect } from 'react';
import './messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hey! How are you doing? I was thinking we could meet up this weekend to discuss the new project. There are so many details we need to go over and I think it would be really productive if we could sit down together for a few hours.", 
      sender: "other", 
      time: "10:30 AM",
      showSummarize: false
    },
    { 
      id: 2, 
      text: "I'm good! Just working on some projects.", 
      sender: "me", 
      time: "10:31 AM",
      showSummarize: false
    },
    { 
      id: 3, 
      text: "That's great! Want to meet up later? I found this amazing new coffee shop that just opened downtown. They have the best espresso and plenty of quiet space where we could work without interruptions.", 
      sender: "other", 
      time: "10:32 AM",
      showSummarize: true
    },
    { 
      id: 4, 
      text: "Sure, let's meet at the usual place. I'll bring all the documents and we can go through everything step by step. Also, I wanted to show you the new design mockups I've been working on - they're really exciting!", 
      sender: "me", 
      time: "10:33 AM",
      showSummarize: true
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showSummarize: newMessage.length > 100
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  const handleSummarize = (messageId) => {
    setIsSummarizing(true);
    
    // Pronađi poruku za sumarizaciju
    const messageToSummarize = messages.find(msg => msg.id === messageId);
    
    // Simulacija AI sumarizacije
    setTimeout(() => {
      const summary = `Summary: "${messageToSummarize.text.substring(0, 50)}..."\nKey points: Meeting plans, project discussion`;
      alert(summary);
      setIsSummarizing(false);
    }, 1000);
  };

  return (
    <div className="sign">

    
    <div className="message-chat">
      {/* Header */}
      <div className="chat-header">
        <div className="user-info">
          <div className="user-avatar">
            <img src="https://via.placeholder.com/40" alt="User" />
          </div>
          <div className="user-details">
            <h2>@otheruser</h2>
            <span className="online-status">Online</span>
          </div>
        </div>
        <button className="profile-btn">PROFILE</button>
      </div>

      {/* Chat Messages */}
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={`message ${message.sender === 'me' ? 'my-message' : 'other-message'}`}
            >
              <div className="message-bubble">
                <p>{message.text}</p>
                <span className="message-time">{message.time}</span>
              </div>
              {/* Summarize Button - samo za moje duge poruke */}
            {message.sender === 'other' && message.showSummarize && (
              <div className="summarize-container">
                <button 
                  className="summarize-btn"
                  onClick={() => handleSummarize(message.id)}
                  disabled={isSummarizing}
                >
                  {isSummarizing ? '📝 Summarizing...' : '📝 Summarize'}
                </button>
              </div>
            )}
            </div>
            
            
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form className="message-input-form" onSubmit={handleSendMessage}>
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="message-input"
          />
          <button type="submit" className="send-btn">
            SEND
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Messages;