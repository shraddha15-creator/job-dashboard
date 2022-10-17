import { JobCard } from "../../components/JobCard/JobCard";
import { MyApplications } from "../../components/MyApplications/MyApplications";
import { Events } from "../../components/UpcomingEvents/Events";
import { useJobs } from "../../context/job-context";
import "./dashboard.css";

export const Dashboard = () => {
	const { jobs } = useJobs();
	return (
		<div className="dashboard-container">
			{/* <MyApplications /> */}
			<Events />
			<div className="dashboard-jobs">
				<p className="txt-xl">Recommended Jobs ({jobs?.length})</p>
				{jobs.map((job) => {
					return <JobCard job={job} key={job.id} />;
				})}
			</div>
		</div>
	);
};
