import {useState} from "react"


const getMockFolderContent = (path) => {
  return [
    { name: 'File1.txt', path: `${path}File1.txt`, type: 'file' },
    { name: 'Folder1', path: `${path}Folder1/`, type: 'folder' },
  ];
};

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [folderContent, setFolderContent] = useState(getMockFolderContent('/'));

  const handleItemClick = (item) => {
    if (item.type === 'folder') {
      setCurrentPath(item.path);
      setFolderContent(getMockFolderContent(item.path));
    }
  };

  const handleAddFile = () => {
    const newFileName = `NewFile${folderContent.length + 1}.txt`;
    const newFile = { name: newFileName, path: `${currentPath}${newFileName}`, type: 'file' };
    setFolderContent([...folderContent, newFile]);
  };

  const handleAddFolder = () => {
    const newFolderName = `NewFolder${folderContent.length + 1}`;
    const newFolder = { name: newFolderName, path: `${currentPath}${newFolderName}/`, type: 'folder' };
    setFolderContent([...folderContent, newFolder]);
  };

  const handleRemoveFile = (path) => {
    const updatedContent = folderContent.filter(item => item.path !== path);
    setFolderContent(updatedContent);
  };

  const handleUpdateItemName = (path, newName) => {
    const updatedContent = folderContent.map(item => {
      if (item.path === path) {
        return { ...item, name: newName };
      }
      return item;
    });
    setFolderContent(updatedContent);
  };

  return (
    <div>
      <h1>File Explorer</h1>
      <div>
        Current Path: {currentPath}
      </div>
      <button onClick={handleAddFile}>Add File</button>
      <button onClick={handleAddFolder}>Add Folder</button>
      <ul>
        {folderContent.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item.type === 'folder' ? '📁' : '📄'} {item.name}
            {item.type === 'file' && (
              <div>
                <button onClick={() => handleRemoveFile(item.path)}>Remove</button>
                <button onClick={() => handleUpdateItemName(item.path, 'NewName.txt')}>Update Name</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;