import { MouseEventHandler } from "react";

export interface customButtonProps{
    title:string;
    containerstyles?:string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface SearchManufacturerProps {
    manufacturer:string;
    setManufacturer:(manufacturer:string) => void
}

export interface CarProps{
    id:number;
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface HomeProps {
    searchParams: filterProps;
  }
  
export interface filterProps{
    manufacturer: string;
    year: number;
    fuel: string ;
    limit: number;
    model:string ;
    className?:string;
}
export interface optionProps {
    title:string;
    value:string;
}
export interface customFilterProps{
    title:string;
    options:optionProps[];
    className?:string;
}


export interface showMoreProps{ 
    pageNumber: number,
    isNext:boolean,
}