import BlurIn from "@/components/magicui/blur-in";
import { ModeToggle } from './mode-toggle';

export default function Navbar() {
    return (
        <section className="py-12">
            <div className="container">
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <BlurIn word="UHL Next" className="text-xl font-bold subpixel-antialiased"/>
                        </div>

                        <div className="flex items-center">
                            <ModeToggle/>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}