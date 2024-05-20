import { Link } from "react-router-dom"

 export default function Moviecard ({imgUrl, titleText, movieId}) {
    
    return (
        <article className="moviecardContent">
            <Link to={`https://www.imdb.com/title/${movieId}/`} target="_blanc">
            {imgUrl ? <img src={imgUrl}/> : <p>This movie has no current poster</p>}
                <p>{titleText}</p>
            </Link>
        </article>
    )
}