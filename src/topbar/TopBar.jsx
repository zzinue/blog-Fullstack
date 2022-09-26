import './topbar.css'
import mainImage from '../imgs/mainimage.jpg'

export const TopBar = () => {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImage' src={mainImage} alt="main-image" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

    )
}
