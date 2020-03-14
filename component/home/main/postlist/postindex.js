import React,{useContext} from 'react'
import List from './list/list.js'
import {Context} from '../../../editusermessage/context/ins-context'
import Loading from '../../../public/loading'

function PostList() {
   const data = useContext(Context);

    if(Array.isArray(data)){
        return (
            <div className='PostList'>
                {
                    data.map((item,index) => <List key={item._id} index={index} data={item}/>)
                }
 
                 <style jsx> {`
                            .PostList {
                                padding:3vh;
                                width:100%;
                                overflow:auto;                            
                            }
                            
                            `}
                  </style>
            </div>
    
        )
    }else{
        return <div className='loading'>
                   <Loading/>
                    <style jsx> {`
                            .loading {
                                width:100%;
                                height:500px;
                             
                            }
                            
                            `}
                    </style>
               </div>
    }
   
}

export default PostList
