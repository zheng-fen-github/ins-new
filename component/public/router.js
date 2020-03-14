import React,{useEffect} from 'react'
import Router from 'next/router'
function Routerss({data,url}) {
     useEffect(() => {
         console.log('test')
         if(data[0] === '未找到cookie') Router.push('/');         
     })
    return (
        <div style={{display:'none'}}>
              hellword {data} 
        </div>
    )
}

export default Routerss
