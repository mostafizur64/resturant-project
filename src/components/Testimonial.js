import React from "react";
// import components
import TestimonialCarousel from "./TestimonialCarousel";
// import data
import { testimonialData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
const Testimonial = () => {
  // destructure testimonial data
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <section className="bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px] ">
      <div className="container mx-auto">
        {/* text  */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center flex flex-col items-center justify-center"
        >
          <h2 className="h2 text-white capitalize">{title}</h2>
          <p className="text-white/70 capitalize mb-8">{subtitle}</p>
          <div className="mb-12">
            <img src={modelImg} alt="img"></img>
          </div>
        </motion.div>
        {/* carousel  */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial='hidden'
          whileInView={'show'}
          className="flex items-center justify-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
