import { PropsWithChildren } from "react";

export const SectionHeader = (props: PropsWithChildren) => {
  return (
    <div className='flex flex-col justify-center items-center text-tttt-200'>
      {props.children}
    </div>
  )
}