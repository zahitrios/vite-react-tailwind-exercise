import TitlePage from "@/app/components/TitlePage";

const SpaceDetail = ({ params }) => {
	return (
		<div>
			<TitlePage title={`Space detail: ${params.id}`} />
		</div>
	);
};

export default SpaceDetail;
