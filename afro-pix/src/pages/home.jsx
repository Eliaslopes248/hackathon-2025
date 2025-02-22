import { NavBar } from "../components/navbar"
import { SearchBar } from "../components/searchbar"

export function Home(){
    return <div className="flex flex-col">
        <NavBar/>
        <SearchBar/>
    </div>
}