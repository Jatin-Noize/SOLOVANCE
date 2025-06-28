"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const ContactUsForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://solvance.onrender.com/api/contact/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus({
          success: true,
          message: "Thank you for contacting us! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "", phone: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const modalVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          {/* Gradient Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-black backdrop-blur-md opacity-90"></div>

          <motion.div
            className="relative w-full max-w-md mx-4 bg-gradient-to-br from-[#1e1b4b] via-[#1e1e2e] to-[#0f0c29] text-white rounded-2xl shadow-xl shadow-purple-900/40 border border-purple-700/20 overflow-hidden"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700"></div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {submitStatus.message ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 mb-6 rounded-lg border text-sm ${
                    submitStatus.success
                      ? "bg-green-900/40 text-green-100 border-green-600"
                      : "bg-red-900/40 text-red-100 border-red-600"
                  }`}
                >
                  <p className="mb-3">{submitStatus.message}</p>
                  <button
                    onClick={() =>
                      setSubmitStatus({ success: false, message: "" })
                    }
                    className={`px-4 py-2 rounded-md font-medium ${
                      submitStatus.success
                        ? "bg-green-700 hover:bg-green-600"
                        : "bg-red-700 hover:bg-red-600"
                    } text-white transition`}
                  >
                    {submitStatus.success ? "Close" : "Try Again"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {["name", "email", "phone", "message"].map((field, i) => (
                    <motion.div
                      key={field}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={formItemVariants}
                    >
                      <label
                        htmlFor={field}
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        {field === "phone" ? (
                          <>
                            Phone{" "}
                            <span className="text-xs text-gray-400">
                              (Optional)
                            </span>
                          </>
                        ) : (
                          field.charAt(0).toUpperCase() + field.slice(1)
                        )}
                      </label>
                      {field === "message" ? (
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-purple-600 focus:outline-none"
                        />
                      ) : (
                        <input
                          type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          required={field !== "phone"}
                          className="w-full px-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-purple-600 focus:outline-none"
                        />
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={formItemVariants}
                    className="flex justify-end gap-3 pt-4"
                  >
                    <button
                      type="button"
                      onClick={onClose}
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-lg border border-gray-600 text-sm text-gray-300 hover:bg-gray-700/30 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all text-white shadow-lg shadow-purple-800/30 disabled:opacity-60 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                          <svg
                            className="h-4 w-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                            />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactUsForm;
