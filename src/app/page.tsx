"use client";

import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Hero from "@/components/hero";

export default function Home() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <>
            <div className="relative min-h-screen overflow-hidden rounded-lg bg-background md:shadow-xl">
                <Particles
                    className="absolute inset-0"
                    quantity={25}
                    ease={70}
                    color={color}
                    refresh
                />

                <main className="flex flex-col items-center justify-between p-24">
                    <Hero/>
                </main>
            </div>
        </>
    );
}
