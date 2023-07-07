import { Link } from "react-router-dom";
import { Button } from "../reusable/Button"


export const Header = () => {
  return (
    <div className="sticky top-0 w-full h-fit bg-primary-300">
      <div className="w-full h-fit flex justify-between items-center bg-primary-300 text-tttt-200">
        <Link className="pl-4 py-4 md:py-8 text-3xl" to='/'>Kai Care & Wellness</Link>
        <div className="flex pr-2 items-center">
        <nav>
        <ul className="md:flex">
          <li className="px-2">
            <Link to='/'>Home</Link>
          </li>
          <li className="px-2">
            <Link to='/about'>About</Link>
          </li>
          <li className="px-2">
            <Link to='/kai'>Kai</Link>
          </li>
          <li className="px-2">
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className="px-2">
            <Link to='/podcasts'>Podcasts</Link>
          </li>
          <li className="px-2">
            <Link to='/recipies'>Recipies</Link>
          </li>
          <li className="px-2">
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
        </div>
      </div>
      <div className="flex w-full h-fit py-4 justify-between px-4 bg-primary-300 text-tttt-200">
        <h4>Living and leading with Kai-ness</h4>
        <Button action={() => {alert('todo')}} className="w-fit px-2 text-primary-400">Book Now</Button>
      </div>
    </div>
  )
}