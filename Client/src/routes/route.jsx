import {createBrowserRouter} from 'react-router-dom';
import Contact from '../pages/contact/Contact';
export const route  = createBrowserRouter([
    {
        path : '/',
        element : <h1 className='text-2xl'>Hello this is a components <a href="/contact" >click here</a></h1>
    }, 
    {
        path : '/contact',
        element : <Contact />
    }
])