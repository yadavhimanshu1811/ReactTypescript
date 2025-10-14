import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary" style={{width:"100%"}}>{children}</div>
  )
}

export default Alert