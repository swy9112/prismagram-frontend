import React from "react";
import styled from "styled-components";
import FatText from "../FatText";

const Post = styled.div``;

const Header = styled.header``;

const UserColumn = styled.div``;

const Location = styled.span``;

export default ({ user: { username }, location }) => (
  <Post>
    <Header>
      <UserColumn>
        <FatText text={username} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
  </Post>
);
