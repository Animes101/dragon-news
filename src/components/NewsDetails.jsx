import { useParams } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react";


const NewsDetails = () => {


    const id=useParams();

    const [newes ,setNewes]=useState([]);

    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setNewes(data));
    },[])
  return (
    <div>
        <Header />
        <div>
            <div>{newes?.length}</div>
        </div>
    </div>
  )
}

export default NewsDetails