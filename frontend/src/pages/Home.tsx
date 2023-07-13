import { useState } from "react";
import { Bookings } from "../components/Bookings";
import { Body } from "../components/containers/Body";
import { Button } from "../components/reusable/Button";
import { Card } from "../components/reusable/Card";
import { Image } from "../components/reusable/Image";
import { Section } from "../components/reusable/Section";
import { ModalPopup } from "../components/containers/Modal";

export const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <>
      <Body className="flex flex-col items-center z-0">
        {isOpenModal ? <ModalPopup onClose={handleModal} /> : undefined}
        <Section className="w-full h-fit flex justify-center">
        <div
          className="relative w-full pt-10 bg-no-repeat min-h-fit h-fit text-center bg-waves bg-center"
        >
          <div className=" w-full p-10 text-tttt-200 drop-shadow-header blur-0">
            <h1 className="text-center text-3xl font-bold ">The Journey Towards Health Stems from Within.</h1>

            <div className="flex flex-col md:flex-row w-full pt-4 md:pt-16 ">
              <div className="flex-1 text-center p-4 m-2 flex flex-col justify-between">
                <p className="italic drop-shadow-sub-header font-semibold">“The natural healing force within each of us is the greatest force in getting well.”</p>
                <p className="md:pt-4 text-lg text-right font-semibold">- Hippocrates</p>
              </div>
              <div className="flex-1 text-center p-4 m-2 flex flex-col justify-between">
                <p className="italic drop-shadow-sub-header font-semibold">“You must find the place inside of yourself where nothing is impossible”</p>
                <p className="md:pt-4 text-lg text-right font-semibold">- Dr Deepak Chopra, MD</p>
              </div>
              <div className="flex-1 text-center p-4 m-2 flex flex-col justify-between">
                <p className="italic drop-shadow-sub-header font-semibold">“Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend.”</p>
                <p className="md:pt-4 text-lg text-right font-semibold">- Lao Tzu</p>
              </div>
            </div>

          </div>
        </div>
        </Section>
        <Section className="lg:max-w-4/5 w-full bg-tttt-100 flex">
          <div className="p-4 flex flex-col md:flex-row justify-center items-center">
            <Image className=" object-scale-down object w-3/4 md:w-1/2" src={`/img/healthy-lifestyle.jpeg`} alt="first" />
            <div className="w-full text-2xl px-6 py-4 flex flex-col items-center ">
              <h2 className="font-extrabold text-3xl text-primary-300 text-center drop-shadow-sub-header">A Healthy Life That Works For Your Lifestyle</h2>
              <div className="pt-4 flex flex-col items-center ">

                <p className="py-2 text-primary-300 text-center font-semibold">Online Health Coaching with Tysia Suzuki</p>
                <Button colour="primary" className='text-tttt-200 px-4 max-w-fit drop-shadow-sub-header' action={handleModal}>Discover</Button>
              </div>
            </div>
          </div>
        </Section>
        <Section className="lg:max-w-4/5 w-full bg-primary-300 flex">
          <div className="p-4 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full text-2xl px-6 py-4 flex flex-col items-center ">
              <h2 className="font-extrabold text-3xl text-tttt-200 text-center drop-shadow-header">Meet Tysia</h2>
              <h2 className="font-semibold text-xl pt-4 text-tttt-300 text-center drop-shadow-sub-header">Health and Wellness Coach | Nutrition Expert</h2>
              <div className="pt-4 flex flex-col items-center ">
                <a href="/about">
                  <Button colour="accent" className='text-primary-300 px-4 max-w-fit drop-shadow-sub-header' action={() => {}}>Read More</Button>
                </a>
              </div>
            </div>
            <Image className=" object-scale-down object w-3/4 md:w-1/2" src={`/img/tttt-smile.JPG`} alt="second" />
          </div>
        </Section>
        <Section className="lg:max-w-4/5 w-full bg-tttt-200 flex flex-col md:flex-row">
          <div className="w-full  flex flex-col justify-center items-center">
            <h2 className="font-bold text-3xl py-4 md:py-10 text-primary-300 text-center">What I Specialize In</h2>
            <div className="w-full grid md:grid-cols-5">
              <Card className="px-2 py-4  flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4 object-scale-down" src='/img/digestion.svg' svgFill="fill-tttt-200"/>
                <p className="py-2 md:py-4 text-center text-tttt-200 ">Reset Your Digestion System</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4 bg-opacity-100" src='/img/eating-habits.svg'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 bg-opacity-100">Establish Eating Habits</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4" src='/img/healthy-lifestyle.svg'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 ">Adopt a Healthy Lifestyle</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4" src='/img/health-goals.svg'/>
                <p className="py-2 md:py-4 text-center text-tttt-200 ">Set Health Goals</p>
              </Card>
              <Card className="px-2 py-4 flex flex-col justify-center items-center bg-primary-200 m-4">
                <Image className="py-2 md:py-4" src='/img/wellness-plan.svg'/>
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
        <Section className="lg:max-w-4/5 w-full bg-primary-300">
          <h2 className="text-center text-3xl p-6 md:p-10 text-primary-300 font-bold">Let’s Get Healthy</h2>
          <div className="w-full">
            <Bookings openModal={handleModal}/>
          </div>
        </Section>
        <Section className="lg:max-w-4/5 w-full bg-tttt-200 flex flex-col justify-center items-center pb-8">
          <h2 className="text-center text-3xl p-6 md:p-10 text-primary-300 font-bold">The Kai Care & Wellness Feed</h2>
          <div className="max-w-lg">

            <img src="./img/coming-soon-kai.jpg" alt="coming soon to kai health & wellness" />
          </div>
        </Section>
      </Body>
    </>
  )
}