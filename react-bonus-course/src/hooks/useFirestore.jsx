import React, { useContext, useState } from "react";
import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	serverTimestamp,
	setDoc,
	where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { UserContext } from "../context/UserProvider";

const collectionName = "urls";
const urlsRef = collection(db, collectionName);

const useFirestore = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const { user } = useContext(UserContext);

	const getUrls = async () => {
		if (user) {
			setLoading(true);
			try {
				const q = query(urlsRef, where("userId", "==", user.uid));
				const querySnapshot = await getDocs(q);
				const docs = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(docs);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
	};

	const saveUrl = async ({ url, id }) => {
		const newDoc = {
			longUrl: url,
			shortUrl: id,
			userId: user.uid,
		};
		const docRef = doc(db, collectionName, id);
		try {
			await setDoc(
				docRef,
				newDoc,
				{ merge: true },
				{ timestamp: serverTimestamp() }
			);
			setData([{ ...newDoc, id: id }, ...data]);
		} catch (error) {
			setError(error.message);
		} finally {
		}
	};

	const deleteUrl = async ({ id }) => {
		const docRef = doc(db, collectionName, id);
		try {
			await deleteDoc(docRef);
			const newData = data.filter(doc => doc.id !== id);
			setData(newData);
		} catch (error) {
			setError(error.message);
		} finally {
		}
	};

	const getUrl = async ({ id }) => {
		setLoading(true);
		try {
			const docRef = doc(db, collectionName, id);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				return docSnap.data();
			} else {
				setError("Url not found");
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { user, data, error, loading, saveUrl, getUrls, deleteUrl, getUrl };
};

export default useFirestore;
