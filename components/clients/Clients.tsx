import Image from 'next/image'
import ClientLogo1 from '../../assets/pictures/ClientLogo1.jpg'
import ClientLogo2 from '../../assets/pictures/ClientLogo2.jpg'
import ClientLogo3 from '../../assets/pictures/ClientLogo3.jpg'
import ClientLogo4 from '../../assets/pictures/ClientLogo4.jpg'
import ClientLogo5 from '../../assets/pictures/ClientLogo5.jpg'
import ClientLogo6 from '../../assets/pictures/ClientLogo6.jpg'
import ClientLogo7 from '../../assets/pictures/ClientLogo7.jpg'

export default function Clients() {

    const clients = [
        {
            image: ClientLogo1,
        },
        {
            image: ClientLogo2,
        },
        {
            image: ClientLogo3,
        },
        {
            image: ClientLogo4,
        },
        {
            image: ClientLogo5,
        },
        {
            image: ClientLogo6,
        },
        {
            image: ClientLogo7,
        },
    ]

    return (
        <div className="flex flex-col items-center py-[28px]">
            <div className="flex flex-col items-center justify-center">
                <div className="text-[#4D4D4D] text-[25px] font-semibold">Our CLients</div>
                <div className="text-[#717171] mt-[6px]">We have been working with some Fortune 500+ clients</div>
            </div>

            <div className='grid grid-cols-7 grid-rows-1 gap-48 mt-7 px-[100px]'>
                {clients.map((client, index) =>{
                    return(
                        <Image key={index} src={client.image} alt='Logo' style={{objectFit: 'cover'}} sizes='34px' />
                    )
                })}
            </div>
        </div>
    );
}