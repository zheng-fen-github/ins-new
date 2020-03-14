import React from 'react'

function Openbu({Ev}) {
    return (
        <div className='openbu' onClick={()=>Ev()}>
           <svg t="1578808037412" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1785" width="30" height="30"><path d="M106.84 67.56h266.27a27.78 27.78 0 1 0 0-55.56H39.78A27.88 27.88 0 0 0 12 39.78v333.33a27.78 27.78 0 1 0 55.56 0V106.84L409 448.31A27.77 27.77 0 1 0 448.31 409zM1012 650.89a27.78 27.78 0 1 0-55.56 0v266.27L615 575.69A27.77 27.77 0 0 0 575.69 615l341.47 341.44H650.89a27.78 27.78 0 1 0 0 55.56h333.33a27.88 27.88 0 0 0 27.78-27.78z" p-id="1786"></path></svg>
           <style jsx> {`
                   .openbu{
                       height:30px;
                       width:30px;
                       display:flex;
                       justify-content:center;
                       align-items:center;
                       transition:.2s;
                       position:absolute;
                       border-radius:25%;
                       bottom:3%;
                       right:3%;
                   }
                   .openbu:hover {
                      transform:scale(1.2,1.2);
                      background:white;
                      box-shadow: 0 0 2px #888;
                   }   
                   .openbu:active{
                       box-shadow:none;
                       transform:scale(1,1)
                   }       
                   svg {
                       height:18px;
                       width:18px;
                   }
                        `}
           </style>
        </div>
    )
}

export default Openbu
