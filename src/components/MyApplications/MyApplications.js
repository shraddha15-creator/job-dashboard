import { Link } from "react-router-dom";
import { useJobs } from "../../context/job-context";
import "./myapplications.css";

export const MyApplications = () => {
	const { applications } = useJobs();
	console.log("====================================");
	console.log(applications);
	console.log("====================================");
	return (
		<div className="dashboard-applications">
			<p>Your Applications</p>
			<div className="applications-listing">
				{applications.map((application) => (
					<Link key={application.job_id}>{application.company_name}</Link>
				))}
			</div>
		</div>
	);
};
