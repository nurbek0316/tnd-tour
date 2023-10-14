import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";

export default function ParallaxBody() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["50%", "300%"]);

    return (
        <div
            ref={ref}
            className="relative grid h-screen  w-full place-items-center overflow-hidden"
        >
            <motion.div
                className="absolute inset-10 z-0 rounded-3xl "
                style={{
                    backgroundImage: `url(/first-background-parallax.png)`,
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <motion.div style={{ y: textY }}>
                <motion.h1 className="z-20 pb-48 pl-96 text-3xl font-bold text-white md:text-6xl">
                    ...Earth's Water is Older Than the Sun
                </motion.h1>
            </motion.div>
            <div
                className="absolute inset-10 z-10 rounded-3xl "
                style={{
                    backgroundImage: `url(/first-mountain-parallax.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
}