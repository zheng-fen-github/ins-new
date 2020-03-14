import React,{useState,useEffect} from 'react'

const Form = React.forwardRef(({setFile,children},ref) =>  {
  
    
   
    const fileChange =  (e) => {
       let files = Array.from(e.target.files).map(item => ({
            file:item,
            id:item.lastModified+Date.now()
        })   // 定义照片文件格式
       );    
       e.target.value = '';  
       setFile(prestate => prestate.concat(files));              //添加照片函数事件
       
       
    } 
   
    return (
        <div className='add-post-form' >
                
            <input type="file" name="photoFile"
             onChange={fileChange}
             multiple
             id="photoFile"
             ref={ref}
             style={{display:'none'}}/>

              {children}

            <label htmlFor="PostTitle">
                <h2>Title</h2>
            </label>
            <input type="text" name="PostTitle" required id="PostTitle"/>
            <label htmlFor="message">
                <h2>description</h2>
            </label>
            <input type="text" name="message" id="message"/>
            <div className="sumbit">
                <button onClick={(e) => {
                    e.target.style.background = '#1FFF40';
                    }}>
                    Post
                </button>
            </div>
            <style jsx> {`
                   .add-post-form {
                       width:100%;
                       height:40%;
                       padding:40px;
                       margin-bottom:100px;
                       position:relative;
                   }
                   .sumbit {
                       width:900px;
                       height:200px;
                       display:flex;
                       justify-content:center;
                       align-items:center;
                   }
                   button {                       
                       width:200px;
                       height:60px;
                       border:none;
                       background:#1a79ff;
                       
                       transition: .5s;
                       font-size:32px;
                       color:white;
                       border-radius:8px;
                       cursor:pointer;                                             
                   }
                   h2 {
                       color:#8f9092;
                   }
                   label,input {
                       display:block;
                   }
                   label {
                       margin:2vh 1vh 0 0;
                       
                   }
                    input {
                        width:90%;
                        padding:0 10px;
                        height:80px;
                        font-size:30px;
                        border:none;
                        border-bottom:2px solid #ced1d6;
                    }
                    .photo-container {
                        width:1200px;
                        height:1200px;
                    }
                        `}
            </style>
        </div>
    )
})


export default Form
