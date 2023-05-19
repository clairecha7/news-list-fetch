import { useEffect, useState } from "react";
import NewsList from "./components/NewsList";
import { getNews } from "./service";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <NewsList news={news} />
    </div>
  );
}

export default App;
