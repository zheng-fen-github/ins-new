import React,{useState} from 'react'
import Option from './option'
import Text from '../textarea'
import Context from '../../context/ins-context.js'

function Form({data}) {
    const [name,setName] = useState(data.message.name);
    const [account,setAccount] = useState(data.account);
    const [email,setEmail] = useState(data.email);
   
    return  (
         <form >
                <Option type='name' ev={setName}  value={name} tag='姓名'/>
                <Option type='account' ev={setAccount}  value={account} tag='账号'/>
                <Text />
                 <Option type='email' ev={setEmail}  value={email} tag='邮箱'/>
                <div className="submit">
                    <div className="submitcontainer">
                        <input type="submit" defaultValue="提交"/>
                    </div>
                </div>

                <style jsx> {`
                        
                 form {
                         min-height:58vh;
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

export default Form
