import {Link} from 'react-router-dom';
import React from 'react';
import Footer from './Footer';
import "../server"
import { useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '../api';



export function loader(){
    return getVans()
}

export default function VansList(){
    
    // console.log(useLoaderData())
    const [vansData,setVansData] = React.useState(useLoaderData())
    

    
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    const [error,setError] = React.useState(null)



    // console.log(vansData)
    const filtered = typeFilter ? 
    vansData.filter(van=> van.type === typeFilter):
    vansData

    const test = filtered.map((van)=>{
        return(
            <Link 
            className='linkToVan' 
            to={`${van.id}`}
            state={{search: searchParams.toString()}}
            >
            <div key={van.id} className='van'>
                <img className='van__image' src={van.imageUrl}></img>
                <div className='van__name'>{van.name}</div>
                <div className='van__price'>
                    <span className='van__price__money'>
                        {van.price}
                    </span>
                    $/day
                    </div>
                <div className={`van__type ${van.type} selected`}>{van.type}</div>
            </div>
            </Link>

        )

    })

    if(error){
        return<h1>Error: {error.message}</h1>
    }

    return(
        <>

        <h1 className='about-title'>Explore our van options</h1>

        <section className='filters__cont'>

            <button 
            onClick={()=>{setSearchParams({type: 'simple'})}} 
            className={typeFilter==='simple'? 'normal selectedS' : 'normal'}

            >Simple</button>


            <button 
            onClick={()=>{setSearchParams({type: 'luxury'})}} 
            className={typeFilter==='luxury'? 'normal selectedL' : 'normal'}
            
            >Luxury</button>


            <button 
            onClick={()=>{setSearchParams({type: 'rugged'})}} 
            className={typeFilter==='rugged'? 'normal selectedR' : 'normal'}
            
            >Rugged</button>



            {typeFilter &&
                <button 
                onClick={()=>{setSearchParams({})}} 
                className='clear--filters'>Clear filters</button>
            }
        
        
        </section>



                <div className='vans__list'>
                    {test}
                </div>

        </>
    )
}