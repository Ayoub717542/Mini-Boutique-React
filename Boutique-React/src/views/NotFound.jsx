import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import notFound from "../public/notFound.svg"

function NotFound(){
    return(
        <div className='not-found'>
        <img src={notFound} alt="NotFound" />
        <div>
        <h1>404</h1>
                <h2>Page Not Found</h2>
                    <p>Sorry, the page you are looking for doesn't exist.</p>

        </div>
       
        </div>
      
    )
}
export default NotFound;