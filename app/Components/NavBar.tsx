import NavElem from "./NavElem"
import Logo from "./Logo"

export default function NavBar ()
{
    return (
        <div >
            <div className="flex justify-between items-center pl-20 pr-32 pt-2 mb-2">
                <Logo />
                <NavElem />

            </div>
            <hr className="relative border-t-3 border-t-double border-gray-800 text-center h-5 m-auto w-11/12" />

        </div>
    );
}
