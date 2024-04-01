import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <p>Here is the Navbar:</p>
      <nav>
        <Link to="/home">Home </Link>
        <Link to="/nav-demo">Nav Demo </Link>
      </nav>
    </>
  )
}

export default Navbar