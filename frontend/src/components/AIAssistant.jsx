import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { mockChatResponse } from '../utils/mock';
import '../styles/assistant.css';

const AIAssistant = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant. Ask me anything about artificial intelligence!' }
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // MOCK: Simulate API call
    setTimeout(() => {
      const response = mockChatResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleVoiceInput = () => {
    // MOCK: Voice input simulation
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setInput('What is machine learning?');
      }, 2000);
    }
  };

  const handleVoiceOutput = () => {
    // MOCK: Voice output simulation
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      setTimeout(() => setIsSpeaking(false), 3000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="assistant-overlay">
      <div className="assistant-container">
        <div className="assistant-header">
          <div className="assistant-header-content">
            <h3>AI Assistant</h3>
            <div className="assistant-features">
              <span className="feature-badge">Chat</span>
              <span className="feature-badge">Voice</span>
            </div>
          </div>
          <button onClick={onClose} className="btn-close">
            <X size={20} />
          </button>
        </div>
        
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-content">{message.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-content loading">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="input-container">
          <div className="voice-controls">
            <button 
              onClick={handleVoiceInput} 
              className={`btn-voice ${isRecording ? 'recording' : ''}`}
              title="Voice Input"
            >
              {isRecording ? <Mic size={18} /> : <MicOff size={18} />}
            </button>
            <button 
              onClick={handleVoiceOutput} 
              className={`btn-voice ${isSpeaking ? 'speaking' : ''}`}
              title="Voice Output"
            >
              {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
          </div>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about AI..."
            className="chat-input"
          />
          
          <button onClick={handleSend} className="btn-send" disabled={!input.trim()}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;