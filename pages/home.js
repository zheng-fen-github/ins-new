import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import Sidebar from '../component/home/sidebar/sidebar'
import Main from '../component/home/main/store.js'
import axios from 'axios'
import Router from 'next/router'
import {Context} from '../component/editusermessage/context/ins-context'


function Home() {
    const [cookie,setCookie] = useState({data:null});
    
    useEffect(() => {
       (async () => {
        let owe = axios.create({baseURL:'http://localhost:3001/login', withCredentials:true})
        const res =await owe.get(); 
        if(typeof res.data  == 'string')  Router.push('/');
        if(typeof res.data == 'object') setCookie(res.data)
       })()   
    },[])
    return (
        <>
            <Head>
            <title>My ins </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="//at.alicdn.com/t/font_1492911_fp5zlq6dxvp.css"/>
            </Head>
        <div className='home' id='home'>
           {cookie?<Context.Provider value={cookie}>
                                <Sidebar postData={cookie}/> 
                                <Main account = {cookie.account}/>
                        </Context.Provider>:<></>}
           <style global jsx> {`
                * {
                   margin:0;
                   padding:0;
                   box-sizing:border-box;
                        }
               `}
           </style>   
           <style jsx >{`
                  .home {
                    width:100vw;
                    height:100vh;
                    overflow:hidden;
                    z-index:-3;
                    display:flex;
                  }
               `}
           </style>
        </div>
    </>
    )
}

export default Home
