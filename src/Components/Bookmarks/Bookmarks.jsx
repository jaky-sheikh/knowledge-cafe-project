import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 ml-2">
            <div>
                <h3 className="text-2xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center">Bookmarked: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;