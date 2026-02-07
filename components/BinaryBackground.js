"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BinaryBackground = () => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        const columns = Math.floor(dimensions.width / 20);
        const drops = new Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0"; // Green text
            ctx.font = "15px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = Math.random() > 0.5 ? "1" : "0";
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        return () => clearInterval(interval);
    }, [dimensions]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }} // Subtle opacity
            transition={{ duration: 1.5 }}
            className="fixed inset-0 pointer-events-none z-[-1]"
        >
            <canvas ref={canvasRef} className="block w-full h-full" />
        </motion.div>
    );
};

export default BinaryBackground;
