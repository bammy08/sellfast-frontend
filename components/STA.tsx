'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-[80%] h-[150%] bg-gradient-to-r from-blue-800/10 to-indigo-800/10 rotate-45 rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-700/10 to-indigo-700/10 rounded-full"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03]"></div>

        {/* Glowing dots */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-6 py-2 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-600/30"
          >
            <Zap className="w-4 h-4 text-blue-300 mr-2" />
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              GROW YOUR BUSINESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto"
          >
            Transform Your Sales with{' '}
            <span className="text-blue-300">SellFast</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Join thousands of Nigerian businesses accelerating growth with our
            powerful WhatsApp automation platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
          >
            <Button className="flex items-center justify-center gap-2 py-6 text-base font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all group px-8 min-w-[220px]">
              Start Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button className="py-6 text-base font-medium bg-transparent border-2 border-blue-300 text-blue-100 hover:bg-blue-800/30 rounded-xl backdrop-blur-sm transition-colors px-8 min-w-[220px]">
              Schedule Demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-blue-300 text-sm flex items-center"
          >
            <span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            No credit card required • 14-day free trial
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-blue-200 text-sm"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
              <span>WhatsApp Integration</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
              <span>Automated Order Processing</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
              <span>Naira Payment Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
