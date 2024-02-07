import React, { useState } from 'react'
import Folder from './Folder'
import classes from './FileExplorer.module.css'
import explorerData from './Data'
const FileExplorer = () => {
    const [explorerDatas,setExplorerDatas]=useState(explorerData)
  return (
    <div className={classes.container}>
        <Folder explorerDatas={explorerDatas} />
    </div>
  )
}

export default FileExplorer