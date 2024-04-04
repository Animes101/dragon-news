import { useEffect, useState } from "react"


const FetchData = (url) => {

    const [datas,setDatas]=useState(null);


    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDatas(data))
        .catch(err=>{
            console.log(err);
        })
    },[url])



  return {datas}
}

export default FetchData