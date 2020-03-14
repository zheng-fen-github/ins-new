import React from 'react'
import Photo from '../../../../public/photo'



function Acthor({name,time,id}) {
    
    
    return (
        <div className="Postuser">
                <div className="acthor">
                    <div className="photo">
                        {
                            !id? <img src="user.jpg" alt="acthor photo"/>:<Photo id={id}/>
                        }
                        
                    </div>
                    <div className="massage">
                        <div className="name">
                            <h3> 
                                {name}
                            </h3>
                        </div>
                        <div className="time">
                            {new Date().getMinutes()  - new Date(time).getMinutes()}  min
                        </div>
                    </div>
                </div>    
                <style jsx> {`
                       .Postuser {
                           position:absolute;
                           top:20px;
                           left:20px;   
                           color:white;    
                           z-index:2;              
                       } 
                       .acthor {
                           display:flex;                           
                       }
                       .photo {
                           height:60px;
                           width:60px;
                           border-radius:12px;
                           overflow:hidden;
                           margin-right:10px;
                       }
                       .photo img {
                           height:100%;
                           width:100%;
                       }
                       .massage {
                           height:60px;
                           text-shadow:0 0 1px #666;                         
                       }
                       .name,.time {
                           line-height:30px;
                       }
                        `}
                </style>       
        </div>    
    )
}

export default Acthor
