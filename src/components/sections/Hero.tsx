


import Image from "next/image";
import Wrapper from "../gadgets/Wrapper";


export default function Hero() {
  return (
    <Wrapper>
<div className="relative mb-20 ">
    
      <div className="container absolute w-full md:w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
        
        <Image
          src="/Hero.png" 
          alt="Hero Section"
          layout="fill"
          objectFit="cover"
          className="
          w-full h-full md:h-full sm:h-full 
           ">
        </Image>
        
      </div>
           
             <div className="heroText  bg-[#FFF3E3] ">
              <h6>New Arrival</h6>
              <h3>Discover Our <br /> New Collection</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                dolore</p>
                <button className=" buyBtn">BUY NOW</button>
            </div>
    </div>
      </Wrapper>

)}