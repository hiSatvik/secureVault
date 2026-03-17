import logo from "../../assets/logo.png";
import AnchorLink from "../../Components/AnchorLink";
import Button from "../../Components/Buttons";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center">
            <img src={logo} alt="logo.png" className="h-20 w-auto" />
            <div className="flex flex-row justify-between w-auto gap-6 m-6">
                <AnchorLink text={"Home"} />
                <AnchorLink text={"Know More"} />
                <AnchorLink text={"How it works"} />
            </div>
            <div className="flex flex-row items-center gap-3">
                <Button text={"Get our Services"} />
                <span className="text-gray-500 font-bold text-2xl hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                    {"<-"}
                </span>
            </div>
        </div>
    )
}