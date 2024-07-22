import React from 'react';
import Particles from './Particles';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
      <section className='home' id="home">
        <Particles />
        <div className='image'>

        </div>
        <p className='name'>
          Sebastian Skubała
        </p>
        <p className='me'>
          I am a Passionate
          <TypeAnimation
            sequence={[
                ' Full-Stack Web Developer ',
                2500,
                ''
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={50}
            deletionSpeed={30}
            deleteSpeed={30}
            />
        </p>
      </section>
    );
  };

  export default Home;