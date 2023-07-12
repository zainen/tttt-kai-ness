import { PropsWithChildren } from "react";

export const Body = (props: PropsWithChildren<{className: string;}>) => {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-full ${props.className}`}>
        {props.children}
      </div>
    </div>
  )
}