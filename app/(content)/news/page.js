'use client';
import React, { useEffect, useState } from "react";

import NewsList from "@/components/news-list";

export default function News() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews(){
      const resp = await fetch("http://localhost:8080/news")
      if(!resp.ok){
        setIsLoading(false);
        setError("Failed to fetch news")
      }
      const news = await resp.json();
      setIsLoading(false);
      setNews(news);
    }
    fetchNews();
  }, []);

  if(isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if(error){
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }

  let newsContent;
  if(news){
    newsContent = <NewsList news={news} />
  }


  return (
    <main>
      <h1>News Page</h1>
      {newsContent}
    </main>
  );
}
