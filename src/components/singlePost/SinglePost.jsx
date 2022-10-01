import './singlePost.css'
import computer from '../../imgs/computer.jpg'
export const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={computer} alt="" className='singlePostImg' />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                        <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className=" singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<b>Victor</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem, doloribus culpa sequi adipisci nam modi id, numquam praesentium ducimus blanditiis quis nihil minus unde! Et architecto at id earum voluptatem iure laudantium ut mollitia maiores molestias ipsum reiciendis, molestiae fuga a ipsum dolor sit amet consectetur adipisicing elit. Ut rem, doloribus culpa sequi adipisci nam modi id, numquam praesentium ducimus blanditiis quis nihil minus unde! Et architecto at id earum voluptatem iure laudantium ut mollitia maiores molestias ipsum reiciendis, molestiae fuga atque similique ad corrupti, recusandae quia facere veniam autem delectus. Velit, assumenda ut.</p>
            </div>
        </div>
    )
}
