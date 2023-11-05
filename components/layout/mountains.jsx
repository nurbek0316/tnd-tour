import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export default function Mountains() {
    const ref = useRef(null);
    const [isScrollingMountains, setIsScrollingMountains] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const mountainY = useTransform(scrollYProgress, [-0.2,1.5], ["-5%", "-40%"]);
    const textX = useTransform(scrollYProgress, [0, 0.5], ["40%", "10%"]);

    return (
        <div
            ref={ref}
            className="relative grid h-[480px] w-full max-w-[1375px] place-items-center overflow-hidden"
        >
            <div
                className="absolute inset-y-5 inset-x-10 mb-0 z-0 h-[400px]  rounded-3xl overflow-hidden"
            >
                <div
                    className="w-full h-full rounded-3xl"
                    style={{
                        backgroundImage: `url(/first-background-parallax.png)`,
                        backgroundSize: "cover",

                    }}
                /><h1 className='absolute left-[400px] top-[115px] bg-gradient-to-br from-stone-50 to-cyan-100 bg-clip-text font-display text-4xl  tracking-[-0.02em] text-transparent  drop-shadow-sm md:text-7xl md:leading-[5rem]'>Stopover <span className='bg-gradient-to-br from-cyan-100 to-stone-50 bg-clip-text'>holidays</span></h1>
            </div>

            <motion.div
                style={{
                    backgroundImage: `url(/first-mountain-parallax.png)`,
                    backgroundSize: "cover",
                    y: mountainY,
                }}
                className="absolute  inset-x-10 inset-y-5 z-0 h-[700px]"
            />

            <p
            className='absolute  left-[444px] top-[230px] inset-10 bg-gradient-to-br from-stone-50 to-cyan-100 bg-clip-text font-bold font-display text-4xl  tracking-[-0.02em] text-transparent  drop-shadow-sm md:text-4xl md:leading-[5rem]'>Visit Astana and Almaty  <span className="bg-gradient-to-br from-stone-400 to-cyan-500 bg-clip-text"> for only 19$</span></p>
        </div>
    );
}
