import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const { user, validatingUser } = useContext(UserContext);

	if (validatingUser) {
		return <div />;
	}

	if (!user) {
		//user is not logged
		return <Navigate to="/login" />;
	}

	return children;
};

export default RequireAuth;
