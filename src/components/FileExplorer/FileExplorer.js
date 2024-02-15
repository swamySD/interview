import React, { useState } from 'react'
import Folder from './Folder'
import classes from './FileExplorer.module.css'
import explorerData from './Data'
import useTraverseTree from './Hooks/UseTraverseTree'
const FileExplorer = () => {
    const [explorerDatas,setExplorerDatas]=useState(explorerData)

    const {insertNode}=useTraverseTree()
    
    const handleInsertNode=(folderId,item,isFolder)=>{
        const finalTree=insertNode(explorerData,folderId,item,isFolder)
        setExplorerDatas(finalTree)
    }

  return (
    <div className={classes.container}>
        <Folder handleInsertNode={handleInsertNode} explorerDatas={explorerDatas} />
    </div>
  )
}

export default FileExplorer