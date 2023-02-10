import Image from "next/image";
import React from "react";
import profile2 from "../../public/profile2.jpg";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = (props) => {
  const [text] = useTypewriter({
    // words: [" I'M Sunil Reddy", "  Meme Coin Lovers"],
    words: [" ETHER", "A NEW  META IN NFT"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.section
      className="flex justify-center items-center flex-col  my-6 mb-14 sm:mb-14"
      // variants={parentDiv}
      // initial="hidden"
      // animate="visible"
    >
      <motion.div /**variants={childrenDiv} **/>
        <Image
          src={profile2}
          alt="Sunil Reddy"
          className="rounded-full h-52 w-52 sm:h-72 sm:w-72"
        />
      </motion.div>
      <motion.h1
        /**variants={childrenDiv} **/
        className="font-1 font-poppins font-semibold sm:text-[52px] text-[25px] text-white "
      >
        Hi, <span className="text-yellow-300"> {text}</span>
      </motion.h1>
      <motion.p
        /**variants={childrenDiv} **/
        className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[18px] leading-[30.8px] text-center"
      >
        Blue Chip <span className="text-yellow-300"> NFT </span>On
        <span className="text-yellow-300"> Ethereum </span> Network
      </motion.p>
    </motion.section>
  );
};

export default Hero;
