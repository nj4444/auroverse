import {
  Html,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  useAnimations,
  useEnvironment,
  useGLTF,
  useScroll,
  useVideoTexture,
} from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
// import {   } from 'framer-motion'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useControls } from "leva";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import EventPage from "../pages/screens/EventPage";
import TeamPage from "../pages/screens/TeamPage";
import GuidePage from "../pages/screens/GuidePage";
import CollabPage from "../pages/screens/CollabPage";

gsap.registerPlugin(ScrollTrigger);

// function useSnapScroll(timeline, snapPoints) {
//   const [scroll, setScroll] = useState({ progress: 0, offset: 0 });

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const docHeight = document.body.scrollHeight;
//       const maxScrollY = docHeight - windowHeight;

//       let progress = scrollY / maxScrollY;

//       // Snap to the nearest snap point
//       const nearestSnapPoint = snapPoints.reduce((a, b) => {
//         return Math.abs(b - progress) < Math.abs(a - progress) ? b : a;
//       });

//       // Check if the scroll progress is close enough to the nearest snap point
//       if (Math.abs(progress - nearestSnapPoint) < 0.05) {
//         progress = nearestSnapPoint;
//         window.scrollTo({ top: progress * maxScrollY, behavior: "smooth" });
//       }

//       setScroll({ progress, offset: progress * timeline.duration() });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [timeline, snapPoints]);

//   return scroll;
// }

