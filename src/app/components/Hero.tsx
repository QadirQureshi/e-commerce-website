import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';



function Hero() {
    return (
        <div className="w-full h-[260px] flex justify-center mt-8">
            <div className=" bg-black h-full w-[80%] flex justify-between">
                {/* left side */}
                <div className="ml-8 mt-16 text-white">
                    <div className="flex justify-center items-center ">
                        <span> <FontAwesomeIcon icon={faApple} className="w-[30px]"/></span>
                        <span className="ml-4">iPhone 14 Series</span>
                    </div>

                    <div className="w-[200px]">
                        <h1 className="text-3xl font-sans font-bold ml-5">Up to 10% off Voucher</h1>
                        <button className="font-bold underline underline-offset-4 ml-5 mt-5">Shop Now</button>
                    </div>
                </div>
                {/* right side */}
                <div>
                   <Image src={"/images/hero.jpg"} width={350} height={200} alt="Heroimage"
                   className="mt-5"></Image>
                </div>
            </div>
        </div>
    )
}
export default Hero