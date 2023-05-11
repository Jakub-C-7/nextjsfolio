"use client";
// import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import ComponentLayout from "./layout";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <ComponentLayout>
      <motion.div variants={textVariant()} id="experience">
        <p className={styles.sectionSubText}>The path so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
    </ComponentLayout>
  );
};

export default Experience;
