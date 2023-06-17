import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [userLogged, setUserLogged] = useState(false);

	return (
		<UserContext.Provider value={{ userLogged, setUserLogged }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;

export const useUserContext = () => {
	return useContext(UserContext); // {userLogged, setUserLogged}
};
