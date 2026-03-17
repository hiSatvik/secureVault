import { Link } from "react-router-dom";

export default function AnchorLink({text, navi="#"}) {
    return(
        <Link
  href={navi}
  className="text-3xl relative text-2xl text-black 
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-black
  after:origin-left after:scale-x-0
  after:transition-transform after:duration-300
  hover:after:scale-x-100"
>
  {"["}{text}{"]"}
</Link>
    )
}