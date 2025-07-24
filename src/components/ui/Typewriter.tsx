"use effect"

import { TypewriteType } from '@/types/types';
import { Typewriter as SimpleTypewriter } from 'react-simple-typewriter'

const Typewriter = ({ text, speed = 70, classname }: TypewriteType) => {
  return (
    <>
      <SimpleTypewriter
        words={[text]}
        loop={1}
        cursor={false}
        typeSpeed={speed}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </>
  )
};

export default Typewriter;
