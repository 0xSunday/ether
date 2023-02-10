import React from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
const Footer = ({ insta, twitter, mail, discord }) => {
  return (
    <section id="contect" className="mt-auto ">
      <div className="flex flex-row justify-around border-yellow-300 sm:px-32 px-6 py-6 sm:py-10 sm:mx-10 mx-5 bottom-0 right-0 left-0 align-bottom">
        {insta && (
          <Link
            href={insta}
            className="text-3xl sm:text-5xl text-yellow-300 hover:text-yellow-700"
          >
            <BsInstagram />
          </Link>
        )}
        {twitter && (
          <Link
            href={twitter}
            className="text-3xl sm:text-5xl  text-yellow-300 hover:text-yellow-700"
          >
            <BsTwitter />
          </Link>
        )}

        {mail && (
          <Link
            href={`mailto:${mail}`}
            className="text-3xl sm:text-5xl  text-yellow-300 hover:text-yellow-700"
          >
            <AiTwotoneMail />
          </Link>
        )}
        {discord && (
          <Link
            href={discord}
            className="text-3xl sm:text-5xl  text-yellow-300 hover:text-yellow-700"
          >
            <BsDiscord />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Footer;
