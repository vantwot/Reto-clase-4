import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Box() {
    const PATH = "/static/textures/box/"
    
    const props = useTexture({
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })

    return (
        <mesh castShadow={true} position={[0, 0.5, 0]}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial {...props} />
        </mesh>
    )
}