'use client'
import React from 'react'
import Image from 'next/image'
import './loading.css'

export default function Loading(): JSX.Element {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="van-animation">
          <Image
            src="/assets/van-loading.png"
            alt="配送バン"
            width={120}
            height={120}
            className="van-image"
            priority
            unoptimized
          />
        </div>
        <p className="brand">
          FLEX GO.<span className="dot">.</span>
        </p>
      </div>
    </div>
  )
}