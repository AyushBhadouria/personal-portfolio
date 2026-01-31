import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageGalleryProps {
  images: string[]
  projectTitle: string
  isOpen: boolean
  onClose: () => void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, projectTitle, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrev()
    if (e.key === 'Escape') onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-white transition-colors text-lg font-medium flex items-center gap-2 cursor-pointer"
              >
                ← Back
              </button>
              <h2 className="text-xl font-semibold text-gray-100">{projectTitle}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-100 transition-colors text-2xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Main Image */}
            <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-full max-w-full object-contain"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 transition-colors"
                aria-label="Next image"
              >
                →
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-sm text-gray-300">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="bg-gray-800 p-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 h-16 w-20 rounded border-2 transition-all overflow-hidden ${
                      index === currentIndex
                        ? 'border-primary'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className="px-4 py-3 bg-gray-850 border-t border-gray-700 text-xs text-gray-400 text-center">
              Use arrow keys to navigate • Press ESC to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageGallery
