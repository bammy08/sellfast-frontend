'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '⚡',
    title: 'Instant Auto-Replies',
    description:
      'Never miss a customer again. Respond to inquiries instantly, even when sleeping or busy.',
  },
  {
    icon: '📦',
    title: 'Smart Order Management',
    description:
      'Capture orders automatically and manage everything from one simple dashboard.',
  },
  {
    icon: '👥',
    title: 'Customer Database',
    description:
      'Build a database of all your customers automatically with preferences and history.',
  },
  {
    icon: '📊',
    title: 'Sales Analytics',
    description:
      'See which products sell best and track daily revenue with detailed reports.',
  },
  {
    icon: '💳',
    title: 'Payment Integration',
    description:
      'Accept payments through bank transfers, Paystack, Flutterwave, and other Nigerian methods.',
  },
  {
    icon: '🎯',
    title: 'Marketing Automation',
    description:
      'Send targeted messages about new products, special offers, and follow up on orders.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-600">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our WhatsApp automation tools are designed specifically for Nigerian
            businesses. Simple to set up, powerful to use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
            >
              <div className="text-4xl mb-5 p-2 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 flex items-center justify-center transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
