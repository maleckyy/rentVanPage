import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import {Link,NavLink, Routes,Route, Outlet, useLoaderData } from "react-router-dom"
import { getHostVans } from '../../api';
import { requireAuth } from "../../utils";



export async function loader({params}){
    // await requireAuth()
    return getHostVans(params.id)
}


export default function HostVansDetail(){

    const param = useParams()
    // console.log(param.id)
    // const currentUrl = `/host/vans/${param.id}`

    const van = useLoaderData()


    // const[van,setVan]= useState({})

    // useEffect(()=>{
    //     fetch(`/api${currentUrl}`)
    //     .then(res=>res.json())
    //     .then(data=> setVan(data.vans[0]))

    // },[])


    const aStyle = {
        color:" #161616" ,
        textDecoration: "underline" ,
        fontWeight: "600",
    }

    return (
        <div className="host__det__cont">
            <div className="hostDetail__backLink">
                <Link to='..' relative="path" >⬅<span className="text">Back to vans</span></Link>
                {/* <Link to='./..'>⬅<span className="text">Back to vans</span></Link> */}
            </div>
                
        
            <div className="van__cont">

                <section className="info__section">

                    <img src={van.imageUrl}/>
                    <div className="text__panel">
                        <div className={`van__type ${van.type} selected`}>{van.type}</div>
                        <div className="van__name">{van.name}</div>
                        <div className="van__pricing">${van.price}/day</div>
                    </div>
                </section>

                <section className="details__nav">
                    <NavLink
                    to='.'
                    end
                    className='details__nav__item'
                    style={({isActive})=>{return isActive ? aStyle : null}}
                    >Details</NavLink>
                    <NavLink
                    className='details__nav__item'
                    style={({isActive})=>{return isActive ? aStyle : null}}
                    to='pricing'
                    >Pricing</NavLink>
                    <NavLink
                    className='details__nav__item'
                    style={({isActive})=>{return isActive ? aStyle : null}}
                    to='photos'
                    >Photos</NavLink>

                </section>

                <Outlet context={{van}}/>




            </div>

        
        
        
        
        
        </div>


    )
}