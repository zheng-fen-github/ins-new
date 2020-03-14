import React,{useState} from 'react'
import SignUp from './sign'
import SignUpOpen from './signupopen.js'

function Index() {

  let windowRef = React.createRef(); // 注册窗口Ref定义

  const [openStatus,setOpenStatus] = useState(false);
  const openE = () => {
      if(!openStatus){
        setOpenStatus(preState => !preState)
      }else{
         windowRef.current.hidden = false;
         windowRef.current.style.transform = 'translate(-50%,0)';
      }      
  }
    return (
        <>
          {openStatus && <SignUp ref={windowRef}/>}
          <SignUpOpen event = {openE}/>  
        </>
    )
}

export default Index
