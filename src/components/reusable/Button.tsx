import { PropsWithChildren } from "react";

export const Button = (props: PropsWithChildren<{action: () => void, image?: string, className?: string}>) => {
  return (
    <div className={`border rounded-lg border-accent-200 bg-accent-100 ${props.className}`}>
      <button className="w-full h-full" onClick={props.action}>{props.children}</button>
    </div>
  )
}