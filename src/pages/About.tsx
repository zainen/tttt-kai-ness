import { Card } from "../components/reusable/Card";

export const About = () => {
  return (
    <div className='w-full text-tttt-100 pt-4 md:pt-8 flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center'>

      <h2 className='text-3xl'>Meet Tysia</h2>
      <h4 className='text-xl'>Health and Wellness Coach | Holistic Nutritionist</h4>
      </div>
      <Card className='text-primary-400 m-4 w-full flex flex-col justify-center md:flex-row items-center text-lg bg-tttt-100' >
        <img className="object-contain object-center md:w-1/2 w-3/4"  src="https://www.shutterstock.com/image-photo/3d-image-neon-abstract-600w-2258892637.jpg" alt="AI" />
        <div className='w-3/4 md:w-1/2 py-4 md:px-4 flex flex-col justify-center items-center'>
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
      </Card>
    </div>
  )
}