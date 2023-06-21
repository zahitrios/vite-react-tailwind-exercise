import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export const UserContext = createContext();

const UserProvider = props => {
	const [user, setUser] = useState(false);
	const [validatingUser, setValidatingUser] = useState(true);

	const registerWithGoogle = () => signInWithPopup(auth, googleProvider);

	const registerWithEmail = ({ email, password }) =>
		createUserWithEmailAndPassword(auth, email, password);

	const logInWithEmail = ({ email, password }) =>
		signInWithEmailAndPassword(auth, email, password);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			if (user) setUser(user);
			else setUser(false);
			setValidatingUser(false);
		});
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				registerWithGoogle,
				registerWithEmail,
				logInWithEmail,
				validatingUser,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
