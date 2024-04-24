import Image from "next/image";
import LogoImage from '../../assets/pictures/LogoIcon.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function Navbar() {

    const links = [
        {
            name: 'Home'
        },
        {
            name: 'Features'
        },
        {
            name: 'Communtiy'
        },
        {
            name: 'Blog'
        }, {
            name: 'Pricing'
        },
    ]

    return (
      <div className="flex justify-between items-center py-[11px] px-[100px]">
        <div className="flex gap-2 items-center">
            <Image src={LogoImage} alt="Logo" style={{objectFit:'cover'}} className="w-[24px] h-[16px]"/>
            <div className="text-[#263238] text-2xl font-bold ">Nextcent</div>
        </div>


        <div className="flex items-center justify-center gap-[22px]" >
            <div className="grid grid-cols-5 grid-rows-1 gap-[16px]">
                {links.map((link, index) => {
                    return(
                        <Button key={index} variant={'link'} >{link.name} </Button>
                    )
                })}
            </div>
            <Button variant={'default'} size={'lg'} className="bg-[#4CAF4F] gap-2">Register Now 
                <FaArrowRightLong />
            </Button>
        </div>
      </div>
    );
  }