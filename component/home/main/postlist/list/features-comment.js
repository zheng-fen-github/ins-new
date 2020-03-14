import React,{useState} from 'react'
import {connect} from 'react-redux'
import {ADD} from '../../redux/action'

const  FeaturesComment = React.forwardRef((props, ref) => {
      const [comment, setComment] = useState('hello');
      const [commentList,setCommentList] = useState('');
      const addComment = async (e) => {
        e.preventDefault();
        let commentData = new FormData()
        commentData.append('comment',comment);
        console.log(props.id)
        let request = await  fetch(`http://localhost:3001/post/comment/${props.id}`,{
            method:'POST',
            body:commentData,    
            credentials: "include",        
        })
        let res = await request.json();
        
        console.log(res);
        // props.Click(comment);
        
    }
    const inputEv = (e) => {
        if(e.target.value.length>0){
             ref.current.children[1].classList.add('pink');
        }else{
            ref.current.children[1].classList.remove('pink');
        }
        setComment(e.target.value)
    }
    return (
        <div className="comment-list">
               <ul>
                   <li> 핑크 💗</li>
                   <li> so beautiful</li>
                   <li> 핑크 💗</li>
                   <li> YA ALLAHHH DEKET BANGETTTT</li>
                   <li> 핑크 💗</li>
               </ul>
               <form ref={ref} onSubmit= {addComment} hidden>
                   <input type="text" name="comment" onInput={inputEv}
                     value ={ comment }
                     defaultvalue = '输入内容' 
                     id="comment"/>
                   <input type="submit" value="add"/>
               </form>
               <style jsx>
                   {`
                   .features {
                      width:100%;                                            
                      color:#888;
                  }   
                  form {
                      width:100%;
                      height:12vh;
                      background:white;
                      border-radius:24px;
                     margin:4vh 0 0 ;
                  }  
                  input[type=submit] {
                    color:white;
                  }
                  .pink {
                      background:pink;                    
                  }
                  form>input {
                      width:100%;
                      text-align:center;
                      height:50%;                      
                      border:none;
                      border-bottom: 2px solid #f4f6f8;
                      border-top: 2px solid #f4f6f8;
                      font-size:3vh;
                      padding:0 2vh;
                      outline:none;
                  }
                  input[type=text] {
                      color:white;
                  }
                  form>input:focus {
                      background:#72BDE8;
                  }
                  .comment-list {
                      width:100%;
                      margin:4vh 0 2vh ;
                  } 
                  ul {
                      width:80%;
                      margin-left:10%;
                      list-style:none;
                  }
                  li {
                      width:100%;
                      height:2vh;
                      margin:1vh;
                      text-align:center;
                  }
                   `}
               </style>
        </div>
    )
    })
const dispatchToProps = dispatch => ({
    Click(post) {
        dispatch(ADD(post))
    }
})
const stateToProps = state => ({       });




export default  connect(null,dispatchToProps,null,{forwardRef: true})(FeaturesComment)
