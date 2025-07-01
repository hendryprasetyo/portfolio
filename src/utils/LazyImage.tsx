/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  titleImage: string
  loading?: 'lazy' | 'eager'
  width: number
  height: number
  placeholderSrc: string
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  titleImage,
  placeholderSrc,
}) => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc || '')

  const handleImageLoad = useCallback(() => {
    // Saat gambar asli selesai dimuat, ganti src dari placeholder ke gambar asli
    setImageSrc(src)
  }, [src])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Komponen memasuki viewport, kita dapat memuat gambar
          const image = new Image()
          image.src = src
          image.alt = alt
          image.onload = handleImageLoad
        }
      })
    })

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [src, alt, handleImageLoad])

  return (
    <img
      ref={imageRef}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      className={className}
      title={titleImage}
      src={imageSrc}
    />
  )
}

export default LazyImage
