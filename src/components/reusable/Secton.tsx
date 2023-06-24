import { Card } from "./Card";

export const Section = (props: {title?: string, body?: string}) => {
return (
  <Card>
    <h3>{props.title}</h3>
    <p>{props.body}</p>
  </Card>
)
}