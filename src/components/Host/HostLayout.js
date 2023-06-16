import { Outlet } from "react-router-dom"
import {NavLink} from 'react-router-dom';


export default function HostLayout(){

    const aStyle = {
        color:" #161616" ,
        textDecoration: "underline" ,
        fontWeight: "600",
    }

// w app gdzie jest layout przy route nie ma path czyli bedzie zawsze, 
// outlet to element ktory pasuje to url, czyli na /vans bedzie wyswietlał
// elelemt prowadzacy do vans 
//outlet to taki children dla propa ale w react ruter


// NavLik daje mozliwosc dania style albo className funkcji tak jak na dole
    return(
        <>
        <div className="host__nav">
            {/* end konczy sprawdzanie active */}
            <NavLink style={({isActive})=> isActive ? aStyle : null} end to='.'>Dashboard</NavLink>
            <NavLink style={({isActive})=> isActive ? aStyle : null} to='income'>Income</NavLink>
            <NavLink style={({isActive})=> isActive ? aStyle : null} to='vans'>Vans</NavLink>
            <NavLink style={({isActive})=> isActive ? aStyle : null} to='review'>Review</NavLink>

            {/* className={({isActive})=>{return isActive ? 'active--link--class' : null}} */}
        </div>

        <Outlet />
        
        </>

    )
}