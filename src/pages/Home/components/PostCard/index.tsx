import { useNavigate } from "react-router-dom";
import { formatRelativeTime } from "../../../../utils/formatter";
import { truncateText } from "../../../../utils/truncateText";
import { Container, PostDescription, PostTitle } from "./styles";
import { PostCardProps } from "./types";

export const PostCard = ({ data }: PostCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${data.number}`);
  };
  return (
    <Container onClick={handleClick}>
      <PostTitle>
        <span>{data.title}</span>
        <span>{formatRelativeTime(data.created_at)}</span>
      </PostTitle>

      <PostDescription>{truncateText(data.body, 181)}</PostDescription>
    </Container>
  );
};
