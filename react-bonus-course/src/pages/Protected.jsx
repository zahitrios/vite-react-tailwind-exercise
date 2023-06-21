import { ClipboardDocumentIcon, TrashIcon } from "@heroicons/react/24/outline";
import useFirestore from "../hooks/useFirestore";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { CopyToClipboard } from "react-copy-to-clipboard";

const urlValidationSchema = Yup.object().shape({
	url: Yup.string().trim().required().url().max(40),
});

const { protocol, hostname, port } = window.location;
const currentUrl = protocol + "//" + hostname + ":" + port + "/";

const Protected = () => {
	const { data, error, loading, getUrls, saveUrl, deleteUrl } =
		useFirestore();

	useEffect(() => {
		getUrls();
	}, []);

	const handleSubmit = async (
		values,
		{ setSubmitting, resetForm, setErrors }
	) => {
		await saveUrl({ url: values.url, id: nanoid(6) });
		resetForm();
	};

	const handleDelete = async id => {
		await deleteUrl({ id: id });
	};

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-600">
						Deploy faster
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Enter an URL to save it
					</p>

					<Formik
						initialValues={{ url: "https://" }}
						onSubmit={handleSubmit}
						validationSchema={urlValidationSchema}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
						}) => (
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									name="url"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.url}
									placeholder="http://yahoo.com.mx"
									className="rounded-lg outline-none mt-4"
								/>
								<p className="text-red-700 text-sm first-letter:capitalize">
									{errors.url && touched.url && errors.url}
								</p>
							</form>
						)}
					</Formik>
					{error && (
						<p className="text-red-700 uppercase mt-3">{error}</p>
					)}
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					{loading ? (
						<p>Loading data...</p>
					) : (
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{data.map(doc => (
								<div key={doc.id} className="relative pl-16">
									<dt className="text-base font-semibold leading-7 text-gray-900">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
											<CopyToClipboard
												text={currentUrl + doc.shortUrl}
												onCopy={() => {}}
											>
												<ClipboardDocumentIcon
													className="h-6 w-6 text-white cursor-pointer"
													aria-hidden="true"
												/>
											</CopyToClipboard>
										</div>
										{doc.shortUrl}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										{doc.longUrl}
										<button
											className=" ml-2 mb-2"
											onClick={() => {
												handleDelete(doc.id);
											}}
										>
											<TrashIcon className="text-red-600 rounded-full h-5 w-5" />
										</button>
									</dd>
								</div>
							))}
						</dl>
					)}
				</div>
			</div>
		</div>
	);
};

export default Protected;
