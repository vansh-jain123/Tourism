import React, { useState, useRef, useEffect } from 'react';
import './AIChatAssistant.css';

export default function AIChatAssistant({ travelData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your WanderAI assistant. Need quick tips or details about your destination?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (travelData && travelData.city) {
      setMessages(prev => [
        ...prev,
        { text: `I see you are planning a trip to ${travelData.city}! Let me know if you need restaurant reservations or local secrets 🤫`, sender: "system-status" }
      ]);
    }
  }, [travelData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: "user" }]);
    setInput('');
    setIsTyping(true);

    // Mock AI Response Logic
    setTimeout(() => {
      let botResponse = "That's a great question! I'm currently a mock assistant, but I can tell you that exploring local markets is always a good idea.";
      
      const lower = userMessage.toLowerCase();
      if (lower.includes('hello') || lower.includes('hi')) {
        botResponse = "Hello! Ready to plan some adventures?";
      } else if (lower.includes('weather')) {
        botResponse = "Always check the forecast before packing! Layers are your best friend.";
      } else if (lower.includes('food') || lower.includes('restaurant')) {
        botResponse = travelData 
          ? `In ${travelData.city}, I definitely recommend trying ${travelData.food.dishes[0] || 'the local street food'}!` 
          : "Local street food is usually the best! Where are you heading to?";
      } else if (lower.includes('hidden') || lower.includes('secret')) {
         botResponse = travelData && travelData.hiddenGems && travelData.hiddenGems.length > 0
          ? `You should check out ${travelData.hiddenGems[0].name}. Not many tourists know about it!` 
          : "I love hidden gems! They offer the most authentic experience.";
      } else if (lower.includes('budget') || lower.includes('cheap')) {
        botResponse = "To save money, use public transport, eat at local bistros, and book attractions in advance!";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="chat-assistant-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>🤖 WanderAI Chat</h4>
            <button className="close-chat-btn" onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input-area">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="chat-input"
                placeholder="Ask me anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="chat-send-btn" disabled={!input.trim()}>
                ➤
              </button>
            </form>
          </div>
        </div>
      )}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}
