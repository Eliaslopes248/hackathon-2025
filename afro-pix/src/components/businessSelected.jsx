import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img1 from '../assets/bob.jpg';
import img2 from '../assets/bob.jpg'; // Replace with different images later
import img3 from '../assets/bob.jpg'; // Replace with different images later

export function BusinessSelected() {
    const location = useLocation();
    const navigate = useNavigate();

    const business = location.state?.business || {
        name: 'Black Owned Business',
        genre: 'General',
        desc: 'No description available.',
        img: img1, // Always using img1 for testing
        address: 'No address available',
        hours: 'No hours available'
    };

    // Always use img1 for testing purposes
    const [selectedImg, setSelectedImg] = useState(img1);

    const navHome = () => navigate('/');

    return (
        <div className="w-full h-screen flex">
            {/* Left Section - Image and Selection */}
            <div className="w-1/2 bg-amber-700 h-full flex flex-col items-center justify-center gap-4 p-4">
                <img 
                    src={selectedImg} 
                    alt={business.name} 
                    className="w-4/5 h-3/5 object-cover rounded-lg shadow-lg"
                />

                {/* Image Selection Thumbnails */}
                <div className="flex gap-4">
                    {[img1, img2, img3].map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`Thumbnail ${index + 1}`} 
                            className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition duration-200 ease-in-out ${
                                selectedImg === img ? 'border-black' : 'border-transparent'
                            } hover:translate-y-[-5px] hover:shadow-xl`}
                            onClick={() => setSelectedImg(img)}
                        />
                    ))}
                </div>
            </div>

            {/* Right Section - Business Details */}
            <div className="w-1/2 flex flex-col h-full p-8 gap-6">
                <h1 className="font-black text-5xl">{business.name}</h1>
                <p className="text-gray-500">{business.desc}</p>
                <h3 className="text-2xl font-semibold">{business.genre}</h3>

                {/* Address and Hours of Operation */}
                <div className="mt-4">
                    <h4 className="font-bold text-lg">📍 Address:</h4>
                    <p className="text-gray-600">{business.address}</p>
                    
                    <h4 className="font-bold text-lg mt-4">🕒 Hours of Operation:</h4>
                    <p className="text-gray-600">{business.hours}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button 
                        onClick={navHome} 
                        className="border-2 px-6 py-3 rounded-md hover:bg-black hover:text-white transition duration-200 transform hover:-translate-y-1"
                    >
                        Home
                    </button>
                    <button 
                        className="border-2 px-6 py-3 rounded-md bg-amber-700 text-white hover:bg-black transition duration-200 transform hover:-translate-y-1"
                    >
                        Explore Website
                    </button>
                </div>
            </div>
        </div>
    );
}
