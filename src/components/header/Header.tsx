import Image from "next/image";
import logo from "@/assets/croppedLogo.png"

export default function Header() {
    return (
        <header id="header" className=" bg-gradient-to-l from-slate-500 text-white ">
            <div className="container mx-auto">
                <div className="header flex justify-between items-center py-4">
                    <div className="logoClass">
                        <div className="logoContainer w-40">
                            <Image style={{mixBlendMode: "color"}} src={logo} alt="img not found" />
                        </div>
                    </div>
                    <div className="navsClass forDesktop">
                        <ul className="navul flex gap-4">
                            <li className="navItems">Home</li>
                            <li className="navItems">About us</li>
                            <li className="navItems">Contact</li>
                            <li className="navItems">Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}