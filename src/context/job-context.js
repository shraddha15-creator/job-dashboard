import { createContext, useContext, useState } from "react";
import { ApplicationsDB } from "../database/applicationsDB";
import { jobsDB } from "../database/jobsDB";

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
	const jobs = jobsDB;
	const applications = ApplicationsDB;
	return (
		<JobsContext.Provider value={{ jobs, applications }}>
			{children}
		</JobsContext.Provider>
	);
};

export const useJobs = () => useContext(JobsContext);
