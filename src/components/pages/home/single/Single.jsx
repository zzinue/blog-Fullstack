import { Sidebar } from '../../../sidebar/Sidebar'
import { SinglePost } from '../../../singlePost/SinglePost'
import './single.css'

export const Single = () => {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}
