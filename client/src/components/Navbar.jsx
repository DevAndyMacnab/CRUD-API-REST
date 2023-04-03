import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="bg-zinc-600 flex justify-between px-20 py-5">
      <h1>ANDY MACNAB</h1>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>

        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
  )
}
