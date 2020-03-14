import React,{useEffect} from 'react'

function Photo({file,Delete}) {
    let Src = URL.createObjectURL(file.file);
    let imgRef;
    useEffect(() => {        
           imgRef.onload = (e) => {               
                if(e.target.height >e.target.width) e.target.classList.add('width');        
           }
    },[])
    return (
        <div className="photo">
            <img src={Src} alt="cat" ref={ref => imgRef=ref}/>
            <div className="delete" onClick={() => Delete(file.id)} id={file.id}>
               <svg t="1578726169319" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3211" width="30" height="30"><path d="M512 557.223994l249.203712 249.203712c12.491499 12.491499 32.730449 12.489452 45.221948-0.002047s12.493545-32.730449 0.002047-45.221948L557.223994 512l249.203712-249.203712c12.491499-12.491499 12.489452-32.730449-0.002047-45.221948s-32.730449-12.493545-45.221948-0.002047L512 466.776006 262.796288 217.572294c-12.491499-12.491499-32.729425-12.490475-45.220924 0.001023-6.246261 6.246261-9.370415 14.429641-9.370415 22.610974s3.121084 16.365736 9.367345 22.610974L466.774983 512 217.572294 761.203712c-6.246261 6.246261-9.367345 14.428617-9.367345 22.610974s3.125177 16.365736 9.370415 22.610974c12.491499 12.491499 32.729425 12.493545 45.220924 0.002047L512 557.223994z" p-id="3212"></path></svg>
            </div>
            <style jsx> {`
                        .photo {
                            width:313px;
                            height:313px;                          
                            overflow:hidden;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            position:relative;
                            border-radius:12px;
                            margin-bottom:20px;
                            box-shadow:0 0 8px #eee;
                        }
                        .photo:hover>img {
                            transform:scale(1.2);
                        }
                        .delete {
                            position:absolute;
                            background:white;
                            border-radius:50%;                            
                            height:30px;
                            width:30px;
                            top:6px;
                            right:6px;
                            cursor:pointer;
                        }
                        .delete:hover {
                            background:black;
                        }
                        img {
                            height:100%;
                            transition:.3s;
                        }
                        .width {
                            height:auto;
                            width:100%;
                        }
                        `}
            </style>
        </div>
    )
}

export default Photo
