import React from 'react'

function UserPhoto(props) {
    return (
        <div className='user-photo'>
            {props.children}
            <style jsx> {`
                        .user-photo {
                            width:100%;
                            height:100%;
                            border-radius:12px;
                            overflow:hidden;
                        }
                        `}
            </style>
        </div>
    )
}

export default UserPhoto
