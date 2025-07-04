'use client';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  MessageCircle,
  Smartphone,
  ArrowRight,
  ChevronRight,
  Smartphone as SmartphoneIcon,
  DollarSign,
  ShoppingCart,
} from 'lucide-react';

export default function Hero() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const messages = [
    'Hi! Do you have iPhone 14?',
    "What's the price for Samsung Galaxy S23?",
    'Do you deliver to Lekki Phase 1?',
    'Can I pay with bank transfer?',
    'When will my order arrive?',
  ];

  // Auto-rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      setShowOptions(false);

      // Show options after a delay
      setTimeout(() => setShowOptions(true), 1500);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] pt-24 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyZDM2NDgiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-600/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - Text and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-slate-700"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm text-emerald-400">
                Automate your sales conversations
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Turn Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                WhatsApp & Telegram
              </span>{' '}
              Into a Sales Machine
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-300 mb-8"
            >
              Automate customer responses, capture orders instantly, and never
              miss a sale again. Built specifically for Nigerian businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {[
                { value: '50%', label: 'More Sales' },
                { value: '3hrs', label: 'Time Saved Daily' },
                { value: '24/7', label: 'Auto Response' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-xl border border-slate-700"
                >
                  <div className="text-xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 py-5 px-7 text-lg font-medium rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300">
                <span>Start Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-slate-600 hover:bg-slate-800/50 hover:border-slate-500 py-5 px-7 text-lg font-medium rounded-xl backdrop-blur-sm"
              >
                <span>Watch Demo</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative max-w-xs"
            >
              {/* Floating device mockup */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[40px] p-5 w-full shadow-2xl border border-slate-700 relative z-10">
                {/* Device notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

                {/* Screen content */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[30px] p-4 h-[500px] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 text-xs text-slate-400">
                    <div>9:41</div>
                    <div className="flex items-center gap-1">
                      <Smartphone className="h-3 w-3" />
                      <span>SellFast</span>
                    </div>
                  </div>

                  {/* Chat header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-10 h-10 rounded-full flex items-center justify-center text-xl text-white">
                      🏪
                    </div>
                    <div>
                      <div className="font-bold text-white">Your Business</div>
                      <div className="text-xs text-emerald-400 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1 animate-pulse"></div>
                        Online
                      </div>
                    </div>
                  </div>

                  {/* Interactive chat messages */}
                  <div className="space-y-3">
                    {/* Incoming message */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-[85%]"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentMessage}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-white"
                        >
                          {messages[currentMessage]}
                        </motion.div>
                      </AnimatePresence>

                      {/* Typing indicator */}
                      <motion.div
                        className="flex gap-1 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-slate-600"
                            animate={{
                              scale: [1, 1.2, 1],
                              backgroundColor: [
                                '#475569',
                                '#94a3b8',
                                '#475569',
                              ],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Outgoing message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.0 }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-2xl rounded-tr-none ml-auto max-w-[90%] text-white"
                    >
                      <div className="font-medium mb-1">Automated Reply</div>
                      <p className="text-sm">
                        Hello! Thanks for your message. We have iPhone 14 in
                        stock. Would you like to know prices and availability?
                      </p>
                    </motion.div>

                    {/* Interactive options */}
                    <AnimatePresence>
                      {showOptions && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2 mt-2"
                        >
                          <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-left p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-white w-full"
                          >
                            <span className="flex items-center gap-2">
                              <SmartphoneIcon className="h-4 w-4" />
                              See product details
                            </span>
                          </motion.button>

                          <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-left p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-white w-full"
                          >
                            <span className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4" />
                              Check prices
                            </span>
                          </motion.button>

                          <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-left p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-600/20 hover:from-emerald-500/30 hover:to-teal-600/30 border border-emerald-500/30 text-emerald-300 w-full"
                          >
                            <span className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4" />
                              Place an order
                            </span>
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-700 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 text-sm"
              >
                <MessageCircle className="h-4 w-4 text-white" />
                <span className="text-white font-medium">
                  Order received! #ORD-4582
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
