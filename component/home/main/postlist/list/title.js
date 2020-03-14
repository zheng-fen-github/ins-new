import React from 'react'

function Title({title,description}) {
    return (
       <div className="contentTitle">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <style jsx> {`
                        .contentTitle {
                            width:100%;
                            height:8vh;
                            padding-left:3vh;
                            line-height:8vh;
                            border-bottom:2px solid #f4f6f8;
                            color:#888;
                        }
                        h2,h3 {
                            display:inline-block;
                        }
                        h2 {
                            color:pink;
                        }
                        h3 {
                            margin-left:20px;
                        }
                        `}
            </style>
        </div>
    )
}

export default Title
