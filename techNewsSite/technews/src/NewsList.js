import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';



const NewsList = ({ articles, fetchNews }) => {

    const today = new Date();
    var time = today.getHours() + today.getMinutes() + today.getSeconds();

    if (articles) {
        return <section>
            <div>
                {articles.map((article) => {
                    return <>
                        <NewsItem key={time} article={article} />
                    </>

                })}
            </div>
        </section>
    }
    else {
        return <div className="title">
            <h2>No article yet</h2>
            <button className="btn" onClick={() => fetchNews()}>Refresh</button>
        </div>
    }



}

export default NewsList;