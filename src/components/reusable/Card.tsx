import { PropsWithChildren } from "react";

export const Card = (props: PropsWithChildren<{ className?: string; rounded?: boolean }>) => {
  return (
    <div className={`p-4 border shadow-lg border-accent-200 ${props.className} ${props.rounded ? 'rounded-xl' : ''}`}>
      {props.children}
    </div>
  )
}