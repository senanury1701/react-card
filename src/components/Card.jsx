import './Card.css'
import { useState } from 'react'

const Card = (data) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return (
        <div className='card' onClick={toggleVisibility}>
            {isVisible &&<div className='card-item'>
                <img src={data.img} alt=""  /> 
                <h5>{data.name}</h5>                  
            </div>}
            {!isVisible && <div  className='card-item'>
                <ul>
                    {data.options.map((option, index) => (
                        <li key={index}><p>{option}</p></li>
                    ))}
                </ul>                 
            </div>}          
        </div>
    )
}
export default Card