"use client";

import React, {FC, useRef} from 'react';
import styles from "./Slider.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

interface SliderProps {
    items: CardProps[]
}

const Slider:FC<SliderProps> = ({ items }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    return (
        <section ref={targetRef} className={styles.slider}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className={styles.slider__scroller}>
                    { items.map((card) => {
                        return <Card {...card} key={card.id} />;
                    }) }
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ id, url, title }: CardProps) => {
    return (
        <div
            key={id}
            className={styles.slider__item}
        >
            <div
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className={styles.slider__image}
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {title}
                </p>
            </div>
        </div>
    );
};

interface CardProps {
    url: string;
    title: string;
    id: number;
}


export default Slider;