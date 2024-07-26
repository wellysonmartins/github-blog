import { BaseContainer } from "../../templates/Container";
import { HeaderBox } from "../../templates/HeaderBox";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { SearchData } from "./components/SearchInput/types";
import { PostContainer, SearchContainer } from "./styles";

export const Home = () => {
  const handleSearch = (data: SearchData) => {
    console.log(data);
  };

  return (
    <BaseContainer>
      <HeaderBox>
        <Profile />
      </HeaderBox>
      <SearchContainer>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>

        <SearchInput handleSearch={handleSearch} />
      </SearchContainer>

      <PostContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostContainer>
    </BaseContainer>
  );
};
