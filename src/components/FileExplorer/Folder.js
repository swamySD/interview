import React,{useState} from 'react'
import classes from './Folder.module.css'
const Folder = ({handleInsertNode,explorerDatas}) => {
    
const [expand,setExpand]=useState(false)
const [showInput,setShowInput]=useState({
    visible:false,
    isFolder:null
})

const handleNewFolder=(e,isFolder)=>{
    e.stopPropagation()
    setExpand(true)
    setShowInput({
    visible:true,
    isFolder
    })
}

const onAddFolder=(e)=>{
if(e.keyCode=== 13 && e.target.value){
 handleInsertNode(explorerDatas.id,e.target.value,showInput.isFolder)

 setShowInput({...showInput,visible:false})
}
}

 if(explorerDatas.isFolder){
    return (
    <div style={{marginTop:'5px'}}>
        <div className={classes.folder} onClick={()=>setExpand(!expand)}>
            <span>📁{explorerDatas.name}</span>
            <div >
                <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
                <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
                </div>
            </div>
        <div style={{display:expand?"block":'none',paddingLeft:'20px'}}>
            {
                showInput.visible&&(
                    <div className={classes['input-container']}>
                        <span>{showInput.isFolder?"📁":<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="16"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>}</span>
                        <input type="text" autoFocus onKeyDown={onAddFolder}
                        onBlur={()=>setShowInput({...showInput,visible:false})}
                        className={classes['input-container__input']}/>
                    </div>
                )
            }
            {explorerDatas.items.map((exp,index)=>{
                return(
                   <Folder handleInsertNode={handleInsertNode} explorerDatas={exp} key={index} />
                )
            })}
        </div>

    </div>
  )}else{
    return(
        <span className={classes.file}>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="16"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
           {''} {explorerDatas.name}</span></span>
    )
  }
}

export default Folder