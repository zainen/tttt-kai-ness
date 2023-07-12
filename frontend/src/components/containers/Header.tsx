import { Link } from "react-router-dom";
import { Button } from "../reusable/Button"
import { Image } from "../reusable/Image";


export const Header = () => {
  return (
    <div className="sticky top-0 w-full h-fit bg-primary-400">
      <div className="w-full h-fit flex justify-between items-center bg-primary-400 text-tttt-200">
        <Link className="pl-4 py-4 md:py-8 text-3xl flex items-center" to='/'>
          <Image src='/img/kainess.svg'/>
          <h2 className="font-extrabold">
            Kai Care & Wellness
          </h2>
          </Link>
        <div className="flex pr-2 items-center">
        <nav>
        <ul className="md:flex text-lg font-semibold">
          <li className="px-2">
            <Link to='/'>Home</Link>
          </li>
          <li className="px-2">
            <Link to='/about'>About</Link>
          </li>
          <li className="px-2">
            <Link to='/kai'>Kai</Link>
          </li>
          {/* TODO <li className="px-2">
            <Link to='/blogs'>Blogs</Link>
          </li> */}
          <li className="px-2">
            <Link to='/podcasts'>Podcasts</Link>
          </li>
          {/* TODO <li className="px-2">
            <Link to='/recipies'>Recipies</Link>
          </li> */}
        </ul>
      </nav>
        </div>
      </div>
      <div className="flex w-full h-fit py-4 justify-between px-4 bg-primary-400 text-tttt-200">
        <h4 className="font-semibold text-2xl">Living and leading with Kai-ness</h4>
        <Button action={() => {alert('todo')}} className="w-fit px-2 text-primary-400">Book Now</Button>
      </div>
    </div>
  )
}