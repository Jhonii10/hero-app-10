import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const {user , logout } = useContext(AuthContext)
    console.log(user)

    const navigate = useNavigate();

  const onLogout = ()=>{
       logout()
       navigate('/login',{replace:true})

  }

    return (
        <nav className="navbar navbar-expand-lg border ">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to='/login'>
             Super Hero
            </NavLink>

            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav me-auto">

                    
                    <NavLink 
                        className={({isActive})=> {return `nav-link ${isActive ? 'active ':''} `}}
                        to="/marvel"
                    >

                        Marvel
                    </NavLink>
                   

                    <NavLink 
                        className={({isActive})=> {return `nav-item nav-link ${isActive ? 'active ':''} `}}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive})=> {return `nav-item nav-link ${isActive ? 'active ':''} `}}
                        to="/search"
                    >
                        search
                    </NavLink>
                    <NavLink 
                        className={({isActive})=> {return `nav-item nav-link ${isActive ? 'active ':''} `}}
                        to="/hero"
                    >
                        hero
                    </NavLink>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-ligth '>
                        {user?.name}
                    </span>
                    <button className=' nav-item nav-link btn btn-outline-danger'
                        onClick={onLogout}
                    >
                        logout
                    </button>
                </ul>
            </div>
            </div>

            
            </div>
        </nav>
    )
}




{/* <nav className="navbar navbar-expand-lg bg-info-10">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/login'>
      Dragon Ball
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>


    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink   className="nav-link " aria-current="page" to='/mans'>
            Mans
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink   className="nav-link"  to='/womans'>
            womans
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink   className="nav-link" to='/search'>
            Search
          </NavLink>
        </li>

        
      </ul>
      <div className='d-flex'>
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            
      </div>
        
    </div>
  </div>
</nav> */}