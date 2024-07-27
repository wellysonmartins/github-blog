/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "../../../../components/Link";
import { Tag } from "../../../../components/Tag";
import { useGithub } from "../../../../hooks/useGithub";
import {
  Content,
  ContentDescription,
  ContentIcon,
  ContentTitle,
} from "../../../../templates/HeaderBox/styles";
import { Container } from "./styles";
import { UserData } from "../../../../hooks/types";
import { Skeleton } from "../../../../components/Skeleton";

export const Profile = () => {
  const { getUser } = useGithub();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser({
        username: "wellysonmartins",
      });
      setUser(data);
    };

    setTimeout(() => fetchData(), 500);
  }, []);

  return (
    <Container>
      <img src="" alt="" />

      <Content>
        {user ? (
          <>
            <ContentTitle>
              {user.name}
              <Link
                to={user.html_url}
                title="Github"
                icon="arrowUpFromSquare"
                iconPosition="right"
              />
            </ContentTitle>

            <ContentDescription>{user.bio}</ContentDescription>
            <ContentIcon>
              <Tag title={user.login} icon="github" />
              <Tag title={user.company || "-"} icon="building" />
              <Tag title={`${user.followers} seguidores`} icon="userGroup" />
            </ContentIcon>
          </>
        ) : (
          <Content>
            <ContentTitle>
              <Skeleton width="100%" height="38px" />
            </ContentTitle>
            <ContentDescription>
              <Skeleton width="100%" height="26px" />
            </ContentDescription>
            <ContentIcon>
              <Skeleton width="145px" height="26px" />
              <Skeleton width="145px" height="26px" />
              <Skeleton width="145px" height="26px" />
            </ContentIcon>
          </Content>
        )}
      </Content>
    </Container>
  );
};
