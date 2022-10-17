import Google from "../../assets/google.png";
import Facebook from "../../assets/fb.png";
import Netflix from "../../assets/netflix.png";

import "./event.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { InterviewStepper } from "../InterviewStepper";

export const upcoming_events = [
	{
		event_id: "e01",
		company_name: "Google",
		company_logo: Google,
		interview_role: "Senior UI Developer",
		interview_step: "2",
		date: "1 November 2022",
		time: "11.00 a.m.",
		job_description:
			"Write product or system development code. Participate in or lead design reviews with peers and stakeholders to decide amongst available technologies. Review code developed by other developers and provide feedback to ensure best practices (e.g., style guidelines, checking code in, accuracy, testability, and efficiency). Contribute to existing documentation or educational content and adapt content based on product/program updates and user feedback. Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality.",
	},
	{
		event_id: "e02",
		company_name: "Facebook",
		company_logo: Facebook,
		interview_role: "Senior Product Designer",
		interview_step: "3",
		date: "29 November 2022",
		time: "1.00 p.m.",
		job_description:
			"Write product or system development code. Participate in or lead design reviews with peers and stakeholders to decide amongst available technologies. Review code developed by other developers and provide feedback to ensure best practices (e.g., style guidelines, checking code in, accuracy, testability, and efficiency). Contribute to existing documentation or educational content and adapt content based on product/program updates and user feedback. Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality.",
	},
	{
		event_id: "e03",
		company_name: "Netflix",
		company_logo: Netflix,
		interview_role: "Full Stack Developer",
		interview_step: "5",
		date: "15 November 2022",
		time: "4.45 p.m.",
		job_description:
			" Write product or system development code. Participate in or lead design reviews with peers and stakeholders to decide amongst available technologies. Review code developed by other developers and provide feedback to ensure best practices (e.g., style guidelines, checking code in, accuracy, testability, and efficiency). Contribute to existing documentation or educational content and adapt content based on product/program updates and user feedback. Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality. With your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions. ",
	},
];

export const Events = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [upcomingEvent, setUpcomingEvent] = useState();
	const joinHandler = (event) => {
		setModalOpen((prev) => !prev);
		setUpcomingEvent(event);
	};
	return (
		<div className="dashboard-events">
			<p className="txt-xl">Upcoming Events</p>
			<div className="">
				{upcoming_events.map((event) => (
					<div className="event-card" key={event.event_id}>
						<div className="event-comp-detail">
							<img
								src={event.company_logo}
								alt={`event.company_name`}
								className="event-compnay-logo"
							/>
							<p className="event-comp-name">{event.company_name}</p>
						</div>
						<div>
							<div className="event-date-time">
								<p>{event.date}</p>
								<p>{event.time}</p>
							</div>
							<p className="txt-xl event-name">{event.interview_role}</p>
						</div>
						<div className="event-btns">
							<button
								onClick={() => joinHandler(event)}
								className="event-btn event-btn-join"
							>
								Join Meet
							</button>
						</div>
					</div>
				))}
			</div>
			{modalOpen && (
				<div className="modal">
					<div className="event-card modal-card" key={upcomingEvent.event_id}>
						<div className="event-comp-detail">
							<img
								src={upcomingEvent.company_logo}
								alt={`event.company_name`}
								className="event-compnay-logo"
							/>
							<p className="event-comp-name">{upcomingEvent.company_name}</p>
						</div>
						<InterviewStepper interview_step={upcomingEvent.interview_step} />
						<div>
							<div className="event-date-time">
								<p>{upcomingEvent.date}</p>
								<p>{upcomingEvent.time}</p>
							</div>
							<p className="txt-xl event-name">
								{upcomingEvent.interview_role}
							</p>
						</div>
						<p>{upcomingEvent.job_description}</p>
					</div>
				</div>
			)}
		</div>
	);
};
