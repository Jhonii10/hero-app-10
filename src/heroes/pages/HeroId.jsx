/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GetHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";


const HeroId = () => {

    const {id} = useParams();
    const heroe = useMemo(()=>GetHeroById(id),[id]) 

    if (!heroe) {
        return <Navigate to={'/marvel'}/>
    }

    const navigate = useNavigate();

    const onExit = ()=>{
        navigate(-1)
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
            <img 
                src={`/assets/${heroe.id}.jpg`}
                alt={`${heroe.superhero}`}
                className="img-thumbnail"
            />
            </div>

            <div className="col-8">
                <h3 >{heroe.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>alter ego:</b>{heroe.alter_ego}</li>
                    <li className="list-group-item"><b>publisher:</b>{heroe.publisher}</li>
                    <li className="list-group-item"><b>first appearance:</b>{heroe.first_appearance}</li>

                </ul>

                <h5 className="mt-3">characters</h5>
                <p>{heroe.characters}</p>

                <button  onClick={onExit} className="btn btn-outline-primary">Regresar</button>

            </div>
        </div>
    );
}

export default HeroId;
