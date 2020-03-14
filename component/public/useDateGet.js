import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default   function UseDataGet(initialValue,initialUrl) {

        const [state,setState] = useState({message:null});
        const [fetching,setFetching] = useState(false);
        const [error,setError] = useState(false);
        const [uncount,setUncount] = useState(false);
        const [url,setUrl] = useState(initialUrl); 

        useEffect(() => {
           let getData = async () => {
               setError(false);
               setFetching(true);               
                let request =await fetch(url);
                try{
                    let data = await request.json();
                    setState(data);
                    setFetching(false);
                }catch(err){
                    console.log(err);
                    setError(true);
                }
           }
           if(!uncount) getData()
           return () => {
               setUncount(true);
           }
        },[url])     
        return [state,fetching,error,setUrl]
    
  }
 

