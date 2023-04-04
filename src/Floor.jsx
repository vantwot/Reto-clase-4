import { useTexture } from "@react-three/drei";

export default function Floor() {

    const PATH = "/static/textures/floor/"
    
    const props = useTexture({
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })

    return (
        <mesh receiveShadow={true} position = {[0, 0, 0]}  rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[6, 6]} />
            <meshStandardMaterial {...props} />
        </mesh>
    )
}
