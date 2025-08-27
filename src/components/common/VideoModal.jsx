import React, { useRef, useEffect, useState } from 'react'
import '../../styles/components/VideoModal.css'

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  const modalRef = useRef(null)
  const videoRef = useRef(null)
  const [videoError, setVideoError] = useState(false)
  const [videoLoading, setVideoLoading] = useState(true)

  // Function to detect and convert YouTube URLs
  const getVideoType = (url) => {
    if (!url) return { type: 'none', embedUrl: null }
    
    // Check if it's a YouTube URL
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const youtubeMatch = url.match(youtubeRegex)
    
    if (youtubeMatch) {
      const videoId = youtubeMatch[1]
      return {
        type: 'youtube',
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        originalUrl: url
      }
    }
    
    // Check if it's a direct video file
    if (url.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i)) {
      return {
        type: 'direct',
        embedUrl: url,
        originalUrl: url
      }
    }
    
    // Default to external link
    return {
      type: 'external',
      embedUrl: null,
      originalUrl: url
    }
  }

  const videoInfo = getVideoType(videoSrc)

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
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setVideoError(false)
      setVideoLoading(true)
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  // Handle video events for direct videos
  const handleVideoLoad = () => {
    setVideoLoading(false)
    setVideoError(false)
  }

  const handleVideoError = (e) => {
    console.error('Video loading error:', e)
    setVideoLoading(false)
    setVideoError(true)
  }

  const handleVideoLoadStart = () => {
    setVideoLoading(true)
    setVideoError(false)
  }

  // Handle iframe load for YouTube
  const handleIframeLoad = () => {
    setVideoLoading(false)
    setVideoError(false)
  }

  const handleIframeError = () => {
    setVideoError(true)
    setVideoLoading(false)
  }

  // Handle external link click
  const handleExternalClick = () => {
    window.open(videoInfo.originalUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

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
          {videoInfo.type === 'none' && (
            <div className="video-error">
              <p>No demo video available for this project.</p>
            </div>
          )}

          {videoInfo.type === 'external' && (
            <div className="external-link-container">
              <p>This demo opens in a new tab:</p>
              <button 
                onClick={handleExternalClick}
                className="external-demo-button"
              >
                <span className="link-icon">🎥</span>
                Open Demo Video
              </button>
              <p className="external-hint">
                <code>{videoInfo.originalUrl}</code>
              </p>
            </div>
          )}

          {videoInfo.type === 'youtube' && (
            <>
              {videoLoading && (
                <div className="video-loading">
                  <p>Loading YouTube video...</p>
                </div>
              )}
              <iframe
                width="100%"
                height="400"
                src={videoInfo.embedUrl}
                title={`${title} Demo Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="youtube-embed"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ display: videoLoading ? 'none' : 'block' }}
              />
            </>
          )}

          {videoInfo.type === 'direct' && (
            <>
              {videoError ? (
                <div className="video-error">
                  <p>Unable to load video. This might be because:</p>
                  <ul>
                    <li>The video file is not in the correct location</li>
                    <li>The video format may not be supported by your browser</li>
                    <li>The file path is incorrect</li>
                  </ul>
                  <p>Expected path: <code>{videoSrc}</code></p>
                  <a 
                    href={videoSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-link"
                  >
                    Try opening video directly
                  </a>
                </div>
              ) : (
                <>
                  {videoLoading && (
                    <div className="video-loading">
                      <p>Loading video...</p>
                    </div>
                  )}
                  <video
                    ref={videoRef}
                    controls
                    preload="metadata"
                    playsInline
                    className="demo-video"
                    style={{ display: videoLoading ? 'none' : 'block' }}
                    onLoadStart={handleVideoLoadStart}
                    onLoadedData={handleVideoLoad}
                    onCanPlay={handleVideoLoad}
                    onError={handleVideoError}
                  >
                    <source src={videoInfo.embedUrl} type="video/quicktime" />
                    <source src={videoInfo.embedUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="video-modal-footer">
          <p className="video-hint">
            Press <kbd>ESC</kbd> to close or click outside the modal
          </p>
          {videoInfo.type === 'youtube' && (
            <p className="video-type-hint">
              YouTube Video • <a href={videoInfo.originalUrl} target="_blank" rel="noopener noreferrer">Open in YouTube</a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoModal