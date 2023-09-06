import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const LoginPage = () => {


    const {login } = useContext(AuthContext);

    const navigate = useNavigate();

    const lastPath = localStorage.getItem('lastPath' || '/marvel')

    const onLogin = ()=>{
        login('Jhoni ipia')
        navigate(lastPath, {replace:true})
    }

    return (
        <div  style={{height:'100%',}}>
        
       <div className="container mt-5 text-center">
        <img src="assets/animate.gif"/>
        <h1 className="mt-4">Login</h1>
        <hr/>
        <button 
            className="btn btn-outline-primary"
            onClick={onLogin}
           >
            login
        </button>
        </div>
      
        </div>
    );
}

export default LoginPage;
