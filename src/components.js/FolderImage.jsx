import React from 'react'
import AddFile from './AddFile'
import AddFolder from './AddFolder'

export default function FolderImage({folderContent,displayContent,handleFolderDisplay}) {
    const folderImage="https://www.svgrepo.com/show/527060/folder-open.svg"
  return (
    <>
    <img onClick={handleFolderDisplay}
    className="folderImage"style={{cursor:"pointer",width:"2rem",height:"2rem"}}src={folderImage} alt="folderimage" /><span><AddFile /></span>
        <span><AddFolder /></span>
        
        {
         displayContent && folderContent.map((item)=>(
            <p>{item}</p>
          ))
        }
         
         </>
  )
}
