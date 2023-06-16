import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(){



// w app gdzie jest layout przy route nie ma path czyli bedzie zawsze, 
// outlet to element ktory pasuje to url, czyli na /vans bedzie wyswietlał
// elelemt prowadzacy do vans 
//outlet to taki children dla propa ale w react ruter
    return(
        <>
        <Header/>
        <Outlet />
        <Footer/>
        
        </>

    )
}