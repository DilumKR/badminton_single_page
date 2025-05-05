"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        "Step onto the court and join our vibrant badminton community, where
        players of all levels come together to elevate their game. Whether
        you're just starting out or aiming for competitive success, our club
        offers a diverse range of training programs designed to nurture your{" "}
        <span className="font-extrabold text-white"> skills </span> and{" "}
        <span className="font-extrabold text-white"> passion </span> for the
        sport. From mastering the fundamentals to honing advanced techniques,
        our experienced coaches provide{" "}
        <span className="font-extrabold text-white"> personalized </span>
        guidance to help you reach your full potential and thrive on the
        badminton court"
      </motion.p>

      {/* <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/shuttle.png"
        alt="arrow down"
        className="w-32 h-32 object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default About;
