import { Sidebar } from '../../sidebar/Sidebar'
import './settings.css'

export const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>
                        Profile Picture
                    </label>
                    <div className="settingsPP">
                        <img src="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/10/best-20-web-development-blogs.png.webp" alt="" />
                        <div className='settingsPPIcon'>
                            <label htmlFor="fileInput">
                                <i class="fa-regular fa-user"></i>
                            </label>
                        </div>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='zzinue' />
                    <label>Email</label>
                    <input type="text" placeholder='zzinue@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
