import Link from "next/link"

const Facilities = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <ul className="mt-4 navbar-nav">
          <li className="nav-item">
          <Link href="./facilities/lab" className="nav-link">Lab</Link>
          </li>
          <li className="nav-item">
          <Link href="./facilities/library" className="nav-link">Library</Link>
          </li>
          <li className="nav-item">
          <Link href="./facilities/playground" className="nav-link">Playground</Link>
          </li>
          <li className="nav-item">
          <Link href="./facilities/sport" className="nav-link">Sport</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Facilities