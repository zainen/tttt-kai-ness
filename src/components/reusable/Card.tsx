import { PropsWithChildren } from "react";

export const Card = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`${props.className}`}>
      <div className="p-4 border rounded-xl bg-ttt-100 shadow-lg border-accent-200">
        {props.children}
      </div>
    </div>
  )
}