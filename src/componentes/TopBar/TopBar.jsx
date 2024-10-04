import './TopBar.css';

function TopBar(){
    return(
     <div className='contenedor-topBar'>
         <div className='cont-caja1-topBar'>
            <p>ADD ANYTHING HERE OR JUST REMOVE IT...</p>
         </div>
         <div className='cont-caja2-topBar'>
            <ul>
                <li>About</li>
                <li>Our Stores</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Newsletter</li>
                <li>Languages</li>
            </ul>
         </div>

     </div>
    )
}

export default TopBar;