'use client'
import { motion } from 'framer-motion';
import { Lock, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-700/30 p-8 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              <Lock className="text-purple-400" size={28} />
              Admin Dashboard
            </h1>
            <Link 
              href="/"
              className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              Logout
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Admin Cards */}
            {[
              { title: 'Total Orders', value: '24', color: 'bg-purple-600' },
              { title: 'Pending Designs', value: '5', color: 'bg-amber-600' },
              { title: 'Completed Projects', value: '19', color: 'bg-emerald-600' },
              { title: 'Revenue', value: '$4,820', color: 'bg-blue-600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`${item.color} p-6 rounded-lg shadow-lg`}
              >
                <h3 className="text-lg font-medium text-white/90">{item.title}</h3>
                <p className="text-3xl font-bold text-white mt-2">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                'New order received from client #2456',
                'Revision requested for project "Nexa"',
                'Design approved for "Voltron" logo',
                'Payment received from client #2451'
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-purple-800/30 rounded-lg border border-purple-700/20"
                >
                  <p className="text-purple-100">{activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}