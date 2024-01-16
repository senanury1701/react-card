import './Card.css'
const Card = (data) => {
    return (
        <div className='card'>
            <div className='card-item'>
                <img src={data.img} alt=""  /> 
                <p>{data.name}</p>                  
            </div>
            <div>
                <div className='back'>
                    <ul>
                        {data.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>                    
            </div>              
        </div>
    )
}
export default Card