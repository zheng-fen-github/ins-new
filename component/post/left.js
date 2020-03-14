import React from 'react'

function Left() {
    return (
       <div className="content">
                   <div className="post-photo">
                       <img src="sidebarBg.jpg" alt="photo"/>
                   </div>
                   <style jsx> {`
                      .content {
                            min-width:600px;
                            height:600px;
                            overflow:hidden;
                        }
                        img {
                            height:600px;
                            width:600px;
                        }
                        `}
                    </style>
       </div>
    )
}

export default Left
