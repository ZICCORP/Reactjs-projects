import { useEffect, useState } from "react";


const NewsItem = ({ article }) => {
    const [readmore, setReadmore] = useState(true);
    useEffect(() => {
        console.log(article);
    }, [])
    return <>
        <article className="single-article">
            <img src={article.urlToImage} alt="" />
            <footer>
                <div className="article-info">
                    <h4>{article.title}</h4>
                    <h4 className="article-source">{article.source.name}</h4>
                </div>
                <p>{
                    `${article.content ? article.content.substring(0, 150) : article.description}...`
                }
                </p>
                <button><a href={article.url}>read more</a></button>
            </footer>
        </article>
    </>
}

export default NewsItem;