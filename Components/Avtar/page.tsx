import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

extend({ FBXLoader });

interface AvatarProps {
  animation: string;
  headFollow?: boolean;
  cursorFollow?: boolean;
  wireframe?: boolean;
  [key: string]: any;
}

export default function Avatar(props: AvatarProps) {
  const { animation } = props;
  const group = useRef<THREE.Group>(null);

  // Load the GLTF model
  const { nodes, materials } = useGLTF('models/avtar.gltf') as any;

  // FBXLoader instance
  const fbxLoader = new FBXLoader();

  // State to store the loaded animations
  const animations = useRef<THREE.AnimationClip[]>([]);

  useEffect(() => {
    const loadFBXAnimation = (url: string) => {
      return new Promise<THREE.AnimationClip>((resolve, reject) => {
        fbxLoader.load(
          url,
          (object) => {
            if (object.animations.length) {
              resolve(object.animations[0]);
            } else {
              reject(new Error(`No animations found in ${url}`));
            }
          },
          undefined,
          (error) => {
            console.error(`Error loading FBX file: ${url}`, error);
            reject(error);
          }
        );
      });
    };

    Promise.all([
      loadFBXAnimation('animations/Typing.fbx'),
      loadFBXAnimation('animations/Falling.fbx'),
      loadFBXAnimation('animations/Standing.fbx'),
    ])
      .then((loadedAnimations) => {
        animations.current = loadedAnimations;
        animations.current[0].name = 'Typing';
        animations.current[1].name = 'Falling';
        animations.current[2].name = 'Standing';
      })
      .catch((error) => {
        console.error('Error loading FBX animations:', error);
      });
  }, [fbxLoader]);

  // Setup animations using the mixer and actions
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const actions = useRef<{ [key: string]: THREE.AnimationAction | null }>({});

  useEffect(() => {
    if (group.current) {
      mixer.current = new THREE.AnimationMixer(group.current);
      animations.current.forEach((clip) => {
        actions.current[clip.name] = mixer.current!.clipAction(clip);
      });
    }
  }, [animations.current]);

  // Update frame logic
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
    const { mouse, camera } = state;
    if (group.current) {
      if (props.headFollow) {
        const head = group.current.getObjectByName('Head') as THREE.Object3D | null;
        if (head) {
          head.lookAt(camera.position);
        }
      }
      if (props.cursorFollow) {
        const target = new THREE.Vector3(mouse.x, mouse.y, 1);
        const spine = group.current.getObjectByName("Spine2") as THREE.Object3D | null;
        if (spine) {
          spine.lookAt(target);
        }
      }
    }
  });

  // Handle animation changes
  useEffect(() => {
    if (actions.current && actions.current[animation]) {
      actions.current[animation]?.reset().fadeIn(0.5).play();
      return () => {
        actions.current[animation]?.fadeOut(0.5).reset();
      };
    }
  }, [animation]);

  // Handle wireframe material update
  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material: any) => {
        if (material) material.wireframe = props.wireframe;
      });
    }
  }, [props.wireframe, materials]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          frustumCulled={false}
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload('models/avtar.gltf');
