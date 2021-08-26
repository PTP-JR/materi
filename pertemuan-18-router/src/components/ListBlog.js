import { Link } from "react-router-dom"

function ListBlog() {
  return (
    <div>
      <ul>
        <li><Link to="/blog/html">HTML</Link></li>
        <li><Link to="/blog/css">CSS</Link></li>
        <li><Link to="/blog/js">JS</Link></li>
      </ul>
    </div>
  )
}

export default ListBlog
