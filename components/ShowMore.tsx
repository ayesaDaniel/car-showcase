"use client"

import { showMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utilities";


const ShowMore = ( { pageNumber, isNext}:showMoreProps) => {
    const router = useRouter()

    const handleNavigation = () => { 
        const newLimit =  (pageNumber +1) *10
        const newPathName = updateSearchParams("limit", `${newLimit}`)

        router.push(newPathName)
    }
    return (
        <div className="w-full gap-5  flex-center mt-10">

{ !isNext && (
    <CustomButton 
    title = 'show more '
    btnType="button"
    containerstyles=" bg-primary-blue rounded-full text-gray-500"
    handleClick={handleNavigation}
    />
)
}
        </div>
         
         );
}
 
export default ShowMore;