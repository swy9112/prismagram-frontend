import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartEmpty, HeartFull, Comment as CommentIcon } from "../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  user-select: none;
  margin-bottom: 25px;

  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

const File = styled.div`
  position: absolute;
  top: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  display: inline-block;
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Caption = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const Timestamp = styled.span`
  font-weight: 300;
  text-decoration: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin-top: 10px 0;
  padding: 10px 0;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  margin: 10px 0;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

const CommentText = styled.span`
  font-size: 14px;
`;

export default ({
  user: { username, avatar },
  location,
  files,
  caption,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => <File key={file.id} id={file.id} url={file.url} showing={index === currentItem} />)}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
        <CommentIcon />
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <Caption>{caption}</Caption>
      {comments && (
        <Comments>
          {comments.map(comment => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              <CommentText>{comment.text}</CommentText>
            </Comment>
          ))}
          {selfComments.map(comment => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              <CommentText>{comment.text}</CommentText>
            </Comment>
          ))}
        </Comments>
      )}
      <Timestamp>{createdAt}</Timestamp>
      <Textarea
        placeholder={"Add a comment..."}
        value={newComment.value}
        onChange={newComment.onChange}
        onKeyPress={onKeyPress}
      />
    </Meta>
  </Post>
);
