import CanvasLoader from '../Loader'
import { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
const Ball = lazy(() => import('./Ball'))
import { technologies, TTechnologies } from '../../constants'

const BallCanvas = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-20">
      {technologies.map((val: TTechnologies) => (
        <div className="w-28 h-28" key={val.name}>
          <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <Ball imgUrl={val.icon} />
            </Suspense>

            <Preload all />
          </Canvas>
          <h3 className="text-[#27374D] text-[20px] font-bold text-center">
            {val.name}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default BallCanvas
