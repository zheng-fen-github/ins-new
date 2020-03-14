import React from 'react'
import Input from './oldpass'


function Password() {
    return (
        <form className="password">
            <Input type='oldpassword' tag='旧密码' />
            <Input type='newpassword-one' tag='新密码' />
            <Input type='newpassword-two' tag='再次输入新密码' />
            <div className="submit">
                        <div className="submitcontainer">
                        <input type="submit" value="提交"/>
                        </div>
                    </div>
            <style jsx> {`
                     .password {
                         height:58vh;
                         width:100%;                       
                     } 
                     .submit {                       
                         margin-top:2vh;
                         width:100%;
                         height:3.48vh;
                         display:flex;
                         justify-content:flex-end;
                     }  
                     .submitcontainer {
                         width:75%;
                         padding-left:2vh;
                         height:100%;                         
                         display:flex;
                         justify-content: flex-start;
                         
                     }    
                     .submit input {
                         width:35%;
                         height:100%;
                         background:#3897f0;
                         border:none;
                         border-radius:4px;
                         color:white;
                         font-size:1.6vh;
                         font-weight:700;
                     }  
                        `}
            </style>
        </form>
    )
}

export default Password
