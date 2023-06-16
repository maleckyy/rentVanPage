import React from "react"
import {Link,useLoaderData} from 'react-router-dom';
import { requireAuth } from "../../utils";

import { getHostVans } from '../../api';


export async function loader(){
    // await requireAuth()
    return getHostVans()
}


export default function HostVans(){

    // const[vans,setVans] = React.useState([])
    const vans = useLoaderData()

    // React.useEffect(()=>{

    //     fetch("/api/host/vans")
    //     .then(res=>res.json())
    //     .then(data=>setVans(data.vans))

        
    // },[])
    
    // console.log(vans)

        const everyEl = vans.map(vans=>{
            return (
                <Link to={`${vans.id}`} key={vans.id}>
                <div className="van__cont">
                    <img className="van__cont__img" src={vans.imageUrl}></img>

                    <div className="van__text__cont">

                        <div className="van--name">{vans.name}</div>

                        <div className="van--price">${vans.price}/day</div>

                    </div>

                </div>
                </Link>
            )

        })

    return (
        <div className="host--page">

            <div className="host__list">
            
                <div className="host__title">Your listed vans</div>
            
                <div className="vans__list--cont">
                    {everyEl}




                </div>
            
            </div>
        </div>


    )
}