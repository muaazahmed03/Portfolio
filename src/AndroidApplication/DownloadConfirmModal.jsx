"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Smartphone, AlertCircle } from "lucide-react"

const DownloadConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 max-w-md w-full border border-gray-700 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-full flex items-center justify-center">
                  <Smartphone size={32} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">Download Food Fusion App?</h3>
                <p className="text-gray-300 leading-relaxed">
                  You're about to download the Food Fusion mobile application. Make sure you have enough storage space
                  and a stable internet connection.
                </p>
              </div>

              {/* App Info */}
              <div className="bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">File Size:</span>
                  <span className="text-white font-medium">~25 MB</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">Version:</span>
                  <span className="text-white font-medium">1.0.0</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">Platform:</span>
                  <span className="text-white font-medium">Android</span>
                </div>
              </div>

              {/* Warning */}
              <div className="flex items-start space-x-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-3 mb-6">
                <AlertCircle size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-yellow-200 font-medium mb-1">Installation Note:</p>
                  <p className="text-yellow-300/80">
                    You may need to enable "Install from Unknown Sources" in your Android settings.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-500 hover:to-green-500 text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
                >
                  <Download size={18} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DownloadConfirmModal
