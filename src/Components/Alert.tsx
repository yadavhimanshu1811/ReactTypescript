import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  closeAlert: ()=>void;
}
const Alert = ({ children, closeAlert }: Props) => {
  return (
    <div className="alert alert-primary d-flex justify-content-between" style={{ width: "100%" }}>
      <span>{children}</span>
      <button type="button" className="btn-close" onClick={closeAlert}></button>
    </div>
  );
};

export default Alert;
