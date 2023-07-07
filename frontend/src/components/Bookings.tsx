import { Button } from "./reusable/Button";
import { Card } from "./reusable/Card";

export const Bookings = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center">
        <img className='w-1/2 object-cover object-center max-h-80 p-2' src="./img/blank-card.jpg" alt="blank recipe card"/>
        <Card rounded={false} className="h-fit w-80 -translate-x-20 bg-primary-100 text-primary-400 p-8 md:p-12" >
          <h4 className="text-lg font-bold ">Online Initial Consultation</h4>
          <div className="border border-b-1 my-4 border-primary-400" />
          <div>
            <p>1 hr</p>
            <p>$60</p>
            <Button action={() => (alert('todo'))} className="px-2 w-fit text-primary-300 mt-4">Book Now</Button>
          </div>
          
        </Card>
      </div>
      <div className="flex flex-row items-center justify-center">
        <img className='w-1/2 object-cover object-center max-h-80 p-2' src="./img/healthy-living.jpg" alt="blank recipe card"/>
        <Card rounded={false} className="h-fit w-80 -translate-x-20 bg-primary-100 text-primary-400 p-8 md:p-12" >
          <h4 className="text-lg font-bold">Healthy Living Seminar</h4>
          <div className="border border-b-1 my-4 border-primary-400" />
          <div>
            <p>1 hr</p>
            <p>Inquire for pricing</p>
            <Button action={() => (alert('todo'))} className="px-2 w-fit text-primary-300 mt-4">Book Now</Button>
          </div>
          
        </Card>
      </div>
    </div>
  )
}