import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Group, SkinnedMesh } from 'three';

interface ModelProps {
  // Define any props you expect to pass to this component
  position: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ position, ...props }) => {
  const group = useRef<Group>(null); // Ref for the group element
  const { nodes, materials, animations } = useGLTF('models/demoavtar.gltf'); // Load GLTF model
  const { actions } = useAnimations(animations, group); // Get animation actions

  const ActionName = 'Armature|mixamo.com|Layer0';

  useEffect(() => {
    // Play the animation named 'Armature|mixamo.com|Layer0' when component mounts
    actions[ActionName]?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
            material={materials.Wolf3D_Eye}
            skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.EyeLeft as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.EyeLeft as SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={(nodes.EyeRight as SkinnedMesh).geometry}
            material={materials.Wolf3D_Eye}
            skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.EyeRight as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.EyeRight as SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
            material={materials.Wolf3D_Body}
            skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={(nodes.Wolf3D_Hair as SkinnedMesh).geometry}
            material={materials.Wolf3D_Hair}
            skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
            material={materials.Wolf3D_Skin}
            skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences}
          />
          <primitive object={(nodes.Hips as Group)} />
        </group>
      </group>
    </group>
  );
};

// Preload the GLTF model
useGLTF.preload('models/demoavtar.gltf');

export default Model;
