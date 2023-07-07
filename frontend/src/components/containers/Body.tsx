import { PropsWithChildren } from "react";

export const Body = (props: PropsWithChildren<{className: string;}>) => {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-full md:px-6 lg:px-12 ${props.className}`}>
        {props.children}
      </div>
    </div>
  )
}