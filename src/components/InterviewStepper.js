import React from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";

export const InterviewStepper = ({ interview_step }) => {
	return (
		<div>
			<Stepper
				steps={[
					{ title: "Applied Successfully" },
					{ title: "Technical Round 1" },
					{ title: "Technical Round 2" },
					{ title: "Hiring Manager Round" },
					{ title: "Got an offer" },
					{ title: "Oriantation" },
				]}
				activeStep={interview_step}
				completeColor="#FFC107"
				size={50}
				titleFontSize={18}
				completeTitleColor="#FFC107"
			/>
		</div>
	);
};
