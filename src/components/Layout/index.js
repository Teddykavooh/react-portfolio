import Sidebar from '../Sidebar'
import './index.scss'
import { Outlet } from 'react-router-dom'
import MenuBar from '../MenuBar'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <MenuBar />
      <div className="page">
        <span className="tags top-tags">
          &lt;html&gt;
          <br />
          <span className="mid-tags">&lt;body&gt;</span>
        </span>
        <Outlet />
        <span className="tags">
          <span className="mid-tags">&lt;/body&gt;</span>
          <br />
          &lt;/html&gt;
        </span>
      </div>
    </>
  )
}

export default Layout
