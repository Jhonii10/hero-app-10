/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { GetHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import HeroCard from "./HeroCard";


const HeroList = ({publisher}) => {

    const heroes = useMemo(()=>GetHeroesByPublisher(publisher) ,[publisher]) 
   
    return (
        <div className="  row rows-cols-1 row-cols-md-4 g-3">
        {heroes.map( heroe => (
            <HeroCard key={heroe.id} heroe={heroe}/>
        
        ))}
            
        </div>
    );
}

export default HeroList;
