import Typewriter from "./Typewriter";
import Typewriters from "./Typewriters";

export default function Hero() {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-none">
            <div className="text-center px-4">
                <Typewriter text="Welcome to M.Raihan's Portfolio" />
                <Typewriters text="Get To Know About Me!" />
            </div>
        </section>
    )
}