import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Users, Share2, Shield, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const texts = [
  "Every Discount Becomes an Adventure",
  "Every Conversation Becomes Content"
];

export default function BrandList() {
  const [currentText, setCurrentText] = useState(0);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Re-initialize GetWaitlist widget when modal opens
  useEffect(() => {
    if (showWaitlistModal && window.GetWaitlist) {
      setTimeout(() => {
        window.GetWaitlist.init();
      }, 100);
    }
  }, [showWaitlistModal]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              ViralDiscount.ai
            </h1>
          </div>
          <Link to="/chat/urban-india">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Try Demo
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Make Discounts a <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Viral Moment</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Turn your next promo into a share-worthy AI chat that customers can't resist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Link to="/chat/urban-india">
              <button className="bg-teal-600 hover:bg-teal-700 text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
                👉 Try It Now – No Signup Required
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Explanation */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="h-24 flex items-center justify-center overflow-visible">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentText}
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: 90 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent text-center pb-2"
                  style={{ lineHeight: '1.2' }}
                >
                  {texts[currentText]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Product Demo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Chat Interface Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-900 relative">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-2xl">
                    🏪
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sumana Aunty</h3>
                    <p className="text-sm text-gray-500">The Urban India</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-xl p-4 max-w-sm">
                    <p className="text-sm">"Areh beta, you want discount? First tell me, do you even know what quality fabric looks like? 🤨"</p>
                  </div>
                  <div className="bg-teal-500 text-white rounded-xl p-4 max-w-sm ml-auto">
                    <p className="text-sm">"Aunty, I've been wearing kurtas since I was 5! My grandmother taught me to feel the thread count..."</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 max-w-sm">
                    <p className="text-sm">"Hmm... interesting. But can you tell me the difference between Chanderi and Banarasi? 🧐"</p>
                  </div>
                  <Link to="/chat/urban-india" className="block mt-8">
                    <div className="bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-xl p-4 text-center animate-pulse cursor-pointer hover:from-teal-600 hover:to-purple-600 transition-all duration-300">
                      <p className="text-sm font-bold">💫 Conversation continues...</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Explanation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500 rounded-full p-3 mt-1">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Meet Your AI Sales Agent</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Each persona is tailored to your brand—like Sumana Aunty for The Urban India's traditional wear. These carefully crafted characters have personality, preferences, and quirks. They don't just hand out discounts—they make customers <em>earn</em> them through engaging conversation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 rounded-full p-3 mt-1">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">The Challenge is the Hook</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Customers love a good challenge. Can they prove they're worthy of that 25% off? Can they charm the persona into revealing a better discount? The harder the conversation, the more satisfying the win.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 rounded-full p-3 mt-1">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Built for Sharing</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Every hilarious exchange, every clever comeback, every hard-won discount becomes social media gold. Your customers become your marketing team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-xl p-6 border border-teal-400/30">
                <h4 className="text-xl font-bold mb-3 text-teal-300">The Psychology Behind It</h4>
                <p className="text-gray-300 leading-relaxed">
                  When customers work for their discount, they value it more. When they share their victory, they create authentic social proof. When they laugh, they remember your brand.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link to="/chat/urban-india">
              <button className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white text-xl font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl transform">
                Experience the Magic Yourself ✨
              </button>
            </Link>
            <p className="text-gray-400 mt-4 text-lg">
              See if you can convince Sumana Aunty to give you a discount
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why It Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Share2 className="w-8 h-8" />,
                title: "Viral by Design",
                description: "People love to outsmart \"characters.\" This creates shareable moments on TikTok, Instagram Stories, and Twitter."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Self-Selecting Discounts", 
                description: "Only those who value your discount will play the game—natural price discrimination with no extra work."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Beyond Traditional Gamification",
                description: "We create memorable conversations customers want to share, not spin-the-wheel popups that interrupt."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Brand Control",
                description: "You set minimum and maximum discount tiers. Keep margins safe while fueling engagement."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-teal-600 mb-4 flex justify-center bg-gradient-to-br from-teal-50 to-cyan-50 w-16 h-16 rounded-full items-center mx-auto border border-teal-200">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">👉 Try It Now – Instant AI Persona</h2>
            <p className="text-xl text-teal-100 italic mb-8 max-w-2xl mx-auto">
              "Imagine convincing a strict 'Indian Aunty' to drop 25% off your kurta… priceless!"
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/chat/urban-india">
                <button className="bg-white text-teal-600 text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Started
                </button>
              </Link>
              <button 
                onClick={() => setShowWaitlistModal(true)}
                className="bg-teal-800 hover:bg-teal-900 text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-teal-400"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 ViralDiscount.ai</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {showWaitlistModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowWaitlistModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowWaitlistModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Join the Waitlist</h3>
                <p className="text-gray-600">Be the first to know when we launch new AI personas and features!</p>
              </div>

              <div className="space-y-4">
                <div id="getWaitlistContainer" data-waitlist_id="30421" data-widget_type="WIDGET_2"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 