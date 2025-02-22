import { NavBar } from "../components/navbar"
import { SearchBar } from "../components/searchbar"
import Map from "../components/Map.jsx"
import Businesses from "../components/Businesses.jsx"


export function Home(){
    return <div className="flex flex-col">
        <NavBar/>
        <div className="w-full flex h-96 p-4 gap-4">
            <div className="rounded-md overflow-clip w-1/2 h-full">

            <Map/>
            </div>
            <div className="w-1/2 flex flex-col h-full">
                <div className="w-full h-full flex-col justify-center items-center py-8 bg-amber-700 flex shadow-lg shadow-neutral-400 rounded-md">
                <SearchBar/>

                    <Businesses/>
                </div>
            </div>


        </div>
    </div>
}