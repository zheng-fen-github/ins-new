import React from 'react'

function Form({errorEv}) {
    const submit = (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        fetch('http://localhost:3001/login/registered',{
            method:'POST',
            body:new FormData(e.currentTarget) //自动格式选择 form格式
        }).then(res => {
            if(res.ok) {
                return res.json()
            }else{
                res.json().then( error => {  //请求错误处理
                    console.log(error);
                    if(error.includes('account')) {
                        form.account.closest('.account').classList.add('error');
                        errorEv(error);
                    }
                    if(error.includes('email')) {
                        form.email.closest('.email').classList.add('error');
                        errorEv(error);
                    }
                    
                })
            }
        }).then(result =>{      //请求成功处理
            if(result){
              try{                
                Array.from(form.querySelectorAll('.error')).forEach(item => item.classList.remove('error'));
                errorEv('');
                setTimeout(() => errorEv('ok'),0)
              }catch(err) {
                  console.log(err)
              }
            }         
        })
    }
    return (
        <form onSubmit={submit}>
                <div className="account">
                    <input type="text" name="account" id="account" placeholder='account'required/>
                </div>
                <div className="email">
                    <input type="email" name="email" id="email" placeholder='email' required/>
                </div>
                <div className="password">
                    <input type="password" name="password" id="password" placeholder='password' required/>
                </div>
                <div className="submit">
                    <input type="submit" value="Continue"/>
                </div>
                <style jsx>{`
                    form {  
                      width:80%;
                      background:white;
                      margin:0 auto;
                      margin-top:8vh;
                      padding:4vh 0;
                      border-radius:12px;
                      box-shadow:0 0 2px #eee;
                    }
                    form>div {
                        width:80%;                          
                        margin:0 auto;
                        margin-bottom:4vh;
                        border-radius:12px;
                    }
                    form .submit {
                        margin-bottom:0;
                    }
                    form input {
                         width:100%;
                         height:6vh;
                         font-size:3vh;
                         border:solid #eee 2px;
                         border-radius:12px;
                         box-shadow:0 0 4px #eee;
                         box-sizing:border-box;
                         padding:2vh;
                         outline:none;
                         animation:load 1s;
                    }
                    form input[type='submit'] {
                        color:white;
                        background:#5c52ff;
                        padding:0;
                        border:none;
                    }
                    .error {
                        box-shadow: 0 0px 4px red;
                    }
                    form input[type='submit']:hover {
                        box-shadow:0 0 8px #888;
                    }
                    form input[type='submit']:active {
                        box-shadow:0 0 0 ;
                    }                   
                    @keyframes load {
                        0% {
                           opacity:0;
                           transform:translate(100px,0)
                        }
                        100% {
                            opacity:1;
                            transform:translate(0,0)
                        }
                    }
                    `}
                    
                </style>
        </form>
    )
}

export default Form
