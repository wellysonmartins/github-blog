/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGithub } from "../../hooks/useGithub";
import { BaseContainer } from "../../templates/Container";
import { HeaderBox } from "../../templates/HeaderBox";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { SearchData } from "./components/SearchInput/types";
import { PostContainer, SearchContainer } from "./styles";
import { IssueData } from "../../hooks/types";
import { Skeleton } from "../../components/Skeleton";

export const Home = () => {
  const { getIssues } = useGithub();
  const handleSearch = (data: SearchData) => {
    console.log(data);
  };

  const [issues, setIssues] = useState<IssueData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIssues({
        username: "wellysonmartins",
        repo: "github-blog",
      });
      setIssues(data);
    };

    setTimeout(() => fetchData(), 500);
  }, []);

  return (
    <BaseContainer>
      <HeaderBox>
        <Profile />
      </HeaderBox>
      <SearchContainer>
        <div>
          <span>Publicações</span>
          {issues && (
            <span>
              {issues?.length}
              {issues?.length > 1 ? " publicações" : " publicação"}
            </span>
          )}
          {!issues && <Skeleton width="85px" height="19px" />}
        </div>

        <SearchInput handleSearch={handleSearch} />
      </SearchContainer>

      <PostContainer>
        {issues && issues.map((el) => <PostCard key={el.id} data={el} />)}
        {!issues && (
          <>
            <Skeleton width="100%" height="222px" />
          </>
        )}
      </PostContainer>
    </BaseContainer>
  );
};
