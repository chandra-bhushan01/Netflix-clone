
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    
    //early reaturn
    if(!isMenuOpen) return null;

 
  return /* !isMenuOpen? null: */ (  
    <div className='p-5  shadow-lg w-48 h-screen'>
        
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>Shorts</li>
            <li>Video</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar