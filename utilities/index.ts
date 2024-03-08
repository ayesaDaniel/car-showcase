import { CarProps,filterProps } from "@/types";


  export  async function fetchCars( filters:filterProps){
    const {manufacturer, year , model , limit , fuel } = filters
    const headers ={
      'X-RapidAPI-Key': 'cef2ad7549msh5f48ecbd728b034p1b54afjsn817580d52147',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3`,
    {headers:headers}
    )

    const result = await response.json()
  return result;
  }

  //model=${model}&make=${manufacturer}&year=${year}&limit${limit}&fuel_type=${fuel}
  export const calculateCarRent = (city_mpg:number , year:number) => {
    const basePricePerDay = 50 
    const mileageFactor = 0.1; 
    const agefactor =0.05

    const MileageRate = city_mpg * mileageFactor;

    const ageRate = ( new Date().getFullYear() -year)* agefactor

    const rentalRatePerday = basePricePerDay * MileageRate * ageRate

    return rentalRatePerday.toFixed(0)
  };

  export const generateCarImageUrl = (Car:CarProps, angle?:string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");

      const {make, year , model} = Car;
      
        url.searchParams.append("customer", "hrjavascript-mastery")
       url.searchParams.append("make", make )
        url.searchParams.append("modelfamily", model.split( " ")[0])
        url.searchParams.append("zoomType", "fullscreen")
        url.searchParams.append("modelYear", `${year}`)
        url.searchParams.append("angle", `${angle}`)

        return `${url}`
  }

  export const updateSearchParams = (type: string , value:string) => {
    const searchParams = new URLSearchParams(window.location.search)
      
    searchParams.set(type ,  value)
  
    
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`
      return newPathname;
  }














 