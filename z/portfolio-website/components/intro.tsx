"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsInstagram, BsLinkedin, BsPinterest, BsTwitter } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              alt=""
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
 <span className="font-bold">Hello, I'm Eoin Leonard</span> from <span className="font-bold">Dublin, Ireland.</span> I'm an{" "}
        experienced, passionate and professional high energy leader with over{" "}
        <span className="font-bold">25 years</span> of practical working knowledge.
       <span className="italic"> Manager, Mentor & Motivator</span>, With a keen interest in {" "}
        <span className="underline">AGI/UX/UI</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition hover:bg-gray-100 cursor-pointer borderBlack dark:bg-white/10"
          href="/Eoin_Leonard_CV.docx"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://uk.linkedin.com/in/chiefbuttonpusher"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/database__error"
          target="_blank"
        >
          <BsInstagram />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.twitter.com/database__error"
          target="_blank"
        >
          <BsTwitter />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://in.pinterest.com/database__error/"
          target="_blank"
        >
          <BsPinterest />
        </a>
      </motion.div>
    </section>
  );
}
