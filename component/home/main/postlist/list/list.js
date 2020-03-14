import React,{useEffect} from 'react'
import Acthor from './acthor.js'
import Title from './title.js'
import Features from './features.js'
import PostPhoto from './postphoto'
import Router from 'next/router'


function List({data,index}) {
    let postRef;
   
    const lookEv = () => {   //查看事件定义
          Router.push({
              pathname:'/post'
          })                        
    
     }
   
    let {userName,message,title,postTime,description,acthorPhotoId,_id} = data;
    
    return (        
            <div className={`post`} ref={ ref => postRef=ref }>
                <div className="postContainer">
                    <Acthor name={userName} time={postTime} id={acthorPhotoId}/>                        
                    <PostPhoto Ev={lookEv} photoId={message} />
                    <Title title={title} description={description}/>
                    <Features index={index} id = {_id}/>                     
                </div>               
            <style jsx> {`
                 .post {
                     width:calc(50vw-12vh);
                     height:auto;
                     background:white;
                     overflow:auto;
                     border-radius:26px;
                     margin-bottom:6vh;
                     box-shadow:0 0 6px #f4f4f4;
                     position:relative;
                     transition:.4s;
                     z-index:4;
                     animation:go .5s;
                 }  
                 @keyframes go {
                        0% {
                            transform:scale(0);
                        }                        
                        100% {
                            transform:scale(1);
                        }
                    }
                 .post::-webkit-scrollbar {
                     display:none
                 }
                 .postContainer {
                     width:100%;
                 }
                 
                        `}
            </style>
        </div>
    )
}

export default List
