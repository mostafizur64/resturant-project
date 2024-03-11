import React from "react";
import { teamData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn, variants } from "../variants";
const Team = () => {
  // destructure teamData
  const {
    pretitle,
    title,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    chefImg,
  } = teamData;
  return (
    <section className="relative top-96 z10 lg:top-[480px] min-h-[720px]">
      <div className="container mx-auto">
        {/* text and wrapper image  */}

        <div className="flex lg:flex-row flex-col">
          {/* text  */}
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 text-center lg:text-left lg:pt-14"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-[60px]">{sub1}</p>
            <p>{sub2}</p>
            <div className="my-[26px]">
              <div className="text-2xl capitalize font-semibold text-accent">
                {name}
              </div>
              <div className="text-[15px] font-semibold capitalize text-grey/70">
                {occupation}
              </div>
            </div>
            <div className="flex items-center lg:justify-start justify-center mb-8 lg:mb-0">
              <img src={signatureImg} alt="signatureImg" />
            </div>
          </motion.div>
          {/* image  */}
          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1.4)}
            initial='hidden'
            whileInView={'show'}
            className="flex-1"
          >
            <img src={chefImg} alt="signatureImg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
