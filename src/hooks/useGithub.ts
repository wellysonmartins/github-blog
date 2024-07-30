import { api } from "../lib/axios";
import { GetIssueProps, GetIssuesProps, GetUserProps, IssueData, UserData } from "./types";

export const useGithub = () => { 

  const getUser = async ({ username }: GetUserProps) => {
    const response = await api.get(`/users/${username}`);
    return response.data as UserData;
  };

  const getIssues = async ({username, repo, q}: GetIssuesProps) => {
    const response = await api.get(`/search/issues?q=${q || ""}%20repo:${username}/${repo}`);
    return response.data.items as IssueData[]
  }

  const getIssue = async ({issueNumber, username, repo}: GetIssueProps) => {
    const response = await api.get(`/repos/${username}/${repo}/issues/${issueNumber}`);
    return response.data as IssueData
  }

  return {
    getUser,  
    getIssues,
    getIssue
  };
};
