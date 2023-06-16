import React from "react"
import {Link} from 'react-router-dom';
import { useParams, useLocation, useLoaderData } from "react-router-dom"
import Footer from './Footer';
import { getVans } from '../api';


export function loader({params}){
    // console.log(params.id)
    return getVans(params.id)
}

export default function VanDetail() {

    const params = useParams()
    // console.log(params.id)
    const van = useLoaderData()
    // console.log(van)

    // const[van,setVan] = React.useState(null)
    // React.useEffect(()=>{

    //     fetch(`/api/vans/${params.id}`)
    //     .then(res=> res.json())
    //     .then(data=>setVan(data.vans))

    // },[])
    const loc = useLocation()
    // console.log(loc.state)
    const selectedVanType = loc.state.search.split('=')
    // console.log(selectedVanType[1])
    const type = loc.state?.type || "all"


    const vanType = loc.state.search.length > 0 ? selectedVanType[1] : 'all'

    return (
        <>          
            <div className="van__detail">
            <Link className="van__detail__link" to={loc.state.search.length > 0 ? `./../?${loc.state.search}` : './..'}> ⬅Back to {type} vans</Link>

            <img src={van.imageUrl}></img>
            <div className={`van__type ${van.type} selected`}>{van.type}</div>
            <div className="van__detail__title">{van.name}</div>
            <div className="van__detail__price">
                <span className="money">${van.price}</span>/day
            </div>
            <div className="van__detail__desc">{van.description}</div>

            <Link className="van__detail__rent--button">Rent this Van</Link>
            
        

            </div>
            
            
        
        
        {/* <Footer></Footer> */}
        </>
    )
} 