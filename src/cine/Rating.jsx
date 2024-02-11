/* eslint-disable react/prop-types */
import star from "../assets/star.svg"

export default function Rating({value}){
    const stars = Array(value).fill(star);
    return (
        <>
         {
            stars.map((star, index)=>(
                <img src={star} width={14} height={14} alt="star" key={index}/>
            ))
        }
        </>
       
    );
}