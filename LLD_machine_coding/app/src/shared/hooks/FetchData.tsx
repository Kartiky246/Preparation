import {useState, useEffect} from 'react'

function FetchList({url}: {url: string}): [] {
    const [data, setData] = useState<[]>([]);
    useEffect(()=>{
        fetch(url)
        .then((d)=>d.json())
        .then(res=>setData(res.products))
    })
  return data!;
}

export default FetchList