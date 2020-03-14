import React,{useState,useEffect} from 'react'
import Form from './form.js'
import Title from './title'
import Error from './error'

const  SignUp = React.forwardRef((props,ref)=> {
    const [error,setError] = useState('');
    const closeE = () => { //关闭窗口事件
         let elem = ref.current; 
         elem.style.transform = 'translate(-50%,-1000px)';
         const transEv = (e) => {             
             e.target.hidden = true;
         }
         elem.addEventListener('transitionend',transEv);
    }
    const errorEv = (value) => {
        setError(value);
    }
   
    return (
        <div className='signUP' ref ={ref}>
            <div className="close" onClick={closeE}>
               <svg t="1577522468145" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2589" width="50" height="50"><path d="M633.749333 390.250667a21.333333 21.333333 0 0 0-30.165333 0L512 481.834667l-91.584-91.584a21.333333 21.333333 0 0 0-30.165333 30.165333L481.834667 512l-91.584 91.584a21.333333 21.333333 0 1 0 30.165333 30.165333L512 542.165333l91.584 91.584a21.333333 21.333333 0 0 0 30.165333-30.165333L542.165333 512l91.584-91.584a21.333333 21.333333 0 0 0 0-30.165333z" fill="#2c2c2c" p-id="2591"></path></svg>
            </div>
            <Title/>
            {error == 'ok'?(<div className='ok'>
                             OK
                            </div>): (
                               <>
                                    <Form errorEv={errorEv}/>
                                    <Error error={error} errorEv={errorEv}/>
                              </>       
                            )
            }
            <style jsx>{`
               
                .signUP {
                    width:800px;
                    height:100vh;
                    position:fixed;
                    top:0;
                    left:50%;
                    transform:translateX(-50%);
                    background:#5c52ff;
                    padding:4vh;
                    box-sizing:border-box;
                    overflow:hidden;
                    transition:transform 0.3s;
                    animation:open 0.2s;
                    z-index:11;
                }
                .ok {
                    width:40vw;
                    background:white;
                    height:20vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-size:5vh;
                    margin:10vh 0 0 2vh;
                    border-radius:25px;
                    animation:ok 0.5s;
                }
                .close {
                    height:5vh;
                    width:5vh;
                    position:absolute;
                    top:10px;
                    right:10px;            
                }
                .close:hover {
                    background:white;
                    border-radius:50%;
                }
                .close svg {
                    height:100%;width:100%;
                }
                @keyframes open {
                    0% {
                        transform:translate(-50%,-1000px)
                    }
                    100% {
                        transform:translate(-50%,0)
                    }
                }
                @keyframes ok {
                    0%{
                       transform:scale(0)
                    }
                    100%{
                        transform:scale(1,1)
                    }
                }
                `}
            </style>
        </div>
    )
}
)
export default SignUp
