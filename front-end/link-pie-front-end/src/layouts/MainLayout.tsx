import ResponsiveAppBar from "../components/NavBarMain";
import Footer from "../components/FooterMain";
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <div>
            <ResponsiveAppBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainLayout;