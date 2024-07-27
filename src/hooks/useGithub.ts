import { api } from "../lib/axios";
import { GetIssuesProps, GetUserProps, IssueData, UserData } from "./types";

export const useGithub = () => { 

  const getUser = async ({ username }: GetUserProps) => {
    const response = await api.get(`/users/${username}`);
    return response.data as UserData;
  };

  const getIssues = async ({username, repo}: GetIssuesProps) => {
    const response = await api.get(`repos/${username}/${repo}/issues`);
    return response.data as IssueData[]
  }

  return {
    getUser,  
    getIssues
  };
};
