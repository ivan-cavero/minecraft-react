import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../images/textures'

export function Ground () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // X Y Z
    position: [0, 1, 0]
  }))

  groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}
