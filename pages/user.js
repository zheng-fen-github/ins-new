import React,{useState,useEffect} from 'react'
import Top from '../component/userhome/top.js'
import Bottom from '../component/userhome/bottom.js'
import Router from 'next/router'
import axios from 'axios'

function User() {
    const [userData,setUserData] = useState({user:null});
    
    useEffect(() => {
       (async () => {
        let owe = axios.create({baseURL:'http://localhost:3001/login', withCredentials:true})
        const res =await owe.get(); 
        console.log(res.data)
        if(typeof res.data  == 'string') Router.push('/');
        if(typeof res.data == 'object') setUserData(res.data)
       })()   
    },[])
    
    return (
        <div className='user'>
               <div className="container">
                   {
                        <> <Top/> <Bottom/> </>
                    }
               </div>
               <style jsx global> {`
                    * {
                                margin:0;
                                padding:0;
                                box-sizing:border-box;
                            }       
                   `} 
               </style>
                <style jsx> {`
                     .user {
                     
                       height:100vh;
                       overflow:hidden;
                     }
                     .container {
                         width:980px;
                         min-height:1000px;
                         background:white;
                         position:absolute;
                         padding-top:20vh;
                         left:50%;
                         top:50%;
                         transform:translate(-50%,-50%);
                     }
                                `}
                </style>
        </div>
    )
}

export default User
