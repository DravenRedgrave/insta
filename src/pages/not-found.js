import { useEffect } from "react";

export default function NotFound(){
    useEffect(()=>{
        document.title = 'Not Found - instagram';
    },[]);

    return(
        <div className="app bg-gray-background">
            <div className="mx-auth mx-w-screen-lg">
                <p className="text-center text-2xl">Not Found</p>
            </div>
        </div>
    )
}