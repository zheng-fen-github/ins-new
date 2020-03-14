import React ,{useState,useEffect} from 'react'
import SelectList from '../component/editusermessage/select/selectlist'
import Show from '../component/editusermessage/show/show.js'
import axios from 'axios'
import Router from 'next/router'

function Edit() {    
    const [cookie,setCookie] = useState([]);
    useEffect(() => {
       (async () => {
        let owe = axios.create({baseURL:'http://localhost:3001/login', withCredentials:true})
        const res =await owe.get();       
        if(typeof res.data  == 'string') Router.push('/');
        if(typeof res.data == 'object') setCookie(() =>[res.data]);        
       })()   
    },[])
    return (
        <div className='edit'>
             { cookie.length>0?<div className="edit-container">
                                    <SelectList/>
                                    <Show userData = {cookie[0]}/>
                                </div>:<></>
                    
             }
            
            <style global jsx> {`
                * {
                   margin:0;
                   padding:0;
                   box-sizing:border-box;
                        }
               `}
           </style>        
            <style jsx> {`
                         .edit {
                             height:100vh;
                             width:100vw;
                             overflow:auto;
                             background:#fafafa;
                         }  
                           
                         .edit-container {
                             min-height:80vh;
                             width:960px;
                             position:absolute;
                             left:50%;
                             top:50%;
                             transform:translate(-50%,-50%);
                             display:flex;                                                                                       
                             border:2px solid #d3d3d3;
                         }  
                                `}
            </style>
        </div>
    )
}

export default Edit
