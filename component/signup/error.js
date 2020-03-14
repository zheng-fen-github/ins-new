import React,{useEffect} from 'react'

function Error({error,errorEv,aaastyle}) {
    useEffect(() => {
        if(error && error != 'ok') setTimeout(() => errorEv(''),2000);
    })
    if(error){return (
        <div onClick={() => errorEv('')} className={aaastyle}>
            <h1>{error}</h1>            
            <style jsx>
                {`
                  div{
                      background:black;
                      height:50px;
                      width:80%;
                      box-sizing:border-box;
                      transform:translateX(13%);                      
                      margin-top:20px;
                      padding:5px;
                      color:white;
                      text-align:center;
                      border-radius:8px;
                      position:relative;
                  }
                  .errorStyle {
                        background:red;
                        width:30%;
                        position:absolute;
                        left:50%;
                        transform:translate(-50%,0);
                  }
                `}
            </style>
        </div>
    )}else{
        return null
    }
    
}

export default Error
