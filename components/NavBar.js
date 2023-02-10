import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
// import {profile2} from "";
const NavBar = (props) => {
  let con = props.con;
  let cont = props.cont;
  let allp = false;
  allp = props.allp;
  return (
    <nav className="w-full  flex py-6 justify-between items-center navbar text-white">
      <motion.h1
        className="font-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white "
        animate={{ x: ["-10vh", "5vh", "0vh"] }}
        transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
      >
        <Link href="/" className="flex justify-center items-center gap-1">
          {/* BL
          <span className="text-yellow-300">O</span>G */}
          <img
            src="/profile2.jpg"
            alt="Ether"
            className="w-11 sm:w-16 rounded-full"
            // className="rounded-full h-52 w-52 sm:h-72 sm:w-72"
          />
          <h1 className="text-2xl sm:text-3xl">ET
            <span className="text-yellow-300">H</span>ER
          </h1>
        </Link>
      </motion.h1>

      {con && (
        <motion.ul
          className="list-none flex justify-end items-center flex-1 z-10"
          animate={{ y: [ "-50vh", "0vh"] }}
          transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
        >
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
            <Link href="/posts">All Posts</Link>
          </li>
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
            <Link href="/contect">Contact</Link>
          </li>
        </motion.ul>
      )}

      {allp && (
        <ul className="list-none flex justify-end items-center flex-1 z-10">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
            <Link href="/posts">All Posts</Link>
          </li>
        </ul>
      )}

      {cont && (
        <ul className="list-none flex justify-end items-center flex-1 z-10">
          <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
            <Link href="/contect">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
