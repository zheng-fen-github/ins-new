import React from 'react'

function Loadphoto({data}) {
    const uploadBu = (e) => {      //上传图片按钮事件
        e.target.nextElementSibling.click();
    }

    const fileChange = (e) => {     //上传图片文件解析事件
       
       let img  = document.createElement('img');
       img.src = URL.createObjectURL(e.target.files[0]);
       e.target.value = ''; 
       img.onload = () => {   
                 
           document.querySelector('.photo-container').append(img);
           canvasFunc(img.offsetWidth,img.offsetHeight,img);
       }
    }
    return (
        <>
                <button onClick={uploadBu}>
                        更换头像
                </button>
                <input type="file"
                        name="avatar-photo"
                        id="photo"
                        onChange={fileChange}
                        hidden/>
                <div className="photo-container" style={{position:'fixed',
                left:0,top:0,
                visibility:'hidden',
                userSelect:'none'                
                }}>
                
                </div>
                <canvas id="canvas" hidden>
                     
                </canvas>
                <canvas id="canvas2" hidden >
                    
                </canvas>
              <style jsx> {`
                        button {                        
                            background:none;
                            border:none;
                            outline:none;
                            color:#3897f0;
                            font-weight:700;
                        }
                        `}
              </style>               
        </>
    )
}

export default Loadphoto


const canvasFunc = (W,H,img) => {
    
        let canvas = document.getElementById('canvas');
        let  ctx = canvas.getContext('2d');
        let count = Math.min(W,H);
        canvas.width = count;
        canvas.height = count;
        let w =(Math.max(W,H)-count)/2;    
        W>H?ctx.drawImage(img,-w,0): ctx.drawImage(img,0,-w); //裁减成一比一
        

        let ctx2 = document.getElementById('canvas2').getContext('2d');
        canvas2.width = 40;
        canvas2.height= 40;
        ctx2.drawImage(canvas,0,0,40,40);  // 缩放成40px 40px
       document.getElementById('canvas2').toBlob((blob) => {  // 输出图片
        let formData = new FormData();
        formData.append("file",blob, "image.png");
        fetch('http://localhost:3001/getphotos//avatar',
        {method:'POST',body:formData,credentials: "include"})
        .then(res => res.json())
        .then(result => img);
        // let link = document.createElement('a');
        // link.download = 'like.jpg';
        // link.href = URL.createObjectURL(blob);
        // link.click();
        // URL.revokeObjectURL(link.href);  //删除blob 内存缓存
    },'image/png')
    
}