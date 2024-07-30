export interface GetUserProps {
  username: string
}

export interface GetIssuesProps extends GetUserProps {  
  q?: string
  repo: string  
}

export interface GetIssueProps extends GetIssuesProps {
  issueNumber: string
}

export interface UserData {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number
  html_url: string
}

export interface IssueData {
  id: number
  title: string;
  body: string;
  created_at: Date;
  number: number
}