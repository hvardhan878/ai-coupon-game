import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Trophy, Copy, CheckCircle, Sparkles, X } from 'lucide-react';
import { brands } from '../data/brands';
import { Message, ChatState } from '../types';
import { sendMessage } from '../utils/api';
import { ChatBubble, ChatBubbleMessage, ChatBubbleAvatar } from './ui/chat-bubble';
import { cn } from '@/lib/utils';

export default function ChatGame() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brands.find(b => b.id === brandId);
  
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    gameWon: false,
    couponCode: undefined
  });
  
  const [input, setInput] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (brand) {
      // Start with empty messages - user must initiate conversation
      setChatState(prev => ({ ...prev, messages: [] }));
    }
  }, [brand]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatState.messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || chatState.isLoading || !brand) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true
    }));

    setInput('');

    try {
      const response = await sendMessage([...chatState.messages, userMessage]);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        isUser: false,
        timestamp: new Date()
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, aiMessage],
        isLoading: false,
        gameWon: response.gameWon,
        couponCode: response.couponCode
      }));
    } catch (error) {
      console.error('Error sending message:', error);
      setChatState(prev => ({ ...prev, isLoading: false }));
    }

    // Focus the input after message is sent
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const copyToClipboard = async () => {
    if (chatState.couponCode) {
      await navigator.clipboard.writeText(chatState.couponCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Brand not found</h2>
          <Link to="/" className="text-purple-600 hover:text-purple-700">
            ← Back to brands
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Enhanced Header */}
      <div className={`bg-gradient-to-r ${brand.bgColor} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex items-center justify-between p-6">
          <Link to="/" className="flex items-center text-white hover:text-white/80 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to brands</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <motion.div 
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              {brand.emoji}
            </motion.div>
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight">{brand.name}</h1>
              <p className="text-sm opacity-90 font-medium">Chatting with {brand.personaName}</p>
            </div>
          </div>
          
          {chatState.gameWon && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <Trophy className="w-6 h-6 text-yellow-300" />
              <span className="font-bold">Victory!</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Tips Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{brand?.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800">Chat with {brand?.personaName}</h3>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600">
                <p className="font-medium text-gray-800">💡 Your goal: Convince her to give you a discount!</p>
                <div className="space-y-2">
                  <p><strong>Tips:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Be charming and respectful</li>
                    <li>Ask about her interests</li>
                    <li>Find common ground</li>
                    <li>Be genuine, not pushy</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-xs font-medium text-purple-800">💬 Try: "Hi! Love your brand. Any chance for a student discount?"</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {chatState.messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                <ChatBubble variant={message.isUser ? "sent" : "received"}>
                  <ChatBubbleAvatar
                    emoji={message.isUser ? "👤" : brand.emoji}
                    fallback={message.isUser ? "You" : brand.personaName.charAt(0)}
                    className={message.isUser ? "bg-gradient-to-br from-purple-500 to-pink-500" : undefined}
                  />
                  <ChatBubbleMessage variant={message.isUser ? "sent" : "received"}>
                    {message.content}
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {chatState.isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <ChatBubble variant="received">
                <ChatBubbleAvatar
                  emoji={brand.emoji}
                  fallback={brand.personaName.charAt(0)}
                />
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Enhanced Victory Screen */}
      {chatState.gameWon && chatState.couponCode && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center p-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <Trophy className="w-12 h-12 text-yellow-300" />
              <h2 className="text-4xl font-black">Incredible! 🎉</h2>
              <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8 font-medium"
            >
              You've successfully convinced {brand.personaName}! She's impressed by your approach.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20"
            >
              <p className="text-sm opacity-90 mb-3 font-medium">Your exclusive coupon code:</p>
              <div className="flex items-center space-x-4">
                <code className="text-3xl font-mono font-black tracking-wider bg-black/20 px-4 py-2 rounded-lg">
                  {chatState.couponCode}
                </code>
                <motion.button
                  onClick={copyToClipboard}
                  className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copiedCode ? (
                    <CheckCircle className="w-6 h-6 text-green-300" />
                  ) : (
                    <Copy className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Enhanced Input Area */}
      {!chatState.gameWon && (
        <div className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-4 items-end">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={`What would you like to say to ${brand.personaName}?`}
                  className={cn(
                    "w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl",
                    "focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none",
                    "text-gray-800 placeholder-gray-400",
                    "shadow-lg transition-all duration-200",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  disabled={chatState.isLoading}
                />
                {input && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </motion.div>
                )}
              </div>
              <motion.button
                onClick={handleSendMessage}
                disabled={!input.trim() || chatState.isLoading}
                className={cn(
                  "px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl",
                  "hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed",
                  "transition-all duration-200 flex items-center space-x-2 font-semibold shadow-lg",
                  "disabled:hover:from-purple-600 disabled:hover:to-pink-600"
                )}
                whileHover={{ scale: input.trim() ? 1.05 : 1 }}
                whileTap={{ scale: input.trim() ? 0.95 : 1 }}
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 