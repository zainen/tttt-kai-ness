import { Link } from "react-router-dom";
import { Button } from "../reusable/Button"
import { Image } from "../reusable/Image";
import { ModalPopup } from "./Modal";
import { useState } from "react";


export const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      {openModal ? <ModalPopup onClose={() => setOpenModal(false)} /> : undefined}
      <div className="sticky top-0 w-full h-fit bg-primary-400">
        <div className="w-full h-fit flex justify-between items-center bg-primary-400 text-tttt-200">
          <Link className="pl-4 py-4 md:py-8 text-3xl flex items-center" to='/'>
            <Image src='/img/kainess.svg'/>
            <h2 className="font-extrabold drop-shadow-header">
              Kai Care & Wellness
            </h2>
            </Link>
          <div className="flex pr-2 items-center">
          <nav>
          <ul className="md:flex text-lg font-semibold pt-2 pr-2">
            <li className="px-2 drop-shadow-sub-header underline">
              <Link to='/'>Home</Link>
            </li>
            <li className="px-2 drop-shadow-sub-header underline">
              <Link to='/about'>About</Link>
            </li>
            <li className="px-2 drop-shadow-sub-header underline">
              <Link to='/kai'>Kai</Link>
            </li>
            {/* TODO <li className="px-2">
              <Link to='/blogs'>Blogs</Link>
            </li> */}
            <li className="px-2 drop-shadow-sub-header underline">
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
          <div></div>
          <h4 className="font-semibold text-2xl drop-shadow-sub-header">Living and leading with Kai-ness</h4>
          <Button action={() => setOpenModal(true)} className="w-fit px-2 text-primary-400 drop-shadow-sub-header">Book Now</Button>
        </div>
      </div>
    </>
  )
}