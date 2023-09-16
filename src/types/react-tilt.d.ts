declare module 'react-tilt' {
  import React from 'react'

  interface TiltProps {
    options?: {
      // Isi tipe-tipe yang sesuai dengan properti-oprti yang digunakan dalam 'react-tilt'
      // Misalnya, jika 'options' memiliki properti 'max', 'scale', dll.
      max?: number
      scale?: number
      speed?: number
      // Tambahkan properti lain sesuai kebutuhan.
    }
    className?: string // Tambahkan className untuk kompatibilitas dengan 'children'.
    children?: React.ReactNode // Izinkan penggunaan 'children' di komponen 'Tilt'.
    // Tambahkan properti lain sesuai kebutuhan.
  }

  // Komponen Tilt dalam modul 'react-tilt'.
  const Tilt: React.FC<TiltProps>

  // Ekspor komponen Tilt.
  export default Tilt
}
