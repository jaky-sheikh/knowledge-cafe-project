import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                        {
                            hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                        }
                        
                    </div>
                </div>
                <button onClick={()=>handleMarkAsRead(reading_time)} className="text-purple-600 font-bold underline">Mark as read</button>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    className="ml-2"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;