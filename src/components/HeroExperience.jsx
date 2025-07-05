// import { Canvas } from "@react-three/fiber";

// import { Sparkles } from "@react-three/drei";
// import { HeroBoy } from "./models/HeroBoy";


// const HeroExp = () => {
//   return (
//     <Canvas>
//       <ambientLight />
//       <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
//       <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

//       <group>
//       < HeroBoy scale={9} position={[0, -15, 0]}/>
//       </group>
//       <Sparkles count={700} size={2} speed={0.2} color={"red"} scale={[10,10,2]} />
//     </Canvas>
//   );
// };

// export default HeroExp;
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Heroboy } from "./HeroBoy";



const HeroExp = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color="#FF28D5" />
      <directionalLight position={[2, 0, 3]} intensity={3} color="#1C34FF" />

      <group>
        <Heroboy scale={9} position={[0,-15,0]}/>
      </group>
      <Sparkles count={700} size={2} speed={0.2} color="pink" scale={[10, 10, 2]} />
    </Canvas>
  );
};

export default HeroExp;
