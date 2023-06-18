import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [userLogged, setUserLogged] = useState(false);

	useEffect(() => {
		const unsuscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUserLogged(true);
			}
		});
		return unsuscribe;
	}, []);

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
