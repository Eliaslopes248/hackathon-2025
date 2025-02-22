import { VscAccount } from "react-icons/vsc";

export function NavBar(){
    return <div className="border-0 border-black w-full flex h-fit p-[20px]">

           

            <div className="flex flex-col gap-[10px] pl-[20px]">
                <h1 className="font-black text-4xl">
                    AFRO Connection
                </h1>
                <p>
                    Empower Black Businesses. Elevate Community. Connect & Thrive.
                </p>

            </div>

            <div className="flex gap-[10px] items-center ml-auto mr-[2vw]">
                <VscAccount className="size-[45px]"/>
                <h1 className="text-[25px] font-bold">USER</h1>
            </div>

        </div>
}