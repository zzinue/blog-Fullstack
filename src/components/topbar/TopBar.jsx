import './topbar.css'
import mainImage from '../../imgs/mainimage.jpg'
import { Link } from 'react-router-dom'

export const TopBar = () => {
    const user = false
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
                    <li className='topListItem'>
                        <Link className='link' to="/" >HOME</Link>
                    </li>
                    <li className='topListItem'> <Link className='link' to="/" >ABOUT</Link></li>
                    <li className='topListItem'> <Link className='link' to="/" >CONTACT</Link></li>
                    <li className='topListItem'> <Link className='link' to="/" >WRITE</Link></li>
                    <li className='topListItem'>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className='topImage' src={mainImage} alt="main-image" />
                )
                    : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to="/login" >  LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to="/register" >  REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

    )
}
