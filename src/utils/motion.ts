/* eslint-disable @typescript-eslint/no-explicit-any */
import { Variants } from 'framer-motion' //
export const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variants => {
  let x = 0
  let y = 0
  if (direction === 'left') {
    x = 100
  } else if (direction === 'right') {
    x = -100
  }

  if (direction === 'up') {
    y = 100
  } else if (direction === 'down') {
    y = -100
  }
  return {
    hidden: {
      x: x,
      y: y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variants => {
  let x = 0
  let y = 0

  if (direction === 'left') {
    x = -100
  } else if (direction === 'right') {
    x = 100
  }

  if (direction === 'up' || direction === 'down') {
    y = 100
  }

  return {
    hidden: {
      x: x,
      y: y,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const staggerContainer = (
  staggerChildren?: any,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren ?? 0,
      },
    },
  }
}
