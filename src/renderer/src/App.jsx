import Versions from './components/Versions'
import Sidebar from './components/Sidebar/Sidebar'
import OpenAI from './components/Openai/Openai'


function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <Sidebar/>
    <OpenAI/>
        {/* <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      <Versions></Versions> */}
    </>
  )
}

export default App

