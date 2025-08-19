import React, { useRef, useEffect } from 'react'
import '../../styles/components/VideoModal.css'

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  const modalRef = useRef(null)
  const videoRef = useRef(null)

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="video-modal-overlay">
      <div className="video-modal" ref={modalRef}>
        {/* Modal Header */}
        <div className="video-modal-header">
          <h3 className="video-modal-title">{title} - Demo</h3>
          <button 
            className="close-button"
            onClick={onClose}
            aria-label="Close video modal"
          >
            ✕
          </button>
        </div>

        {/* Video Container */}
        <div className="video-container">
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            className="demo-video"
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Modal Footer */}
        <div className="video-modal-footer">
          <p className="video-hint">
            Press <kbd>ESC</kbd> to close or click outside the video
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoModal