import Image from "next/image";
import { Button } from "../ui/button";
import Illustration1 from '../../assets/pictures/Illustration1.jpg'
import { GoDot } from "react-icons/go";


export default function HeroSection() {
    return (
        <div className="flex flex-col text-center bg-[#F5F7FA] w-full px-[100px]">
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start py-[112px] ">
                    <div className="text-[#4D4D4D] text-[44px] font-semibold mb-0">
                        Lessons and insigts
                    </div>
                    <div className="text-[#4CAF4F] text-[44px] font-semibold mb-[11]">
                        from 8 years.
                    </div>
                    <div className="text-[#717171] text-[11px]">Where to grow your business as a photographer: site or social media?</div>
                    <Button variant={'default'} size={'lg'} className="bg-[#4CAF4F] rounded-0 mt-[22px]">Register</Button>
                </div>


                <Image src={Illustration1} alt="Illustration1" style={{ objectFit: 'cover' }} className="w-[272px] h-[283px]" />

            </div>

            <div className="flex gap-1 mx-[800px] mb-3">
                <GoDot size={'10px'} className="text-[#4CAF4F] bg-[#4CAF4F] rounded-full " />
                <GoDot size={'10px'} className="text-[#4CAF4F] bg-[#4CAF4F] rounded-full" />
                <GoDot size={'10px'} className="text-[#4CAF4F] bg-[#4CAF4F] rounded-full " />
            </div>

        </div>

    );
}