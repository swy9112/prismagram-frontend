import React, { useContext } from "react";
import styled from "styled-components";
import { Helmet } from "rl-react-helmet";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";
import { LoginContext } from "../../Components/App";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto 100px;
`;

const HeaderColumn = styled.div``;

const UserNameRow = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 26px;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0;
`;

const Count = styled.li`
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 14px;
`;

const Bio = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
  gap: 24px;
`;

const ProfilePresenter = () => {
  const logout = useContext(LoginContext);
  const onLogout = () => {
    logout();
  };
  const user = {
    id: 1,
    caption: "hello",
    logUserOut: true,
    avatar: "https://a.cdn-hotels.com/gdcs/production47/d1059/04077388-e2a5-4952-88d6-4cd6ffe07710.jpg",
    username: "nanpok",
    posts: [
      {
        files: [
          {
            id: 1,
            url: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D"
          }
        ]
      },
      {
        files: [
          {
            id: 2,
            url: "https://cdn.pixabay.com/photo/2015/03/12/04/43/landscape-669619_960_720.jpg"
          }
        ]
      },
      {
        files: [
          {
            id: 3,
            url:
              "http://maple9192.cafe24.com/pages/upload/board/m212/1612/08/20161208_662b11f10ae4946e7c1008da14d7fa4c.jpg"
          }
        ]
      },
      {
        files: [
          {
            id: 4,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_z1C9EJuQJgEmh7yRraaZGc0tnMjrzGhaw&usqp=CAU"
          }
        ]
      },
      {
        files: [
          {
            id: 5,
            url: "https://vrthumb.imagetoday.co.kr/2020/11/11/tid292t002803.jpg"
          }
        ]
      },
      {
        files: [
          {
            id: 6,
            url:
              "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/aYgW/image/0XjnP-dFfoNchvBU81_hNDt_eXA.jpg"
          }
        ]
      },
      {
        files: [
          {
            id: 7,
            url: "https://cdn.crowdpic.net/detail-thumb/thumb_d_4E783AC9977397A9DB43E3AA4EA06E2F.jpeg"
          }
        ]
      }
    ],
    postsCount: 1,
    followersCount: 1,
    followingCount: 1,
    fullName: "nanpok_ong",
    bio: "날씨가 너무 덥다"
  };
  return (
    <Wrapper>
      <Helmet>
        <title>{user.username}</title>
      </Helmet>
      <Header>
        <HeaderColumn>
          <Avatar size="lg" url={user.avatar} />
        </HeaderColumn>
        <HeaderColumn>
          <UserNameRow>
            <UserName>{user.username}</UserName>
          </UserNameRow>
          <Button onClick={onLogout} text="Log Out" />
          <Counts>
            <Count>
              <FatText text={String(user.postsCount)} /> posts
            </Count>
            <Count>
              <FatText text={String(user.followersCount)} /> followers
            </Count>
            <Count>
              <FatText text={String(user.followingCount)} /> following
            </Count>
          </Counts>
          <FullName text={user.fullName} />
          <Bio>{user.bio}</Bio>
        </HeaderColumn>
      </Header>
      <Posts>
        {user.posts &&
          user.posts.map(post => (
            <SquarePost
              key={post.id}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              files={post.files[0]}
            />
          ))}
      </Posts>
    </Wrapper>
  );
};

export default ProfilePresenter;
