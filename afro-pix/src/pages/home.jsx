import { NavBar } from "../components/navbar"
import { SearchBar } from "../components/searchbar"
import Map from "../components/Map.jsx"
import Businesses from "../components/Businesses.jsx"
import { useState } from "react";
const businessNames = ['Apple', 'Google', 'Amazon', 'Tesla', 'Microsoft'];



export function Home(){

    const [longLat, setLongLat] = useState({lat: 37.7748, lng: -122.4194})


    return <div className="flex flex-col">
        <NavBar/>
        <SearchBar/>
        <div className="w-full flex h-96 p-4 gap-4">
            <div className="rounded-md overflow-clip w-1/2 h-full">
            <Map location={longLat} />
            </div>
            <div className="w-1/2 flex flex-col h-full">
                <div className="w-full h-full justify-center items-center py-8 bg-neutral-900 flex shadow-lg shadow-neutral-400 rounded-md">
                    <Businesses names={businessNames} setLongLat= {setLongLat}/>
                </div>
            </div>


        </div>
    </div>
}