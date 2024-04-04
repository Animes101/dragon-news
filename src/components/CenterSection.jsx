import { useEffect, useState } from "react"
import NewsCards from "./NewsCards";


const CenterSection = () => {

    const [newes ,setNewes]=useState([]);

    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setNewes(data));
    },[])
  return (
    <div>
      <h1>Dragon News Home</h1>
      {newes.length}
      <div className="space-y-3">
        {newes.map(news=> <NewsCards key={news.id}  news={news} />)}
      </div>
      
      
      </div>
  )
}

export default CenterSection