export default function Model(props) {
  const meshRef = useRef();
  const myref = useRef();
  const manRef = useRef();
  const timeRef = useRef(0);
  const screen1 = useRef();
  const screen2 = useRef();
  const screen3 = useRef();
  const screen4 = useRef();
  const [currentPage, setCurrentPage] = useState(null);
  const openPage = (page) => {
    setCurrentPage(page);
  };

  const closePage = () => {
    setCurrentPage(null);
  };

  const scroll = useScroll();
  const tl = useRef();
  // const scroll = useSnapScroll(tl.current, [0, 0,8, 8, 12]);

  const { nodes, materials, animations } = useGLTF("/models/model.glb");
  const { actions } = useAnimations(animations, meshRef);
  const ManTexture = useEnvironment({ files: "/assets/texture.hdr" });
  // const envMap1 = useEnvironment({ files: './src/assets/lights4.hdr' })
  const sTexture1 = "/assets/screen3.mp4";
  const sTexture2 = "/assets/screen4.mp4";

  const { camera } = useThree();
  camera.fov = 28;

  useEffect(() => {
    actions.pointing.play();
  });

  const tweak = useControls({
    roughness: { value: 0.01, min: 0, max: 1 },
    metalness: { value: 0.92, min: 0, max: 1 },
  });

  useFrame((state, delta) => {
    if (scroll && scroll.offset) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  const isMobile = window.innerWidth <= 480;

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 0.2, ease: "easeIn " },
      paused: true,
    });

    if (isMobile) {
      // Add mobile-specific animations here
      tl.current
        .to(meshRef.current.scale, { x: 0.5, y: 0.5, z: 0.5 }, 0)
        .to(meshRef.current.position, { x: -1.5, y: 1.5, z: -1 }, 0)
        .to(meshRef.current.rotation, { y: 1.6 }, 0)
        .to(myref.current.rotation, { x: -1, z: 1.4, y: 0.9 }, 0)

        .to(screen3.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
        .to(screen4.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
        .to(screen2.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
        .to(screen1.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)

        .to(meshRef.current.position, { x: 0.05,y:1, z: 0 }, 0.25)
        .to(meshRef.current.rotation, { y: 0 }, 0.25)
        .to(myref.current.rotation, { x: 0, z: 0, y: 0 }, 0.25)

        .to(meshRef.current.rotation, { y: 0.7 }, 0.5)
        .to(meshRef.current.position, { x: -0.15, y: 0.5, z: 0 }, 0.5)
        .to(meshRef.current.scale, { x: 0.7, y: 0.7, z: 0.7 }, 0.5)
        .to(myref.current.rotation, { x: 1, z: 1, y: -1.6 }, 0.5)

        .to(meshRef.current.rotation, { x: 1.4, y: 0.34, z: -0.9 }, 0.75)
        .to(meshRef.current.position, { y: 1.7 }, 0.75)
        .to(meshRef.current.scale, { x: 4, y: 4, z: 4 }, 0.75);
    } else {
      // Add desktop-specific animations here
      tl.current
        .to(meshRef.current.scale, { x: 1, y: 1, z: 1 }, 0)
        .to(meshRef.current.position, { x: 0.2, y: 0.4, z: -1 }, 0)
        .to(meshRef.current.rotation, { y: 1.6 }, 0)
        .to(myref.current.rotation, { x: -1, z: 1.4, y: 0.9 }, 0)

        .to(screen3.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
        .to(screen4.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
        .to(screen2.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)
        .to(screen1.current.scale, { x: 1.54, y: 0.65, z: 0.85 }, 0)

        .to(meshRef.current.position, { x: -2, z: 0 }, 0.25)
        .to(meshRef.current.rotation, { y: 0 }, 0.25)
        .to(myref.current.rotation, { x: 0, z: 0, y: 0 }, 0.25)

        .to(meshRef.current.rotation, { y: 0.7 }, 0.5)
        .to(meshRef.current.position, { x: -0.15, y: -2.5, z: 0 }, 0.5)
        .to(meshRef.current.scale, { x: 2.1, y: 2.1, z: 2.1 }, 0.5)
        .to(myref.current.rotation, { x: 1, z: 1, y: -1.6 }, 0.5)

        // .to(manRef.current.scale, { x: -1, y: -1, z: -1 }, 0.5)
        // .to(manRef.current.position, { x: 0, y: -120, z: -200 }, 0.5)

        .to(meshRef.current.rotation, { x: 1.4, y: 0.34, z: -0.9 }, 0.75)
        .to(meshRef.current.position, { y: 2.8 }, 0.75)
        .to(meshRef.current.scale, { x: 6.5, y: 6.5, z: 6.5 }, 0.75);
    }
  }, []);

  return (
    <group ref={myref} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          ref={meshRef}
          position={isMobile? [-2.3,-1.2,-1.7]: [-4, -2.3, -1.7]}
          rotation={[0, 3.2, 0]}
          scale={isMobile? 2: 2.5}
        >
          <group
            ref={manRef}
            name="Armature002"
            position={[0, 2, -4.15]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0}
          >
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="Cube002"
              geometry={nodes.Cube002.geometry}
              material={materials["Simple Crystal"]}
              skeleton={nodes.Cube002.skeleton}
            >
              <MeshTransmissionMaterial
                {...tweak}
                envMap={ManTexture}
                color="rgb(150,180,170)"
                resolution={128}
                thickness={0.1}
                anisotropy={2}
                temporalDistortion={0.1}
                distortion={5}
              />
            </skinnedMesh>
          </group>

          <mesh
            name="Screen1"
            ref={screen1}
            onClick={() => openPage('EventPage')}
            onPointerOver={(e) => {
              e.object.scale.set(1.64, 0.75, 0.96);
            }}
            onPointerOut={(e) => {
              e.object.scale.set(1.54, 0.65, 0.85);
            }}
            geometry={nodes.Screen1.geometry}
            material={materials["avaturn_glasses_1_material.003"]}
            position={[1.6, 2.97, 3.07]}
            rotation={[-Math.PI / 2, 0, 0.4]}
            scale={[0, 0, 0]}
          >
            <VideoMaterial url={sTexture1} />
          </mesh>
          <mesh
            name="Screen3"
            ref={screen3}
            opac
            onClick={() => openPage('TeamPage')}
            onPointerOver={(e) => e.object.scale.set(1.64, 0.75, 0.96)}
            onPointerOut={(e) => e.object.scale.set(1.54, 0.65, 0.85)}
            geometry={nodes.Screen3.geometry}
            material={materials["avaturn_glasses_1_material.003"]}
            position={[1.6, 1.13, 3.07]}
            rotation={[-Math.PI / 2, 0, 0.4]}
            scale={[0, 0, 0]}
          >
            <VideoMaterial url={sTexture2} />
          </mesh>
          <mesh
            name="Screen2"
            ref={screen2}
            onClick={() => openPage('GuidePage')}
            onPointerOver={(e) => e.object.scale.set(1.64, 0.75, 0.96)}
            onPointerOut={(e) => e.object.scale.set(1.54, 0.65, 0.85)}
            geometry={nodes.Screen2.geometry}
            material={materials["avaturn_glasses_1_material.003"]}
            position={[-1.54, 2.97, 3.07]}
            rotation={[-Math.PI / 2, 0, -0.41]}
            scale={[0, 0, 0]}
          >
            <VideoMaterial url={sTexture2} />
          </mesh>
          <mesh
            name="Screen4"
            ref={screen4}
            onClick={() => openPage('CollabPage')}
            onPointerOver={(e) => e.object.scale.set(1.64, 0.75, 0.96)}
            onPointerOut={(e) => e.object.scale.set(1.54, 0.65, 0.85)}
            geometry={nodes.Screen4.geometry}
            material={materials["avaturn_glasses_1_material.003"]}
            position={[-1.54, 1.13, 3.07]}
            rotation={[-Math.PI / 2, 0, -0.41]}
            scale={[0, 0, 0]}
          >
            <VideoMaterial url={sTexture1} />
          </mesh>
          <group
            name="base"
            position={[0.03, -0.55, -0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.71}
          >
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials["Laminate floor"]}
            >
              <MeshTransmissionMaterial
                roughness={0.1}
                metalness={0.8}
                envMap={ManTexture}
                color="rgb(150,220,180)"
                resolution={128}
                thickness={0.1}
                anisotropy={2}
                temporalDistortion={0.1}
                distortion={5}
              />
            </mesh>
            <mesh
              name="Ellipse_1"
              geometry={nodes.Ellipse_1.geometry}
              material={materials["Special Metallic Car Paint"]}
            >
              <MeshTransmissionMaterial
                roughness={0.4}
                metalness={0.2}
                envMap={ManTexture}
                color="rgb(30,180,190)"
                resolution={128}
                thickness={0.35}
                anisotropy={1}
                temporalDistortion={0.1}
                distortion={0.45}
              />
            </mesh>
          </group>
        </mesh>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.01}
          fov={30}
          position={[-8.59, 1.9, -9.8]}
          rotation={[Math.PI, -0.71, Math.PI]}
        />
      </group>
      <Html fullscreen>
        <div
          className="screen-container"
          style={{
            height: window.innerHeight,
            width: window.innerWidth,
            position: "absolute",
            // transform: `translate3d(${popupPosition.x}px, ${popupPosition.y}px, 0)`,
            pointerEvents: "none",
          }}
        >
          {currentPage === 'EventPage' && <EventPage isOpen={true} togglePopup={closePage} />}
          {currentPage === 'TeamPage' && <TeamPage isOpen={true} togglePopup={closePage} />}
          {currentPage === 'GuidePage' && <GuidePage isOpen={true} togglePopup={closePage} />}
          {currentPage === 'CollabPage' && <CollabPage isOpen={true} togglePopup={closePage} />}
        </div>
      </Html>
    </group>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} transparent toneMapped={true} />;
}

useGLTF.preload("/models/model.glb");
