import { SkeletonContainer } from "./styles";
import { SkeletonProps } from "./types";

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return <SkeletonContainer style={{ width, height }} />;
};
