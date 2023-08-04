import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Nabvar";
import MarvelPage from "../pages/MarvelPage";
import DcPages from "../pages/DcPages";
import SearchHero from "../pages/SearchHero";
import HeroId from "../pages/HeroId";

const HeroesRoutes = () => {
    return (
        <>
        <Navbar/>
            <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPages/>}/>
                <Route path="search" element={<SearchHero/>}/>
                <Route path="hero/:id" element={<HeroId/>}/>
                <Route path="/*" element={<Navigate to='marvel' replace/>}/>
            </Routes>
            </div>
        </>
    );
}

export default HeroesRoutes;
