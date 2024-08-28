import BlurIn from "@/components/magicui/blur-in";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Desktop Navbar */}
                <nav className="hidden justify-between items-center lg:flex">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <a href="/">
                                <BlurIn
                                    word="UHL Next"
                                    className="text-xl font-bold subpixel-antialiased"
                                />
                            </a>
                        </div>

                        <div className="flex items-center">
                            <ModeToggle />
                        </div>
                    </div>
                </nav>

                {/* Mobile Navbar */}
                <nav className="flex justify-between items-center lg:hidden">
                    {/* Logo */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <a
                                href="/"
                                className="text-xl font-bold subpixel-antialiased"
                            >
                                UHL Next
                            </a>
                        </div>

                        <div className="flex items-center">
                            <ModeToggle />
                        </div>
                    </div>                    
                </nav>
            </div>
        </section>
    );
}
