'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Check,
  Crown,
  Rocket,
  Building2,
  Zap,
  ShoppingCart,
  Users,
  BarChart4,
  CreditCard,
  Target,
  MessageSquare,
  Smartphone,
} from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₦8,000',
    period: 'per month',
    features: [
      { text: '500 messages/month', icon: <Zap className="w-4 h-4" /> },
      {
        text: 'Basic auto-responses',
        icon: <MessageSquare className="w-4 h-4" />,
      },
      { text: 'Customer database', icon: <Users className="w-4 h-4" /> },
      { text: 'Email support', icon: <Smartphone className="w-4 h-4" /> },
    ],
    cta: 'Start Free Trial',
    featured: false,
    icon: <Rocket className="w-6 h-6" />,
    color: 'border-telegram',
    highlight: 'bg-telegram/10',
    button: 'bg-telegram hover:bg-telegram/90 text-white',
  },
  {
    name: 'Professional',
    price: '₦15,000',
    period: 'per month',
    features: [
      { text: '2,000 messages/month', icon: <Zap className="w-4 h-4" /> },
      {
        text: 'Advanced order management',
        icon: <ShoppingCart className="w-4 h-4" />,
      },
      { text: 'Payment integration', icon: <CreditCard className="w-4 h-4" /> },
      { text: 'Sales analytics', icon: <BarChart4 className="w-4 h-4" /> },
      { text: 'WhatsApp support', icon: <MessageSquare className="w-4 h-4" /> },
    ],
    cta: 'Get Started',
    featured: true,
    icon: <Crown className="w-6 h-6" />,
    color: 'border-whatsapp',
    highlight: 'bg-whatsapp/10',
    button: 'bg-whatsapp hover:bg-whatsapp/90 text-white',
  },
  {
    name: 'Enterprise',
    price: '₦25,000',
    period: 'per month',
    features: [
      { text: 'Unlimited messages', icon: <Zap className="w-4 h-4" /> },
      { text: 'Custom integrations', icon: <Check className="w-4 h-4" /> },
      { text: 'Priority support', icon: <Check className="w-4 h-4" /> },
      { text: 'Advanced analytics', icon: <BarChart4 className="w-4 h-4" /> },
      { text: 'Phone support', icon: <Smartphone className="w-4 h-4" /> },
    ],
    cta: 'Contact Sales',
    featured: false,
    icon: <Building2 className="w-6 h-6" />,
    color: 'border-indigo-300',
    highlight: 'bg-indigo-100/30',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-whatsapp to-telegram rounded-full"></div>
            <span className="mx-4 text-sm font-medium  uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-whatsapp to-telegram">
              Pricing Plans
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-telegram to-whatsapp rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your business size. All plans include free
            setup and training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden border-t-4 ${plan.color} bg-white shadow-md hover:shadow-xl transition-all duration-300`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 py-3 text-center text-white font-bold bg-whatsapp">
                  <Target className="inline-block mr-2 w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className={`pt-${plan.featured ? '16' : '8'} pb-8 px-6`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-xl ${plan.highlight}`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 ml-3">
                      {plan.name}
                    </h3>
                  </div>

                  {plan.featured && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-whatsapp/20 text-whatsapp-dark">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </div>
                  <div className="text-slate-500">{plan.period}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5">
                        {feature.icon}
                      </span>
                      <span className="text-slate-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-5 text-base font-medium ${plan.button} shadow transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-slate-200 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Need a custom solution?
              </h3>
              <p className="text-slate-600">
                We offer tailored plans for businesses with unique requirements.
                Contact us to discuss your specific needs and get a personalized
                quote.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button className="py-5 px-8 bg-green-400 hover:from-telegram/90 hover:to-whatsapp/90 text-white font-medium shadow-md text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div> */}
      </div>

      <style jsx global>{`
        :root {
          --whatsapp: #25d366;
          --whatsapp-dark: #128c7e;
          --telegram: #0088cc;
        }

        .bg-whatsapp {
          background-color: var(--whatsapp);
        }

        .bg-whatsapp-dark {
          background-color: var(--whatsapp-dark);
        }

        .bg-telegram {
          background-color: var(--telegram);
        }

        .border-whatsapp {
          border-color: var(--whatsapp);
        }

        .border-telegram {
          border-color: var(--telegram);
        }

        .text-whatsapp-dark {
          color: var(--whatsapp-dark);
        }

        .bg-whatsapp\/10 {
          background-color: rgba(37, 211, 102, 0.1);
        }

        .bg-telegram\/10 {
          background-color: rgba(0, 136, 204, 0.1);
        }

        .bg-whatsapp\/90 {
          background-color: rgba(37, 211, 102, 0.9);
        }

        .bg-telegram\/90 {
          background-color: rgba(0, 136, 204, 0.9);
        }

        .border-telegram\/20 {
          border-color: rgba(0, 136, 204, 0.2);
        }
      `}</style>
    </section>
  );
}
