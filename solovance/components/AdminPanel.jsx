'use client'
import { motion } from 'framer-motion';
import { Lock, LogOut, Mail, Phone, MessageSquare, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('https://solvance.onrender.com/api/contact');
        setSubmissions(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('Error fetching submissions:', err);
      }
    };

    fetchSubmissions();
  }, []);

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

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-900/30 rounded-lg border border-red-700/30 text-red-300">
              Error loading submissions: {error}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-purple-600 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg font-medium text-white/90">Total Submissions</h3>
                  <p className="text-3xl font-bold text-white mt-2">{submissions.length}</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-600 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg font-medium text-white/90">Recent Activity</h3>
                  <p className="text-3xl font-bold text-white mt-2">
                    {submissions.length > 0 ? 
                      new Date(submissions[0].createdAt).toLocaleDateString() : 
                      'No data'}
                  </p>
                </motion.div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-white mb-4">Contact Form Submissions</h2>
                <div className="space-y-4">
                  {submissions.length > 0 ? (
                    submissions.map((submission, index) => (
                      <motion.div
                        key={submission._id || index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-purple-800/30 rounded-lg border border-purple-700/20"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <User className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-purple-300">Name</p>
                              <p className="text-white">{submission.name}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Mail className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-purple-300">Email</p>
                              <p className="text-white">{submission.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-purple-300">Phone</p>
                              <p className="text-white">{submission.phone || 'Not provided'}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <MessageSquare className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                            <div>
                              <p className="text-sm text-purple-300">Message</p>
                              <p className="text-white">{submission.message}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-purple-700/20">
                          <p className="text-xs text-purple-400">
                            Submitted on: {new Date(submission.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-purple-800/30 rounded-lg border border-purple-700/20 text-center"
                    >
                      <p className="text-purple-300">No submissions found</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}