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
    <div className="min-h-screen bg-casino-darker">
      {/* Header */}
      <header className="bg-casino-dark border-b border-primary-600 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              ViralDiscount.ai
            </h1>
          </div>
          <Link to="/chat/jackpot-bet">
            <button className="bg-danger-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Test Your Spirit 🔥
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-casino-darker overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg"
          >
            Make Discounts a <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Viral Moment</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary-200 mb-8 max-w-3xl mx-auto drop-shadow-md"
          >
            Turn your next promo into a share-worthy AI chat that customers can't resist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Link to="/chat/jackpot-bet">
              <button className="bg-danger-600 text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
                👉 Try It Now – No Signup Required
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Explanation */}
      <section className="py-24 bg-casino-darker text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400"></div>
        
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
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent text-center pb-2"
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
              <div className="bg-casino-dark border border-primary-600 rounded-2xl shadow-2xl p-6 text-white relative">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary-600">
                  <div className="w-12 h-12 rounded-full bg-danger-600 flex items-center justify-center text-2xl">
                    🎰
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Rico</h3>
                    <p className="text-sm text-secondary-300">Jackpot.bet</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-secondary-700 border border-primary-600 rounded-xl p-4 max-w-sm text-white">
                    <p className="text-sm">"who's this. talk fast i'm on a heater 🔥"</p>
                  </div>
                  <div className="bg-danger-600 text-white rounded-xl p-4 max-w-sm ml-auto">
                    <p className="text-sm">"Yo Rico! I've been grinding Degen Mining all night, hit 15 diamonds before I cashed out..."</p>
                  </div>
                  <div className="bg-secondary-700 border border-primary-600 rounded-xl p-4 max-w-sm text-white">
                    <p className="text-sm">"You CASHED OUT? At 15? The diamonds were probably one click away and you folded. WEAK. 💯"</p>
                  </div>
                  <Link to="/chat/jackpot-bet" className="block mt-8">
                    <div className="bg-primary-600 text-white rounded-xl p-4 text-center animate-pulse cursor-pointer transition-all duration-300">
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
                  <div className="bg-primary-500 rounded-full p-3 mt-1">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Meet Your AI Sales Agent</h3>
                    <p className="text-secondary-300 leading-relaxed">
                      Each persona is tailored to your brand—like Rico for Jackpot.bet's casino gaming. These carefully crafted characters have personality, preferences, and quirks. They don't just hand out bonuses—they make players <em>earn</em> them by proving their true degen spirit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-500 rounded-full p-3 mt-1">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">The Challenge is the Hook</h3>
                    <p className="text-secondary-300 leading-relaxed">
                      Players love a good challenge. Can they prove they're a true degen worthy of that bonus? Can they convince Rico they're not just another tourist? The harder the test, the more satisfying the heater.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 rounded-full p-3 mt-1">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Built for Sharing</h3>
                    <p className="text-secondary-300 leading-relaxed">
                      Every hilarious exchange, every clever comeback, every hard-won discount becomes social media gold. Your customers become your marketing team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-xl p-6 border border-primary-400/30">
                <h4 className="text-xl font-bold mb-3 text-primary-300">The Psychology Behind It</h4>
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
            <Link to="/chat/jackpot-bet">
              <button className="bg-danger-600 text-white text-xl font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl transform">
                Test Your Degen Spirit 🔥
              </button>
            </Link>
            <p className="text-secondary-400 mt-4 text-lg">
              See if you can convince Rico to grant you a casino bonus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-casino-darker border-t border-primary-600">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">Why It Works</h2>
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
                className="text-center p-6 bg-secondary-800 border border-primary-600 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-300 mb-4 flex justify-center bg-primary-800 w-16 h-16 rounded-full items-center mx-auto border border-primary-600">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">{item.title}</h3>
                <p className="text-secondary-200 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* Bottom CTA */}
      <section className="py-20 bg-casino-dark border-t border-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">👉 Try It Now – Instant AI Persona</h2>
            <p className="text-xl text-primary-100 italic mb-8 max-w-2xl mx-auto">
              "Imagine proving your degen spirit to Rico and earning that exclusive casino bonus… priceless!"
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/chat/jackpot-bet">
                <button className="bg-white text-primary-600 border border-primary-600 text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Started
                </button>
              </Link>
              <button 
                onClick={() => setShowWaitlistModal(true)}
                className="bg-primary-800 hover:bg-primary-900 text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-primary-400"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-casino-darker text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary-400">© 2025 ViralDiscount.ai</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">Terms of Service</a>
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
              className="bg-casino-dark border border-primary-600 rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowWaitlistModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-secondary-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-secondary-300" />
              </button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Join the Waitlist</h3>
                <p className="text-secondary-200">Be the first to know when we launch new AI personas and features!</p>
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