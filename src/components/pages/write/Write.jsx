import './write.css'
import beach from '../../../imgs/beach.jpg'
export const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg'
                src={beach} alt="" />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fa-regular fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell  Your Story...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
