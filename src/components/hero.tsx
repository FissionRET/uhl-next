import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { Button } from "./ui/button";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="container">
                <div className="absolute inset-x-0 top-0 z-10 flex size-full items-center justify-center opacity-100"></div>

                <div className="mx-auto flex max-w-5xl flex-col items-center">
                    <div className="z-10 flex flex-col items-center gap-6 text-center">
                        <div className="z-10 flex min-h-[16rem] items-center justify-center">
                            <AnimatedGradientText>
                                🎉{" "}
                                <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                                <span
                                    className={cn(
                                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                    )}
                                >
                                    Next generation of UHL website
                                </span>
                                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedGradientText>
                        </div>

                        <div>
                            <h1 className="mb-2 text-pretty text-2xl font-bold lg:text-5xl">
                                Lấy thông tin lịch học của bạn siêu tốc.
                            </h1>
                            <p className="text-zinc-600 lg:text-xl">
                                Sử dụng công nghệ mới nhất thay vì công nghệ
                                thời napoleon để cải thiện trải nghiệm người
                                dùng.
                            </p>
                        </div>

                        <div className="mt-4 flex justify-center gap-2">
                            <Button>Bắt đầu ngay</Button>
                            <Button variant={"outline"}>
                                Tìm hiểu ngay{" "}
                                <ExternalLink className="ml-2 h-4" />
                            </Button>
                        </div>

                        <div className="mt-20 flex flex-col items-center gap-4">
                            <p className='text-center: text-muted-foreground italic lg:text-left'>
                                Được xây dựng bằng các công nghệ mã nguồn mở !
                            </p>

                            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
                                <IconCloud iconSlugs={slugs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
