import { useState, useEffect } from "react";
import NewsList from "./NewsList";
import Loading from "./Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([])


  const fetchNews = async () => {

    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);

      const news = await response.json()
      setIsLoading(false)
      const newArticles = news.articles.filter((article) => {
        var author = article.author;
        return author !== null
      })
      setArticles(newArticles);
      // console.log(news);
      // console.log(news.articles);
      // console.log(news.status);
      // console.log(news.totalResults);

    } catch (error) {
      // setIsLoading(false)
      console.log(error);
    }
  }
  useEffect(() => {
    console.log(process.env.REACT_APP_NEWS_API_KEY);
    fetchNews()
  }, [])

  if (isLoading) {
    return <>
      <main>
        <Loading />
      </main>
    </>
  }

  return <>
    <main>
      <div className="title">
        <h2>Tech News</h2>
        <div className="underline">
        </div>
      </div>
      <NewsList articles={articles} fetchNews={fetchNews} />
    </main>
  </>
}

export default App;