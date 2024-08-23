import { Badge } from "@/components/ui/badge";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-32">
            <div className="container">
                <div className="absolute inset-x-0 top-0 z-10 flex size-full items-center justify-center opacity-100"></div>

                <div className="mx-auto flex max-w-5xl flex-col items-center">
                    <div className="z-10 flex flex-col items-center gap-6 text-center">
                        <Badge variant='outline'>UI Blocks</Badge>
                    </div>
                </div>
            </div>
        </section>
    );
}