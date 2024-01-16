import reactLogo from '../assets/react.svg'
import './index.css'
import Card from '../components/card'
import languages from '../helper/data'
const Home = () => {
    const data = languages
    return(
        <>
        <div>
            <a href="#" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <div className='card-container'>
            <div className='grid-container'>
              
                    {data.map((item, index)=> <Card {...item} key={index}/> )}            
            
            </div>
        </div>
        </>
    )
} 
export default Home