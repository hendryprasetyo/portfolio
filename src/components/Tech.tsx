/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from '../hoc'
import { lazy } from 'react'
const BallCanvas = lazy(() => import('./canvas/BallCanvas'))

const Tech = () => {
  return <BallCanvas />
}

export default SectionWrapper(Tech, '')
