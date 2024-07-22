import React from 'react';
import Particles from './Particles';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
      <section className='home'>
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
                ' Full-Stack Web Developer ', // Tekst do wyświetlenia
                2500, // Czas przerwy przed rozpoczęciem usuwania
                '' // Usuwamy tekst
            ]}
            wrapper="span" // Element, w którym będzie wyświetlany tekst
            cursor={true} // Pokazuje kursor
            repeat={Infinity} // Powtarza animację w nieskończoność
            speed={50} // Szybkość pisania w ms
            deletionSpeed={30} // Szybkość usuwania w ms
            deleteSpeed={30} // Szybkość usuwania w ms
            />
        </p>
      </section>
    );
  };

  export default Home;