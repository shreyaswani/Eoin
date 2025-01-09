"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      An <span className="font-medium">Experienced and Professional</span> individual, with over 25 year’s{" "}
       practical working knowledge of some of the largest Blue Chip companies. Both <span className="underline">Manager and Mentor</span>,
        with aggressive goals and objectives from concept to implementation, utilizing cutting edge
         technologies to automate, evangelize, simplify, rationalize and ultimately reduce operational costs.
      </p>
      <p>


      <span className="font-medium">Specialties:</span> SQL 2019, Windows Server 2019,
         AWS/Azure Cloud adoption, cost optimization, seamless software upgrades, clustering frontend/backend environments, and implementing BCDR for global enterprises.
      </p>
    </motion.section>
  );
}


