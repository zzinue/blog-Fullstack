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
                    <div className="settingsPP"> +
                        img</div>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
