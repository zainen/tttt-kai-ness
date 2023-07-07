import { Bookings } from "../components/Bookings";
import { Body } from "../components/containers/Body";
import { Button } from "../components/reusable/Button";
import { Card } from "../components/reusable/Card";
import { Image } from "../components/reusable/Image";
import { Section } from "../components/reusable/Section";

export const Home = () => {
  return (
    <>
      <Body className="flex flex-col items-center">
        <Section className="lg:max-w-4/5 w-full bg-tttt-100 flex">
          <div className="p-4 flex flex-col md:flex-row justify-center items-center">
            <Image className=" object-scale-down object w-3/4 md:w-1/2" src={`/img/portrait-holder.jpg`} alt="first" />
            <div className="w-full text-2xl px-6 py-4 flex flex-col items-center ">
              <h2 className="font-extrabold text-3xl text-primary-300 text-center">A Healthy Life That Works For Your Lifestyle</h2>
              <div className="pt-4 flex flex-col items-center ">

                <p className="py-2 text-primary-300 text-center">Online Health Coaching with Tysia Suzuki</p>
                <Button colour="primary" className='text-tttt-200 px-4 max-w-fit' action={() => (alert("todo"))}>Discover</Button>
              </div>
            </div>
          </div>
        </Section>
        <Section className="lg:max-w-4/5 w-full bg-primary-300 flex">
          <div className="p-4 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full text-2xl px-6 py-4 flex flex-col items-center ">
              <h2 className="font-extrabold text-3xl text-tttt-200 text-center">Meet Tysia</h2>
              <h2 className="font-bold text-xl pt-4 text-tttt-300 text-center">Health and Wellness Coach | Nutrition Expert</h2>
              <div className="pt-4 flex flex-col items-center ">
                <a href="/about">
                  <Button colour="accent" className='text-primary-300 px-4 max-w-fit' action={() => {}}>Read More</Button>
                </a>
              </div>
            </div>
            <Image className=" object-scale-down object w-3/4 md:w-1/2" src={`/img/portrait-holder2.jpg`} alt="second" />
          </div>
        </Section>
        <Section className="lg:max-w-4/5 w-full bg-tttt-200 flex flex-col md:flex-row">
          <div className="w-full  flex flex-col justify-center items-center">
            <h2 className="font-bold text-3xl py-4 md:py-10 text-primary-300 text-center">What I Specialize In</h2>
            <div className="w-full grid md:grid-cols-5">
              <Card className="px-2 py-4  flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4" src='/'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 ">Reset Your Digestion System</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4 bg-opacity-100" src='/'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 bg-opacity-100">Establish Eating Habits</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4" src='/'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 ">Adopt a Healthy Lifestyle</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4" src='/'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 ">Set Health Goals</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4" src='/'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 ">Personalized Wellness Plan</p>
              </Card>
            </div>
            <div className=" w-full flex items-center justify-center">
              <a href="/kai">
                <Button colour="accent" className="my-4 text-primary-300 px-4 w-fit" action={() => {}}>Learn More</Button>
              </a>
            </div>
          </div>
        </Section>
        <div className="lg:max-w-4/5 w-full bg-primary-300 p-10">
          <h2 className="text-center text-3xl font-bold text-tttt-200">The Journey Towards Health Stems from Within.</h2>

          <div className="flex flex-col md:flex-row w-full pt-4 md:pt-16 text-tttt-200">
            <div className="flex-1 text-center p-4 m-2 flex flex-col justify-between">
              <p className="italic">“The natural healing force within each of us is the greatest force in getting well.”</p>
              <p className="md:pt-4 text-lg text-right">- Hippocrates</p>
            </div>
            <div className="flex-1 text-center p-4 m-2 flex flex-col justify-between">
              <p className="italic">“You must find the place inside of yourself where nothing is impossible”</p>
              <p className="md:pt-4 text-lg text-right">- Dr Deepak Chopra, MD</p>
            </div>
            <div className="flex-1 text-center p-4 m-2 flex flex-col justify-between">
              <p className="italic">“Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend.”</p>
              <p className="md:pt-4 text-lg text-right">- Lao Tzu</p>
            </div>
          </div>

        </div>
        <Section className="lg:max-w-4/5 w-full bg-tttt-100">
          <h2 className="text-center text-3xl p-6 md:p-10 text-primary-300 font-bold">Let’s Get Healthy</h2>
          <Bookings />
        </Section>
        <Section className="lg:max-w-4/5 w-full bg-primary-200 flex flex-col justify-center items-center pb-8">
          <h2 className="text-center text-3xl p-6 md:p-10 text-tttt-200 font-bold">The Kai Care & Wellness Feed</h2>
          <div className="max-w-lg">

            <img src="./img/coming-soon-kai.jpg" alt="coming soon to kai health & wellness" />
          </div>
        </Section>
      </Body>
    </>
  )
}