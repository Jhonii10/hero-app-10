/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const HeroCard = ({heroe}) => {

    const heroImageUrl = `/assets/${heroe.id}.jpg`
    return (
        <div className="col " style={{minWidth:'250px'}}>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 ">
                        <img src={heroImageUrl} className="card-img" alt={heroe.superhero}/>
                    </div>
                    
                
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{heroe.superhero}</h5>
                        <p className="card-text">{heroe.alter_ego}</p>
                        {
                            heroe.alter_ego !==  heroe.characters && ( <p>{heroe.characters}</p>)
                        }
                        
                        <p className="card-text">
                            <small className="text-muted">
                                {heroe.first_appearance}
                            </small>
                        </p>

                        <Link to={`/hero/${heroe.id}`} className="btn btn-outline-primary">
                            Ver mas 
                        </Link>

                    </div>
                    </div>

                </div>
        
        </div>
        </div>
    );
}

export default HeroCard;
