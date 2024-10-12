import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
export default function Contact ()
{
    return (
        <div className="m-5 flex flex-col gap-3">
            <div className="text-4xl font-bold ">Contact Us</div>
            <div className="w-11/12 border border-black"></div>
            <div className="flex gap-7 flex-wrap">
            <div>
                <div className="font-bold text-lg">E-mail: </div>
                <div>campuscaravan@snu.edu.in</div>
            </div>
            <div>
                <div className="font-bold text-lg">Tel:</div>
                <div>+91 XXXXX XXXXX</div>
            </div>
            <div>
                <div className="font-bold text-lg">Social Media:</div>
                <div className="flex items-center gap-1">
                    <div>
                        <FaInstagram />
                    </div>
                    <div>
                        Instagram: @campuscaravan
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div>
                        <FaLinkedin />
                    </div>
                    <div>
                        LinkedIn: /campus-caravan
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div>
                        <FaYoutube />
                    </div>
                    <div>
                        Youtube: @campuscaravan8792
                    </div>
                </div>
                </div>
                </div>
        </div>
    );
}
