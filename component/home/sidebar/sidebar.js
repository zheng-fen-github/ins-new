import React,{useState} from 'react'
import Top from './sidebartop/sidebartop'
import Bottom from './sidebarbottom/sidebarbottom.js'
import Save from './savepost/save'
import Like from './likepost/like'

function Sidebar({postData}) {
    const [SaveStatus, setSaveStatus] = useState(false); //收藏窗口状态定义
    const [LikeStatus, setLikeStatus] = useState(false);
    const [eventID, setEventID] = useState(false); //收藏窗口状态定义
    let  notRef;   
    const SaveRef = React.createRef();    //收藏窗口元素Ref定义
    const LikeRef = React.createRef();    //喜欢窗口元素Ref定义
    const openSave = () => {             // 收藏窗口打开关闭事件
        let DOM = notRef;
        if(postData.message.save.length == 0){
            console.log(eventID);
            if(eventID) clearTimeout(eventID);    
            notRef.hidden = false;
            let ID = setTimeout(() =>{
                DOM.hidden = true;
                setEventID(false);
            },1000);
            setEventID(ID)
        }
        // if(LikeRef.current) {
        //     if(!LikeRef.current.classList.contains('back')) LikeRef.current.classList.add('back');        
        // }
        // !SaveStatus ? setSaveStatus(true) :SaveRef.current.classList.remove('back');            
    }
    const openLike = () => {             // 收藏窗口打开关闭事件
        if(postData.message.like.length == 0){
            let DOM = notRef;
            if(eventID) clearTimeout(eventID);    
            notRef.hidden = false;
            let ID = setTimeout(() =>{
                DOM.hidden = true;
                setEventID(false);
            },1000);
            setEventID(ID)
        }
        // if(SaveRef.current) {
        //     if(!SaveRef.current.classList.contains('back')) SaveRef.current.classList.add('back');        
        // }
        // !LikeStatus ?  setLikeStatus(true) : LikeRef.current.classList.remove('back');    
    }
    return (
        <div className='sidebar'>
            <Top/>
            <Bottom save={openSave} like ={openLike}/>
            { SaveStatus && <Save ref={SaveRef}/> }
            { LikeStatus && <Like ref={LikeRef}/> }
            <div className='notPost' hidden ref={ref => notRef = ref}>
                not post
            </div>
            <style jsx> {`
                 .sidebar {
                    width:20%;
                    height:100%;
                    position:relative;
                    
                  }
                  .notPost {
                     height:40px;
                     width:200px;
                     color:white;
                     text-align:center;
                     background:red;
                     border-radius:24px;
                     line-height:40px;
                     position:fixed;
                     top:70%;
                     font-size:20px;
                     left:5%;
                     z-index:99;
                     animation:not 1 .3s;
                  }
                  @keyframes not {
                      0%{
                          transform:scale(0.8);
                      }
                     100%{
                          transform:scale(1);
                      }
                  }
                `}
            </style>
        </div>
    )
}

export default Sidebar
