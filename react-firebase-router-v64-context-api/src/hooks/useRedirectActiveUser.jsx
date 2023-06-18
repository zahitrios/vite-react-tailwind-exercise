import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const useRedirectActiveUser = () => {
	const { userLogged } = useUserContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (userLogged) navigate("/admin");
	}, [userLogged]);
};

export default useRedirectActiveUser;
