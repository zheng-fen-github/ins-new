import React,{useEffect} from 'react'

const  Input = React.forwardRef(({event,buevent,type},ref) => {
        //MG事件
    const focusevent = (e) => {
        let preElem = e.target.previousElementSibling;
        preElem.classList.add('inputstatus');
        event(1)
    }
    const blurevent =(e) => {
        event(0)
        let input = e.target;
        if(input.value === '') {
            input.previousElementSibling.classList.remove('inputstatus');
        }
    }
    const inputevent = (e) => {
         if(e.target.value !== ''){
            buevent(1);
        }else{
            buevent(0);
        }
    }
    //定义消失事件
    useEffect(() =>{
        const transi = (e) => {
            if(!e.currentTarget.classList.contains('account')) {
                 return 
            } //是否账号输入框 检测
           let opacity = getComputedStyle(e.currentTarget).opacity;
           if(opacity == 0) e.currentTarget.style.display = 'none';          
        }
         ref.current.addEventListener('transitionend',transi)
    },[])
    return (
        <div className={type}  ref = {ref}>
            <label htmlFor={type}>
               {type=='account'?'Email or account':'password'}
            </label>
            <input type={type=='account'?'text':'password'} name={type} id={type} required
                
                onFocus={focusevent}
                onInput={inputevent}
                onBlur= {blurevent}
                />
                <style jsx>{`
                .account {
                     opacity:1;
                     transition:all 0.7s;
                 }
                 .password {
                     opacity:0;
                     transition:all 0.7s;
                     position:absolute;
                     width:100%;
                     top:0;
                 }
                 input{
                     width:100%;
                     height:5vh;
                     border:none;
                     background:none;
                     outline:none;
                     font-size:3vh;
                     position:relative;
                     color:white;     
                     display:block; 
                     z-index:2;                          
                 }   
                 .account input {
                    z-index:10;       
                 }
                 label {
                     color:#eee;
                     font-size:3vh;
                     position:absolute;
                     top:0;
                     transition:all 0.3s;
                     display:block;
                 }
                .inputstatus {                   
                    top:-3.5vh;
                    font-size:2vh;
                    margin:0.5vh 0;
                    opacity:0.5;
                    transition:all 0.3s;
                 }
                    `}                            
                </style>
      </div>
    )
}
)
export default Input
