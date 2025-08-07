import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';

const NewsBord = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles)) // ✅ Fixed here
      .catch(error => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <div>
      <h2 className='text-center'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItems 
          key={index} 
          title={news.title} 
          description={news.description} 
          src={news.urlToImage} 
          url={news.url} 
        />
      ))}
    </div>
  );
};

export default NewsBord;
