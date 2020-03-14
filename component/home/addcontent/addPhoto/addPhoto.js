import React,{useState} from 'react'
import Top from './addPhototop'
import Content from './addphotolist'
import Form from './postform/form'
import AddBu from './addbu'
import {useRouter} from 'next/router'

function AddPhoto() {
    const data = useRouter();
    const [PhotoFiles, setPhotoFiles] = useState([]);
    const fileRef = React.createRef(); // file Dom 定义
    let canvasRef; 

    const fileClick = () => {      // 添加图片FileDOM 点击事件
        fileRef.current.click(); 
    } 
    const uploadPhoto =async (e) => {
        e.preventDefault();
        if(PhotoFiles.length<1) {           // 检测是否有照片添加
            let reming = document.querySelector('.remind');            
            reming.hidden = false;
            setTimeout(() => reming.hidden = true,2000);
            return
        }          
            // 添加信息和照片到服务器
        const formData = new FormData(e.target);
        formData.delete('photoFile');
        let filesPromises = PhotoFiles.map( async (photo) => {            
                    let img = new Image();
                    img.src = URL.createObjectURL(photo.file);
                    let promise = new Promise((resolve) => {
                        img.onload = () =>{
                            let {width,height}  = img;                           
                            let size = width>height?heigt:width;
                            let count = width>height?width-size:height-size;
                            let countAr = width>height?[-count,0]:[0,-count];
                            canvasRef.width = size;
                            canvasRef.height = size;                    
                            canvasRef.getContext('2d').drawImage(img,...countAr);
                            canvasRef.toBlob(blob => {
                            resolve(blob)
                            })
                        }  
                    })
                    let blob;
                    await promise.then(result => blob = result);
                    let file = new File([blob],photo.file.name,{
                        type:photo.file.type,
                    })
                    return file;            
        });
        let files;
        await Promise.all(filesPromises).then( file => files =file);
       
        files.forEach(file =>{
            formData.append('photoFile',file)
        });
        
        
        if(!data.account) return alert('未获取作者 程序错误');
        formData.append('name',name.textContent);
        
      
        (async () => {
            let require = await fetch('http://localhost:3001/getphoto/post',
                        {method:'POST',body:formData});
            let res = await require.json();
            if(res)console.log(res)
        })() 
                 
    }
    return (
        <div className='add-photo'>
            <div className="container">
               <Top/>
               <form onSubmit={uploadPhoto}>
                    <Content click={fileClick}
                        setPhotoFiles={setPhotoFiles}
                        PhotoFiles={PhotoFiles}/>

                    {PhotoFiles.length>0 && <AddBu click={fileClick}/>}

                    <Form ref={fileRef} setFile={setPhotoFiles}> 
                        <div className="remind" onClick={(e) =>e.target.hidden = true } hidden>
                                请添加至少一张照片
                        </div>
                    </Form>
               </form>
            </div>
            <canvas ref={ref => canvasRef = ref} hidden style={{position:'fixed',left:0,top:0,zIndex:99}}>
                 
            </canvas>
            <style jsx> {`
                            .add-photo {
                                position:fixed;
                                top:0;
                                left:0;
                                height:100vh;
                                width:100vw;
                                background:#f4f7f9;
                                z-index:10;
                            }
                            .user{
                                position:fixed;
                                top:50%;
                                left:40px;
                                transform:translate(0,-50%);                                                                                                
                            }
                            .container::-webkit-scrollbar {
                                display:none;
                            }
                            .container {
                                height:100%;
                                width:980px;
                                margin:0 auto;
                                background:white;
                                box-shadow:0 0 4px #eee;
                                overflow:auto;
                                padding-bottom:40vh;
                            }
                            .remind {
                                width:90%;
                                height:50px;
                                border-radius:12px;
                                color:white;
                                text-align:center;
                                line-height:50px;
                                font-size:20px;
                                background:red;
                                animation: go .2s;
                            }
                            @keyframes go {
                                0% {
                                    transform:scale(0.8);
                                }
                                100% {
                                    transform:scale(1);
                                }
                            }
                            `}
            </style>
        </div>
    )
}

export default AddPhoto
