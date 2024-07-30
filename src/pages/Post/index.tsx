import Markdown from "react-markdown";
import { BaseContainer } from "../../templates/Container";
import { HeaderBox } from "../../templates/HeaderBox";
import { Detail } from "./components/Detail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGithub } from "../../hooks/useGithub";
import { IssueData } from "../../hooks/types";
import { MarkdownContainer } from "./styles";

export const Post = () => {
  const { id } = useParams();
  const { getIssue } = useGithub();
  const [issue, setIssue] = useState<IssueData | null>(null);

  const username = "wellysonmartins";
  const repo = "github-blog";

  const fetchData = async () => {
    setTimeout(async () => {
      const data = await getIssue({
        username,
        repo,
        issueNumber: id as string,
      });
      setIssue(data);
    }, 300);
  };

  const data = issue?.body;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseContainer>
      <HeaderBox>
        <Detail />
      </HeaderBox>

      <MarkdownContainer>
        <Markdown>{data}</Markdown>
      </MarkdownContainer>
    </BaseContainer>
  );
};
