import './post.css'
import animalHuman from '../imgs/animalshumans.jpg'

export const Post = () => {
    return (
        <div className='post'>
            <img className='postImg'
                src={animalHuman} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
        </div>
    )
}
