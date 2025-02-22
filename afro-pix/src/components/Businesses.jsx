import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import businesses from './businessData.json';

const Businesses = ({ names, setLongLat}) => {
    const [selectedBusiness, setSelectedBusiness] = useState(0);
    const navigate = useNavigate()
    useEffect(
        () => setLongLat(businesses[selectedBusiness].location)
    , [selectedBusiness])
    
      const increment = (val) => {
        setSelectedBusiness((prev) => {
          const newIndex = Math.max(0, Math.min(businesses.length - 1, prev + val));
          console.log("New selectedBusiness:", newIndex);
          return newIndex;
        });
      };
      


    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
        <div className="w-full h-full absolute flex justify-center items-center">
            <button onClick={() =>increment(1)} className="right-4 absolute text-3xl text-white ">
                <FaArrowAltCircleRight/>
            </button>
            <button 
            onClick={() =>increment(-1)}
            className="left-4 absolute text-3xl text-white ">
                <FaArrowAltCircleLeft/>
            </button>
        </div>
        <div className="w-3/4 h-full flex bg-white">
            <div className="w-1/2 h-full flex bg-neutral-800">
                <img className="w-full h-full object-cover" src= {businesses[selectedBusiness].img || '/public/image.png' } ></img>
            </div>
            <div className="w-1/2 h-full flex flex-col relative p-2">
                <div className=" space-y-8">
                    <h1 className="font-black text-2xl line-clamp-1">{businesses[selectedBusiness].businessName}</h1>
                    <h1 className="text-sm line-clamp-1 font-light">
                     <strong>Genre: </strong> {businesses[selectedBusiness].productType}

                    </h1>
                    <p className="text-sm font-light">
                        <strong>Description: </strong> 
                        {businesses[selectedBusiness].description}
                    </p>
                </div>
                <button
                    onClick={() => navigate("/business", { state: { business: businesses[selectedBusiness] } })}
                    className="absolute right-4 bottom-4 bg-amber-700/50 px-4 border border-black text-lg text-black rounded-md"
                    >
                    View
                    </button>

            </div>
        </div>
        
      </div>
    );
  };
  
  export default Businesses;
  
  
