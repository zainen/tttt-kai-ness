import { Body } from "../components/containers/Body";
import { Card } from "../components/reusable/Card";
import { SectionHeader } from "../components/reusable/SectionHeader";

export const About = () => {
  return (
    <Body className='text-tttt-100 pt-8 flex flex-col items-center'>
      <SectionHeader>
        <h2 className='text-3xl font-bold pb-6'>Meet Tysia</h2>
        <h4 className='text-xl pb-6 text-center px-2'>Health and Wellness Coach | Holistic Nutritionist</h4>
      </SectionHeader>
      <Card className='text-primary-400 w-full flex flex-col justify-center md:justify-around md:flex-row items-center text-lg bg-tttt-100' >
        <img className="object-contain object-center md:w-1/2 w-3/4"  src="https://www.shutterstock.com/image-photo/3d-image-neon-abstract-600w-2258892637.jpg" alt="AI" />
        <div className='w-3/4 md:w-1/2 py-4 md:px-4 flex flex-col justify-center items-center max-w-lg'>
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
    </Body>
  )
}