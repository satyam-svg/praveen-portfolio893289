import React, { useEffect, useRef } from "react";
import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import * as THREE from "three";

// Define the type for a project
interface ProjectType {
  title: string;
  url: string;
  image: string;
  description: string;
}

// Define the type for the props that the Project component will receive
interface ProjectProps {
  project: ProjectType;
  highlighted: boolean;
}

// List of projects
export const projects: ProjectType[] = [
  {
    title: "Portfolio",
    url: "https://iampraveen.vercel.app/",
    image: "texture/portfolio .jpg",
    description: "This is my personal porfolio made using React three fibre,Nextjs ,typescript,Blender",
  },
  {
    title: "Inclusify",
    url: "https://inclusify-donation-platform.vercel.app/",
    image: "texture/donation.jpg",
    description: "This is Official website of Inclusify where u can help poor people by donation some amounts of money",
  },
  {
    title: "Product",
    url: "",
    image: "texture/Product.jpg",
    description: "Will be Live Soon",
  },
  
];

// Project component
const Project: React.FC<ProjectProps> = ({ project, highlighted }) => {
  const background = useRef<THREE.Mesh>(null);
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    if (background.current) {
      const material = background.current.material;
      if (Array.isArray(material)) {
        material.forEach((mat) => {
          mat.opacity = bgOpacity.get();
        });
      } else {
        (material as THREE.Material).opacity = bgOpacity.get();
      }
    }
  });

  return (
    <group>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2.1]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2]}
        url={project.image}
        toneMapped={false}
        position={[0, 0.3, 0]} 
      />
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

// Atom for managing the current project
export const currentProjectAtom = atom(Math.floor(projects.length / 2));

// Projects component
export const Projects: React.FC = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={`project_${index}`}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};

export default Projects;
