import { Button } from "../components/reusable/Button";
import { Card } from "../components/reusable/Card";

export const About = () => {
  return (
    <div className='w-full text-ttt-100 pt-4 md:pt-8 flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center'>

      <h2 className='text-3xl'>Meet Tysia</h2>
      <h4 className='text-xl'>Health and Wellness Coach | Nutrition Expert</h4>
      </div>
      <Card className='text-primary-400 m-4 w-4/5'>
        <div className="flex justify-around items-center text-lg">
          <div className='w-1/3 p-4'>
            <p className="py-2">
              Tysia hails from Vancouver, Canada. Having spent a decade abroad in Europe and Asia, she loves to meet and work with people from all backgrounds and cultures.
            </p>
            <p className="py-2">
              She completed her Medical Degree at Fudan University, Shanghai Medical College followed by continued education in Plant-Based Nutrition with Cornell University's T. Colin Campbell Centre for Nutrition studies and Wellness Coach Certification from the Mayo Clinic. 
            </p>
            <p className="py-2">
              Tysia strives to work collaboratively with clients to develop personalized wellness plans and attainable goals in support each person's wellness journey, whatever that looks like. 
            </p>
            <p className="py-2">
              With a love of all things food, she incorporates recipes and nutritional references for optimal health from the inside out. 
            </p>
          </div>
          <img className="object-scale-down md:mt-12 h-fit rounded-xl"  src="https://www.shutterstock.com/image-photo/3d-image-neon-abstract-600w-2258892637.jpg" alt="AI" />
        </div>
        <div className='flex justify-center items-center md:pt-4'>
            <Button className='w-fit p-2 text-primary-400' action={() => (alert('todo'))}>Book A Consultation</Button>
          </div>
      </Card>
    </div>
  )
}