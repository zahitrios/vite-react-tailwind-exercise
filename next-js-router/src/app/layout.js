import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className="bg-gradient-to-r from-cyan-500 to-blue-500">
				{children}
			</body>
		</html>
	);
}
