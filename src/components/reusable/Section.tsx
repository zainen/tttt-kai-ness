import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{className?: string;}>) => {
return (
  <div className={`${props.className}`}>
    {props.children}
  </div>

)
}