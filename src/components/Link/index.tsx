import React from "react";
import { Icons } from "../Icons";
import { Container } from "./styles";
import { LinksProps } from "./types";
import { useNavigate } from "react-router-dom";

export const Link = ({ title, to, icon, iconPosition }: LinksProps) => {
  const isExternalLink = to.includes("http");
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isExternalLink) {
      event.preventDefault();
      navigate(to);
    }
  };

  return (
    <Container
      href={isExternalLink ? to : ""}
      target={isExternalLink ? "_blank" : ""}
      onClick={handleClick}
    >
      {iconPosition === "left" && <Icons icon={icon} />}
      {title}
      {iconPosition === "right" && <Icons icon={icon} />}
    </Container>
  );
};
