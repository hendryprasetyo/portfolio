declare module 'maath/random/dist/maath-random.esm' {
  interface InSphereOptions {
    radius: number
    center?: Float32Array | number[]
    scale?: number
  }

  export function inSphere(
    points: Float32Array,
    options?: InSphereOptions
  ): Float32Array
}

// Jika 'maath' memiliki fungsi atau tipe lain yang digunakan dalam kode Anda,
// tambahkan deklarasi yang sesuai.
