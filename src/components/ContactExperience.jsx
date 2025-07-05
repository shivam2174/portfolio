import { Canvas } from "@react-three/fiber";
import { Contactboy } from "./Contactboy";



const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [-3, 0, 4] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1C34FF"} />
      <group rotation={[0, -0.5, 0]}>
        <Contactboy scale={2.5} position={[0, -3, 0]}/>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
