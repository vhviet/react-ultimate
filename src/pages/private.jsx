import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { NavLink } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);

  if (user && user.id) {
    return <>{props.children}</>;
  }

  return (
    <div className="error-page">
      <Result
        status="403"
        title="Unauthorized"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <NavLink to="/login">
            <Button type="primary">Login to access this page</Button>
          </NavLink>
        }
      />
    </div>
  );
};

export default PrivateRoute;
