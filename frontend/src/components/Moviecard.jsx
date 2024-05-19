import { Link } from "react-router-dom"

 export default function Moviecard ({imgUrl, titleText, movieId}) {
    
    return (
        <article className="moviecardContent">
        <Link to={`https://www.imdb.com/title/${movieId}/`} target="_blanc">
            <img src={imgUrl} width={250} height={364}/>
            <p>{titleText}</p>
        </Link>
        </article>
    )
}