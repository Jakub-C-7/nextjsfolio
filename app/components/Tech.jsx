"use client";
import { BallCanvas } from "./canvas";
import ComponentLayout from "./layout";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import Image from "next/image";

const Tech = () => {
  return (
    <ComponentLayout>
      <motion.div variants={textVariant()} id="tech">
        <p className={styles.sectionSubText}>Current tools in the workshop</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 key={technology.name}"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            {/* <div>
              {technology.name}
              <img src={technology.icon}></img>
            </div> */}
          </div>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default Tech;
