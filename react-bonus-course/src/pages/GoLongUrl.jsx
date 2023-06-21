import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirestore from "../hooks/useFirestore";

const GoLongUrl = () => {
	const { pathname } = useLocation();
	const id = pathname.replace(/\/+$/, "");
	const { getUrl, error, loading } = useFirestore();

	const loadUrl = async () => {
		const document = await getUrl({ id });
		window.location.replace(document.longUrl);
	};

	useEffect(() => {
		loadUrl();
	}, []);

	return <>{!loading && error && <Navigate to="/Notfound" />}</>;
};

export default GoLongUrl;
