import React from 'react'
import ReactDOM from 'react-dom/client'
import DeleteNonio from './components/Deletenonio/DeleteNonio'

const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <DeleteNonio />
  </React.StrictMode>
)
