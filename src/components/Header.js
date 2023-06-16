import {NavLink, Link} from 'react-router-dom';

export default function Header(){

    const aStyle = {
        color:" #161616" ,
        textDecoration: "underline" ,
        fontWeight: "600",
    }


    return(
        <div className='navbar'>
            
        <Link exact to='/'>
        <div className='navbar__title'>#VANLIFE</div>

        </Link>
        <div >

        <NavLink
        // className={({isActive})=>{return isActive ? 'active--link--class' : null}}
        style={({isActive})=>{return isActive ? aStyle : null}}
        to='host'>host</NavLink>
        <NavLink
        style={({isActive})=>{return isActive ? aStyle : null}}        
        to='about'>about</NavLink>
        <NavLink
        style={({isActive})=>{return isActive ? aStyle : null}}        
        to='vans'>vans</NavLink>
        <NavLink
        style={({isActive})=>{return isActive ? aStyle : null}}        
        to='login'>log</NavLink>

        </div>

        </div>

    )
}