import HeroCard from "../components/HeroCard";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string'
import { GetHeroeByName } from "../helpers/getHeroeByName";
const SearchHero = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const heroes = GetHeroeByName(q)
    console.log(GetHeroeByName(q))

    const {searchText , onInputChange } = useForm({
        searchText:'',

    })

    const onSearchSubmit = (event)=>{
        event.preventDefault();
        if(searchText.trim().length < 2 ) return;
        navigate(`?q=${searchText}`)
        }

    return (
        <>
            <h1> Search</h1>
            <hr/>
            <div className="row">
            <div className="col-5">
                <h4>searching</h4>
                <hr/>
                <form onSubmit={onSearchSubmit}>
                    <input 
                     type="text" 
                     placeholder="search a hero"
                     className="form-control"
                     name="searchText"
                     autoComplete="off"
                     value={searchText}
                     onChange={onInputChange}
                     />

                     <button className="btn btn-outline-primary mt-2">
                        search
                     </button>
                </form>
            </div>

            <div className="col-7">
                <h4>results</h4>
                <hr/>
                {
                    (q === '') 
                    ? <div className="alert alert-primary">
                    searcha hero
                    </div> 
                    : (heroes.length === 0) && <div className="alert alert-danger">not hero with <b>{q}</b></div>
                }
                

                
                {
                    heroes.map(hero =>(
                        <HeroCard key={hero.id} heroe={hero} />
                     ) )
                }
            </div>
            </div>
        </>
    );
}

export default SearchHero;
