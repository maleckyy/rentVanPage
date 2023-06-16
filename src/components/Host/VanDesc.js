import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import {Link,NavLink, Routes,Route, Outlet,useOutletContext } from "react-router-dom"


export default function VanDesc(){
    
    const {van}=useOutletContext();


    return(                
    <section className="van__desc__section">

        <div className="info">
            <span>Name: </span> 
            {van.name}
        </div>
        <div className="info">
            <span>Category: </span> 
            {van.type}
        </div>
        <div className="info">
            <span>Description: </span> 
            {van.description}
        </div>
        <div className="info">
            <span>Visibility: </span> 
            Public
        </div>


    </section>)
}