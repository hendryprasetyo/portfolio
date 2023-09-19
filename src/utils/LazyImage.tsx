import React, { useEffect, useRef } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Komponen memasuki viewport, kita dapat memuat gambar
          const image = new Image()
          image.src = src
          image.alt = alt
          image.onload = () => {
            // Gambar telah dimuat, kita akan mengganti sumber gambar pada elemen <img>
            if (imageRef.current) {
              imageRef.current.src = src
            }
          }
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
  }, [src, alt])

  return <img ref={imageRef} alt={alt} className={className} />
}

export default LazyImage
