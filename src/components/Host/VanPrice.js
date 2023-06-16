
import { useOutletContext } from "react-router-dom";

export default function VanPrice(){
    const {van}=useOutletContext();

    return(
        <h2>${van.price}/day</h2>
    )
}