import Image from 'next/image'
import React from 'react'

// ArrowIcon component
// Props:
// - direction: strictly typed union of 'top' | 'bottom' | 'left' | 'right'
// Renders the Arrow.svg and applies rotation based on direction.
export type ArrowDirection = 'top' | 'bottom' | 'left' | 'right'

interface ArrowIconProps {
  direction: ArrowDirection
  // allow passing an optional className to extend styling
  className?: string
  // optional alt text override
  alt?: string
}

export default function ArrowIcon({ direction, className = '', alt = 'arrow icon' }: ArrowIconProps) {
  // Map directions to rotation degrees that match original usage (ArrowLeft was rotate-180)
  const rotationClass = {
    top: 'rotate-[-90deg]',
    bottom: 'rotate-[90deg]',
    left: 'rotate-180',
    right: '',
  }[direction]

  // Compose classes. The original used text-custom-green and min-w-[30px]. Keep them as defaults.
  const classes = `${rotationClass} text-custom-green min-w-[15px] ${className}`

  // Default intrinsic sizes for the asset (assumed original pointing right):
  const intrinsic = { width: 30, height: 68 }

  // For top/bottom we want the layout width/height to swap so the rotated
  // image occupies the expected (narrow) height instead of keeping the
  // original tall bounding box.
  const { width, height } = direction === 'top' || direction === 'bottom'
    ? { width: intrinsic.height, height: intrinsic.width }
    : intrinsic

  return (
    <Image
      className={classes}
      alt={alt}
      src={'./Arrow.svg'}
      unoptimized
      width={width}
      height={height}
    />
  )
}
