import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

const HeroesApp = () => {
    return (
        <AuthProvider>
        <BrowserRouter>
        <AppRouter/>            
        </BrowserRouter>
        </AuthProvider>
    );
}

export default HeroesApp;
