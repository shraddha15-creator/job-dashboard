import "./jobcard.css";
import { HiLocationMarker } from "react-icons/hi";

export const JobCard = ({ job }) => {
	return (
		<div className="jobcard">
			<img src={job.company_logo} className="job-logo" alt="job-logo" />
			<div>
				<p className="comp-name">{job.company_name}</p>
				<div className="comp-description">
					<p className="job-role">{job.job_role}</p>
					<p>{job.job_type}</p>
					<p>{job.ctc ? job.ctc : "Not Disclosed"}</p>
					<p>
						<HiLocationMarker />
						{job.remote_available ? "Remote" : "Onsite"}
					</p>
				</div>
			</div>
		</div>
	);
};
