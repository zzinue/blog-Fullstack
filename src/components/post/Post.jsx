import './post.css'
import animalHuman from '../../imgs/animalshumans.jpg'

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
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda repudiandae reprehenderit expedita earum amet minima tempore, iure nostrum exercitationem quos ratione accusantium error dolore recusandae quasi quam modi delectus vel, distinctio eveniet? Asperiores necessitatibus voluptates modi eius, vitae nisi cupiditate beatae officia? Facere, eum ea!
            </p>
        </div>
    )
}
