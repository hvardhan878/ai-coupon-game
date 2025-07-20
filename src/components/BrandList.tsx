import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap } from 'lucide-react';
import { brands } from '../data/brands';
import { Card } from './ui/card';

export default function BrandList() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-purple-600" />
            <h1 className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              AI Coupon Game
            </h1>
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Face off against <span className="font-bold text-orange-600">Sumana Aunty</span>, a sophisticated socialite who guards her discount codes like precious secrets. 
            <br />
            <span className="text-purple-600 font-semibold">Can you prove your worth?</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Brand Card */}
        <div className="flex justify-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="group perspective-1000"
            >
              <Link to={`/chat/${brand.id}`}>
                <Card 
                  variant="neubrutalism"
                  className="max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:rotate-1 cursor-pointer bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] active:scale-95 active:shadow-[2px_2px_0px_0px_rgba(0,0,0)]"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-1">
                      <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
                      <Star className="w-3 h-3 text-yellow-400 animate-pulse delay-100" />
                      <Star className="w-2 h-2 text-yellow-300 animate-pulse delay-200" />
                    </div>
                  </div>

                  <div className="relative z-10 text-center p-8">
                    {/* Emoji Avatar */}
                    <motion.div 
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${brand.bgColor} flex items-center justify-center text-4xl mb-6 mx-auto relative overflow-hidden group-hover:animate-bounce-soft shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                      <span className="relative z-10 filter drop-shadow-lg">{brand.emoji}</span>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-3xl font-black text-gray-900 mb-2 group-hover:text-purple-700 transition-colors tracking-tight">
                          {brand.name}
                        </h3>
                        <p className={`text-xl font-bold mb-4 ${brand.accentColor} tracking-wide`}>
                          with {brand.personaName}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-purple-500">
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors text-sm">
                          {brand.description}
                        </p>
                      </div>
                      
                      {/* CTA Button */}
                      <motion.div 
                        className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl py-3 px-6 font-bold text-lg group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span>Accept the Challenge</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            ⚡
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <h4 className="text-lg font-bold text-gray-800">Game Strategy Guide</h4>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-100"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">💎</span>
                <div>
                  <p className="font-semibold text-gray-800">Status Matters</p>
                  <p>She values social connections and high-status professions</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">🎭</span>
                <div>
                  <p className="font-semibold text-gray-800">No Generic Flattery</p>
                  <p>She'll dismiss obvious attempts to butter her up</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 