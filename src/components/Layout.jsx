import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/footer";
import RoutePages from "../routes/RoutePages";



export default function Layout({  }) {
    return (
        <BrowserRouter>
        <Header/>
        <RoutePages/>
        <Footer/>        
        
        </BrowserRouter>
       

    );

}