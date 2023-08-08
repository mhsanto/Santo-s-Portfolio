import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleConfig from "./config/particles.config";
import { styled } from "styled-components";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <ParticleContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig}
      />
    </ParticleContainer>
  );
};

const ParticleContainer = styled.div`
  position: relative;
  height: 100vh;
  max-height: 100vh;
  #tsparticles {
    position: absolute;
    inset: 0;
  }
`;
export default ParticlesBackground;
