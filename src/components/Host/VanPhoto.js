import { useOutletContext } from "react-router-dom"


export default function VanPhoto(){

    const {van}= useOutletContext()

    return(
            <img src={van.imageUrl} width='103' alt="" />

    )
}

