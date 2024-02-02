import React, { useState } from "react";
import "../styles/ChatApp.css"; // Stil dosyasını düzenlemeyi unutmayın!
import { auth } from "../firebase/FirebaseConfig";
import { db } from "../firebase/FirebaseConfig";

// Subscribe to changes in the user's login state

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");

  

  const handleSendMessage = () => {
    
  if(auth.currentUser===null){return 0;}
    const user = auth.currentUser;
    const uid=user.uid;
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: user },
      ]);
      const messagesRef = db.ref("Danisan/ "+uid+"/messages/");
      const newMessageRef = messagesRef.push();
      newMessageRef.set(newMessage)
        .then(() => {
          console.log('Mesaj başarıyla eklendi.');
        })
        .catch((error) => {
          console.error('Mesaj eklenirken hata oluştu:', error);
        });




      setNewMessage("");
      
      // Burada gerçek bir veritabanına gönderme işlemi ekleyebilirsiniz.
      // Örneğin, Firebase kullanarak.
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="message-input">
        <input
          type="text"
          placeholder="Mesajınızı yazın..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Gönder</button>
      </div>
    </div>
  );
};

export default ChatApp;
