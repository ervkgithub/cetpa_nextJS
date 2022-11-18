import Link from "next/link"

const Facilities = () => {
    return (
      <div>
        <ul>
          <Link href="./facilities/lab">Lab</Link>
          <Link href="./facilities/library">Library</Link>
          <Link href="./facilities/playground">Playground</Link>
          <Link href="./facilities/sport">Sport</Link>
        </ul>
      </div>
    )
  }
  
  export default Facilities