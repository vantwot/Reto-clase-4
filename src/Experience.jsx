import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Box from './Box'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper,
    SpotLightHelper} from 'three'
import { RectAreaLightHelper }  from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

export default function Experience() {
    const directionalLightRef = useRef();
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    const rectAreaLightRef = useRef();
    const spotLightRef = useRef();

    useHelper(directionalLightRef, DirectionalLightHelper, 1);
    useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
    useHelper(pointLightRef, PointLightHelper, 1);
    useHelper(rectAreaLightRef, RectAreaLightHelper, 1);
    useHelper(spotLightRef, SpotLightHelper, 1);

      return (
        <>
          <Perf position="top-left" />

          <OrbitControls makeDefault />
    
          <directionalLight ref={directionalLightRef} castShadow position={[2, 5, 2]} intensity={1.5} />
          <ambientLight intensity={2} />
          
          {/*<hemisphereLight ref={hemisphereLightRef} castShadow args={['red', 'white', 3]} position={[2, 5, 2]} />*/}

          {/*<pointLight ref={pointLightRef} castShadow color="white" intensity={1.5} position={[2, 3, 2]} />*/}

          {/*<rectAreaLight ref={rectAreaLightRef} intensity={1.5} position={[0, 5, 0]} />*/}

          {/*<spotLight ref={spotLightRef} intensity={1} position={[0, 3, -6]} angle={Math.PI / 4} penumbra={0.5} /> */}
          
          <Box/>
          <Floor/>
        </>
      );
    }
    