import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';
type GLTFResult =  {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

export default function Model(props:any) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/portfolio55.gltf') as unknown as GLTFResult;
  
  return (
    <group  {...props} dispose={null}>
      <group name="Scene">
        <group name="<BlenderRoot>" />
        <group name="<BlenderRoot>001" />
        <mesh
          name="instagram-#167"
          castShadow
          receiveShadow
          geometry={nodes['instagram-#167'].geometry}
          material={materials['Material.027']}
          position={[0.55, 3.229, -1.558]}
          rotation={[0, 1.49, 1.563]}
          scale={1.24}
        />
        <mesh
          name="Curve"
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials['Material.032']}
          position={[0.723, 3.218, -1.562]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={6.916}
        />
        <mesh
          name="github-#142"
          castShadow
          receiveShadow
          geometry={nodes['github-#142'].geometry}
          material={materials['SVGMat.005']}
          position={[1.18, 3.238, -1.573]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.245}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Wallls}
          position={[-0.222, 1.765, -0.234]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Wallls}
          position={[0.085, 0.218, 0.065]}
          scale={2}
        />
        <mesh
          name="Wall_floor_part"
          castShadow
          receiveShadow
          geometry={nodes.Wall_floor_part.geometry}
          material={materials.Wallls}
          position={[0.001, 1.988, -0.012]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Wallls.001']}
          position={[-1.828, 3.095, -0.799]}
          scale={[0.242, 0.31, 0.231]}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials['Wallls.004']}
          position={[-0.545, 3.153, -1.803]}
          rotation={[Math.PI, -1.565, Math.PI]}
          scale={[0.076, 0.161, 0.119]}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials['Wallls.005']}
          position={[-1.064, 3.159, -1.803]}
          rotation={[Math.PI, -1.565, Math.PI]}
          scale={[0.125, 0.16, 0.119]}
        />
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials['Wallls.006']}
          position={[-1.8, 3.307, 0.625]}
          scale={[0.257, 0.2, 0.14]}
        />
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials['Wallls.007']}
          position={[-1.8, 3.307, 1.302]}
          scale={[0.257, 0.2, 0.14]}
        />
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials['Wallls.002']}
          position={[0.635, 1.618, -1.303]}
          rotation={[0.024, -0.458, 0.078]}
          scale={[0.054, 0.069, 0.051]}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.022']}
          position={[1.408, 0.427, -0.568]}
          rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials['Material.022']}
            position={[0, 0, -0.863]}
          />
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials['Material.022']}
            position={[0, 0, -0.553]}
          />
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials['Material.022']}
            position={[0, 0, -0.274]}
          />
          <mesh
            name="Table"
            castShadow
            receiveShadow
            geometry={nodes.Table.geometry}
            material={materials.Wallls}
            position={[-1.204, -0.139, -1.001]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.076, 0.073, 0.076]}
          />
          <mesh
            name="table_top"
            castShadow
            receiveShadow
            geometry={nodes.table_top.geometry}
            material={materials.Table}
            position={[-0.001, -0.538, -0.992]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.189, 0.844, 1]}
          />
          <mesh
            name="Table001"
            castShadow
            receiveShadow
            geometry={nodes.Table001.geometry}
            material={materials.Table}
            position={[-0.47, -0.538, -0.987]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Table002"
            castShadow
            receiveShadow
            geometry={nodes.Table002.geometry}
            material={materials.Wallls}
            position={[-1.204, -1, -1.001]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.076, 0.073, 0.076]}
          />
          <mesh
            name="Table003"
            castShadow
            receiveShadow
            geometry={nodes.Table003.geometry}
            material={materials.Table}
            position={[-2.202, -0.951, -1.672]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.152, 1, 1]}
          />
          <mesh
            name="Table004"
            castShadow
            receiveShadow
            geometry={nodes.Table004.geometry}
            material={materials.Table}
            position={[-2.984, 1.512, -1.075]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[1.152, 1, 0.772]}
          />
          <mesh
            name="Table005"
            castShadow
            receiveShadow
            geometry={nodes.Table005.geometry}
            material={materials.Table}
            position={[-2.984, 1.512, -2.039]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[1.152, 1, 0.772]}
          />
        </mesh>
        <mesh
          name="Matrices"
          castShadow
          receiveShadow
          geometry={nodes.Matrices.geometry}
          material={materials.Wallls}
          position={[-0.885, 1.022, -0.372]}
          scale={[0.981, 1.019, 1.019]}
        />
        <mesh
          name="Sheet"
          castShadow
          receiveShadow
          geometry={nodes.Sheet.geometry}
          material={materials.Sheets}
          position={[-0.885, 0.981, 0.008]}
          scale={[0.894, 1, 1.162]}>
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Yellow Color']}
            position={[-0.26, 0.175, -1.022]}
            rotation={[-2.603, -0.158, 3.141]}
            scale={[0.626, 0.173, 0.566]}
          />
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials.Sheets}
            position={[0.213, 0.225, -0.979]}
            rotation={[-2.563, 0.396, -2.772]}
            scale={[0.626, 0.17, 0.577]}
          />
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.Table}
            position={[0.763, -0.11, 0.677]}
            scale={[1, 1, 0.861]}
          />
        </mesh>
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['Material.004']}
          position={[0.743, 1.576, 0.073]}
          rotation={[0, -0.345, 0]}
          scale={[0.851, 0.734, 1]}>
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials['Material.024']}
            position={[-0.044, -1.317, -0.257]}
            scale={[0.456, 0.529, 0.388]}
          />
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials['Material.023']}
            position={[-0.041, -0.928, -0.252]}
            rotation={[0, 0, -Math.PI]}
            scale={[-0.073, -0.364, -0.068]}
          />
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials['Material.025']}
            position={[0.319, -1.622, -0.26]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-0.084, -0.075, -0.092]}
          />
          <mesh
            name="Cylinder006"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials['Material.025']}
            position={[0.097, -1.614, -0.527]}
            rotation={[1.611, 0.05, -0.453]}
            scale={[-0.082, -0.077, -0.092]}
          />
          <mesh
            name="Cylinder007"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials['Material.025']}
            position={[-0.264, -1.614, -0.527]}
            rotation={[1.611, 0.05, -0.453]}
            scale={[-0.082, -0.077, -0.092]}
          />
          <mesh
            name="Cylinder008"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials['Material.025']}
            position={[-0.436, -1.68, -0.28]}
            rotation={[1.487, 0.007, -2.155]}
            scale={[-0.076, -0.084, -0.092]}
          />
          <mesh
            name="Cylinder009"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials['Material.025']}
            position={[-0.252, -1.656, -0.001]}
            rotation={[1.494, 0.038, -2.404]}
            scale={[-0.079, -0.081, -0.092]}
          />
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials['Material.025']}
            position={[0.146, -1.654, 0.019]}
            rotation={[1.487, 0.007, -2.155]}
            scale={[-0.076, -0.084, -0.092]}
          />
        </mesh>
        <mesh
          name="Circle003"
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials['Material.015']}
          position={[1.59, 1.514, -1.283]}
          rotation={[Math.PI, -1.541, Math.PI]}
          scale={0.605}>
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials['Material.021']}
            position={[-0.08, 0.306, 0.003]}
            rotation={[-0.031, 0.145, 0.432]}
            scale={[0.022, 0.181, 0.021]}
          />
          <mesh
            name="Cylinder013"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials['Material.020']}
            position={[-0.17, 0.501, 0.01]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.045, 0.044, 0.045]}
          />
          <mesh
            name="Cylinder014"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials.Table}
            position={[-0.045, 0.658, 0.019]}
            rotation={[-0.21, -0.352, -0.73]}
            scale={[0.022, 0.181, 0.021]}
          />
          <mesh
            name="Cylinder015"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={materials['Material.020']}
            position={[0.086, 0.833, 0.033]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.045, 0.044, 0.045]}
          />
          <mesh
            name="Cylinder016"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016.geometry}
            material={nodes.Cylinder016.material}
            position={[0.171, 0.892, 0.043]}
            rotation={[-0.293, -0.35, -1.059]}
            scale={[0.013, 0.057, 0.02]}
          />
          <mesh
            name="Sphere001"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={nodes.Sphere001.material}
            position={[0, 0.111, 0]}
            scale={0.051}
          />
          <mesh
            name="Sphere002"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002.geometry}
            material={materials['Material.015']}
            position={[0.36, 0.807, 0.044]}
            rotation={[-0.011, -1.111, 0.604]}
            scale={1.193}
          />
          <mesh
            name="Sphere003"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003.geometry}
            material={nodes.Sphere003.material}
            position={[0.247, 0.907, 0.049]}
            rotation={[-0.025, -0.05, 0.903]}
            scale={0.245}
          />
        </mesh>
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.001']}
          position={[0.311, 1.575, -1.397]}
          rotation={[0, -0.225, 0]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.002']}
          position={[0.311, 1.526, -1.397]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['Material.003']}
          position={[0.311, 1.625, -1.397]}
          rotation={[0, -0.095, 0]}
          scale={0.609}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['Material.005']}
          position={[0.487, 1.503, -0.854]}
          rotation={[0, -0.334, 0]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['Material.009']}
          position={[-0.919, 2.197, -1.558]}
          rotation={[0, -0.334, 0]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Material.011']}
          position={[-0.336, 2.35, -1.589]}
          rotation={[-1.535, 0, Math.PI / 2]}
          scale={[1.219, 1.522, 1.036]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['Material.006']}
          position={[-0.446, 2.35, -1.589]}
          rotation={[-1.532, 0.419, 1.555]}
          scale={[1.108, 0.957, 1.036]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['Material.007']}
          position={[-1.623, 1.588, 0.975]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['Material.014']}
          position={[-1.635, 1.632, 0.968]}
          rotation={[Math.PI, -0.261, Math.PI]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['Material.013']}
          position={[-1.635, 1.685, 0.968]}
          rotation={[Math.PI, -0.261, Math.PI]}
          scale={0.721}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['Material.012']}
          position={[-1.601, 1.76, 1.427]}
          rotation={[-1.569, 0.036, 3.105]}
          scale={[1.219, 1.522, 1.036]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['Material.011']}
          position={[-1.601, 1.76, 1.355]}
          rotation={[-1.569, 0.036, 3.105]}
          scale={[1.219, 1.153, 1.036]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials['Material.010']}
          position={[-1.601, 1.76, 1.288]}
          rotation={[-1.569, 0.036, 3.105]}
          scale={[1.219, 1.153, 1.036]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials['Material.007']}
          position={[-1.491, 2.722, 0.514]}
          rotation={[-1.569, 0.036, 3.105]}
          scale={[1.219, 1.522, 1.036]}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials['Material.008']}
          position={[-1.491, 2.722, 0.446]}
          rotation={[-1.569, 0.036, 3.105]}
          scale={[1.219, 1.522, 1.036]}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials['Material.016']}
          position={[-1.491, 2.722, 0.567]}
          rotation={[-1.569, 0.036, 3.105]}
          scale={[1.218, 0.92, 1.036]}
        />
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials['Material.009']}
          position={[-1.493, 2.654, 0.634]}
          rotation={[-1.788, 0.048, 3.105]}
          scale={[0.77, 0.581, 0.655]}
        />
        <mesh
          name="Circle004"
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={materials['Material.019']}
          position={[1.033, 1.502, -1.425]}
          scale={0.423}>
          <mesh
            name="Sphere004"
            castShadow
            receiveShadow
            geometry={nodes.Sphere004.geometry}
            material={materials['Material.017']}
            position={[0, 0.441, 0]}
            scale={[0.185, 0.34, 0.182]}
          />
          <mesh
            name="Sphere005"
            castShadow
            receiveShadow
            geometry={nodes.Sphere005.geometry}
            material={materials['Material.017']}
            position={[0.156, 0.632, -0.089]}
            rotation={[-0.163, -0.083, -0.34]}
            scale={[-0.079, -0.146, -0.078]}
          />
        </mesh>
        <mesh
          name="Circle005"
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={materials['Material.019']}
          position={[-1.588, 1.572, 0.406]}
          rotation={[-Math.PI, 1.334, -Math.PI]}
          scale={0.423}>
          <mesh
            name="Sphere006"
            castShadow
            receiveShadow
            geometry={nodes.Sphere006.geometry}
            material={materials['Material.017']}
            position={[0, 0.441, 0]}
            scale={[0.185, 0.34, 0.182]}
          />
          <mesh
            name="Sphere007"
            castShadow
            receiveShadow
            geometry={nodes.Sphere007.geometry}
            material={materials['Material.017']}
            position={[0.156, 0.632, -0.089]}
            rotation={[-0.163, -0.083, -0.34]}
            scale={[-0.079, -0.146, -0.078]}
          />
          <mesh
            name="Sphere008"
            castShadow
            receiveShadow
            geometry={nodes.Sphere008.geometry}
            material={materials['Material.017']}
            position={[-0.133, 0.585, -0.1]}
            rotation={[-0.271, -0.157, 0.414]}
            scale={[-0.068, -0.126, -0.067]}
          />
        </mesh>
        <mesh
          name="Circle007"
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials['Material.018']}
          position={[-1.556, 2.554, 1.41]}
          scale={0.126}
        />
        <mesh
          name="Circle008"
          castShadow
          receiveShadow
          geometry={nodes.Circle008.geometry}
          material={materials['Material.018']}
          position={[-1.281, 2.168, -1.414]}
          scale={0.126}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials['Material.026']}
          position={[0.605, 1.547, -1.339]}
          rotation={[0.337, -0.11, -2.162]}
          scale={[0.063, 0.007, 0.015]}
        />
        <mesh
          name="Cylinder017"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials['Material.028']}
          position={[3.058, 1.163, -0.568]}
          rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Table006"
            castShadow
            receiveShadow
            geometry={nodes.Table006.geometry}
            material={materials['Table.001']}
            position={[-2.202, -0.999, -1.221]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.152, 1, 0.761]}>
            <mesh
              name="Text"
              castShadow
              receiveShadow
              geometry={nodes.Text.geometry}
              material={materials['Material.029']}
              position={[-0.469, 0.078, -0.064]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.273, 0.413, 0.372]}
            />
          </mesh>
          <mesh
            name="Table007"
            castShadow
            receiveShadow
            geometry={nodes.Table007.geometry}
            material={materials['Table.001']}
            position={[-2.202, -0.999, -1.997]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.152, 1, 0.761]}
          />
        </mesh>
        <group
          name="Body"
          position={[1.116, 1.803, -1.175]}
          rotation={[-Math.PI, -1.396, -Math.PI / 2]}
          scale={[0.226, 0.099, 0.329]}>
          <mesh
            name="Plane012"
            castShadow
            receiveShadow
            geometry={nodes.Plane012.geometry}
            material={materials.PCBody}
          />
          <mesh
            name="Plane012_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_1.geometry}
            material={materials.PortWires}
          />
          <mesh
            name="Plane012_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_2.geometry}
            material={materials.Port}
          />
          <mesh
            name="Plane012_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_3.geometry}
            material={materials.Screen}
          />
          <mesh
            name="Plane012_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_4.geometry}
            material={materials.Side}
          />
          <mesh
            name="Plane012_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_5.geometry}
            material={materials.OnOffButton}
          />
          <mesh
            name="Plane012_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_6.geometry}
            material={materials.Logos}
          />
          <mesh
            name="Plane012_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_7.geometry}
            material={materials.ScreenOff}
          />
        </group>
        <mesh
          name="Stand"
          castShadow
          receiveShadow
          geometry={nodes.Stand.geometry}
          material={materials.PCBody}
          position={[1.115, 1.493, -1.17]}
          rotation={[Math.PI, -1.396, 3.046]}
          scale={0.099}
        />
        <group
          name="Keyboard"
          position={[1.015, 1.492, -0.919]}
          rotation={[0.001, -0.175, 0]}
          scale={0.099}>
          <mesh
            name="Plane014"
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials.PCBody}
          />
          <mesh
            name="Plane014_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials.PortWires}
          />
          <mesh
            name="Plane014_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_2.geometry}
            material={materials.Port}
          />
          <mesh
            name="Plane014_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_3.geometry}
            material={materials.Logos}
          />
          <mesh
            name="Plane014_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_4.geometry}
            material={materials.KeyboardKeys}
          />
          <mesh
            name="Plane014_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_5.geometry}
            material={materials.KeyboardLine}
          />
          <mesh
            name="Plane014_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_6.geometry}
            material={materials['On/Off']}
          />
          <mesh
            name="Plane014_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_7.geometry}
            material={materials['Side.001']}
          />
        </group>
        <group
          name="Mouse"
          position={[1.311, 1.488, -0.876]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.066}>
          <mesh
            name="Plane015"
            castShadow
            receiveShadow
            geometry={nodes.Plane015.geometry}
            material={materials.PCBody}
          />
          <mesh
            name="Plane015_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_1.geometry}
            material={materials.PortWires}
          />
          <mesh
            name="Plane015_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_2.geometry}
            material={materials.Port}
          />
          <mesh
            name="Plane015_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_3.geometry}
            material={materials.Logos}
          />
          <mesh
            name="Plane015_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_4.geometry}
            material={materials['On/Off']}
          />
          <mesh
            name="Plane015_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_5.geometry}
            material={materials['Side.001']}
          />
          <mesh
            name="Plane015_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_6.geometry}
            material={materials.Lens}
          />
          <mesh
            name="Plane015_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_7.geometry}
            material={materials.MouseTop}
          />
        </group>
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials['Material.030']}
          position={[-1.352, 0.745, 1.789]}
          rotation={[0.785, 0.47, -0.453]}
          scale={0.27}>
          <mesh
            name="Circle006"
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials['Material.019']}
            position={[0.093, -1.415, 0.928]}
            rotation={[-0.734, 1.166, 0.057]}
            scale={3.117}
          />
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials['Material.030']}
            position={[-0.509, -0.1, 0.356]}
            rotation={[0.136, -0.498, 0.465]}
            scale={1.365}
          />
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials['Material.030']}
            position={[-0.191, -0.5, -0.269]}
            rotation={[2.069, 0.06, 3.127]}
            scale={0.967}
          />
          <mesh
            name="Plane003"
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials['Material.030']}
            position={[0.349, -0.253, 0.386]}
            rotation={[0.074, 0.439, -0.385]}
          />
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials['Material.030']}
            position={[0.645, -0.569, -0.306]}
            rotation={[1.446, 0.761, -2.349]}
            scale={1.113}
          />
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials['Material.030']}
            position={[-0.761, -0.146, -0.402]}
            rotation={[0.539, -0.812, 1.085]}
            scale={1.365}
          />
          <mesh
            name="Plane006"
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials['Material.030']}
            position={[-0.093, -0.355, -0.805]}
            rotation={[2.001, 0.587, -2.909]}
            scale={0.967}
          />
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials['Material.030']}
            position={[0.648, -0.132, -0.478]}
            rotation={[0.813, 0.91, -1.502]}
            scale={1.113}
          />
          <mesh
            name="Plane009"
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials['Material.030']}
            position={[0.393, 0.445, 0.255]}
            rotation={[0.017, 0.241, -0.2]}
            scale={1.365}
          />
        </mesh>
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Material.015']}
          position={[-0.225, 0.282, 1.419]}
          scale={0.615}
        />
        <mesh
          name="Circle002"
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials.Table}
          position={[-0.228, 1.028, 1.514]}
          rotation={[-0.731, 0, 0]}
          scale={[9.413, 22.761, 9.61]}
        />
        <mesh
          name="Cylinder011"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials['Material.020']}
          position={[-0.23, 1.139, 1.414]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.04, 0.048, 0.04]}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.015']}
          position={[-0.219, 1.895, 0.675]}
          rotation={[0.544, 0.515, 0.142]}
          scale={[0.24, 0.428, 0.244]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/portfolio55.gltf')
