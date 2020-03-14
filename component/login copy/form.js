import React,{useState} from 'react'
import Input from './input.js'

function Form({Ev}) {
    const [accountOk, setAccountOk] = useState(false); 
    // 账号检测状态
    let buttonRef  // 按钮Ref定义
    let animaRef  // 动画Ref
    let accountRef = React.createRef();
    let passwordRef = React.createRef();
    const trans = () => {                  //dong画事件     
        animaRef.classList.toggle('go');
    }
    //提交事件     
    const submitevent = (e) => {        
           e.preventDefault();
           let animaRef = buttonRef.previousElementSibling; 
           animaRef.classList.add('require');
           animaRef.classList.toggle('left');   
           animaRef.addEventListener('transitionend',(e) => {            
               e.target.classList.toggle('left');
           });                   
           let formdata = new FormData(e.target);
           fetch('http://localhost:3001/login',{
               method:'POST',
               body:formdata,
           }).then(res => res.json()).then(result => alert(result));
    }
    //账号验证事件
    const ACCright = (e) => {  
                 if(!accountOk){
                      e.preventDefault();
                }                              
                animaRef.classList.add('require');
                animaRef.classList.add('go');
                
                animaRef.addEventListener('transitionend',trans);
                let account = accountRef.current.children[1].value;
                fetch(`http://localhost:3001/login/${account}`,{
                    method:'GET'
                }).then(res =>{
                    try {
                        if(res.ok){                    
                             anima();                        
                             setAccountOk(true);
                         }
                         else{
                             setTimeout(() => {
                                animaRef.removeEventListener('transitionend',trans);
                                animaRef.classList.toggle('go');
                             },1000)                       
                         }
                   }catch(err) {
                       console.log(err)
                   }
                })
                
                const anima = () => {
                    animaRef.removeEventListener('transitionend',trans)
                    accountRef.current.style.opacity = 0;
                    passwordRef.current.style.opacity = 1;
                    passwordRef.current.style.visibility = true;                    
                    animaRef.classList.remove('require');
                    animaRef.classList.remove('go');
                    buttonRef.classList.remove('buttonstatus')
               }
        
    }
    //动画事件 线条渐变效果
    const LineColor = (select) => {
          if(select<1){
            animaRef.classList.remove('require')
          }else{
            animaRef.classList.add('require')
          }
    }
    //动画事件 线条渐变效果
    const buttonColor = (select) => {
        if(select<1){
            buttonRef.classList.remove('buttonstatus')
          }else{
            buttonRef.classList.add('buttonstatus')
          }
    }
    return (
        <div id='accform'>
             <form onSubmit={submitevent}>
                 <div className="div">
                    <Input 
                    event={LineColor}
                    buevent={buttonColor}
                    type='account'
                    ref = {accountRef}
                    />
                    <Input 
                    event={LineColor}
                    buevent={buttonColor}
                    type='password'
                    ref = {passwordRef}
                    />
                 </div>
                 <div className='anima' ref={ref => animaRef = ref}>
                     {/* 动画线条 */}
                 </div>   
                 <button ref = {ref => buttonRef = ref}
                        onClick={ACCright}>
                    continue
                 </button>           
             </form>
             <style jsx>{`
                 #accform {
                     width:30%;
                     margin:0 auto;
                     margin-top:10vh;
                     position:relative;
                     transition:display 1s ;
                 }
                 #accform .div {
                     min-height:5vh;
                 }
                 #accform form {
                     position:relative;
                     
                 }  
                 #accform button {
                     margin-top:3vh;
                     width:100%;
                     height:6vh;
                     border-radius:6px;
                     font-size:3vh;
                     color:#5c52ff;
                     background:#eee;
                     display:block;
                     opacity:0.2;
                     border:none;
                     transition: all 0.4s;
                 }
                 #accform .buttonstatus {
                     background:#5c52ff;
                     color:white;
                     opacity:1;
                     transition: all 0.4s;
                 } 
                 #accform .require {
                     animation:account 1.5s infinite;
                 }
                 #accform div.anima {
                     width:100%;
                     height:2px;
                     background:white;                    
                     transition:transform 1s;
                     transform:scale(1,1); 
                     transform-origin:right 50%;
                 }
                 #accform div.go {
                    height:2px;
                    transform:scale(0,1);
                    transform-origin:left 50%;
                    transition:transform 0.5s;
                 }                              
                 
                 @keyframes account {
                     0% {
                         background:#5c52ff;
                     }
                     50% {
                        background:#001c50;
                     }
                     100% {
                        background:#5c52ff;
                     }
                 }
                 `}
             </style>
        </div>
    )
}

export default Form
