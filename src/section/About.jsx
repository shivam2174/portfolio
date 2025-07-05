
import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GradientSphere from '../components/GraidentSphere';
import TitleHeader from '../components/TitleHeader';
import { PIC } from '../../public/models/PIC';
import { bentoSocialLinks } from '../constants';



const About = () => {

  return (
    <section id="about" className="flex flex-col items-center justify-center relative px-5 py-10 md:py-0">
      <GradientSphere
        sphere1class="gradient-sphere sphere-1"
        sphere2class="gradient-sphere sphere-2"
      />
      <div className="w-full max-w-7xl z-10">
        <TitleHeader
          title="about me"
          text="passionate developer and lifelong learner"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
          {/* Left Column */}
          <div className="md:col-span-7 bg-black-300 rounded-2xl p-7">
            <img
              src="/images/laptop.svg"
              alt="laptop"
              className="w-16 md:w-32"
            />
            <div className="mt-5">
              <h1 className="text-blue-50 text-3xl md:text-5xl">Shivam Tyagi</h1>
              <p className="mt-2 text-base md:text-2xl">
                I am a San Francisco-based product designer with a focus on
                web design, illustration, and visual development. I have a
                diverse range of experience having worked across various
                fields and industries.
              </p>
            </div>
          </div>

          {/* Right Column (Canvas) */}
          <div className="md:col-span-5 h-60 md:h-full bg-pink-100 rounded-2xl hover:cursor-grab">
            <Canvas camera={{ position: [0, 1.5, 4], fov: 40 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 2, 4]} />
              <Suspense fallback={null}>
                <PIC />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

          {/* Text Blocks */}
          {/* <div className="md:col-span-6 bg-black-300 rounded-2xl p-7">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <h1 className="gradient-title text-2xl md:text-3xl font-medium">
                Web Design & Dev
              </h1>
              <p className="text-base md:text-2xl max-w-xl">
                Cleanly Designed, Conversion-focused, and built for easy
                updates.
              </p>
            </div>
          </div> */}

          {/* <div className="md:col-span-6 bg-black-300 rounded-2xl p-7">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="gradient-title text-2xl md:text-3xl font-medium">
                UX UI Design
              </h1>
              <p className="text-base md:text-2xl max-w-xl">
                Seamless web or mobile app design to wow your users.
              </p>
            </div>
          </div> */}

          {/* Motivational Block */}
          <div className="md:col-span-4 bg-black-300 rounded-2xl p-7 flex flex-col justify-between">
            <h1 className="gradient-title text-3xl md:text-5xl font-bold">BE YOURSELF!</h1>
            <h1 className="gradient-title text-3xl md:text-5xl font-bold">BE DIFFERENT!</h1>
            <h1 className="gradient-title text-3xl md:text-5xl font-bold">BUILD DIFFERENT!</h1>
          </div>

          {/* Social Links */}
          {bentoSocialLinks.map((item, index) => (
            <div
              key={index}
              className="md:col-span-4 bg-black-300 rounded-2xl p-7 group cursor-pointer"
            >
              <div className="flex justify-between items-center h-full">
                <div className="flex items-center gap-3 md:gap-5">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 md:w-8 md:h-8" />
                  <h1 className="gradient-title text-xl md:text-3xl font-medium">
                    {item.name}
                  </h1>
                </div>
                <div className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
                  <img
                    src="/images/arrowupright.svg"
                    alt="arrow-up"
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
