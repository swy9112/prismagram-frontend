import React from "react";
import styled from "styled-components";
import Post from "../Components/Post";

// const FEED_QUERY = gql`
//   {
//     seeFeed {
//       id
//       location
//       caption
//       user {
//         id
//         avatar
//         username
//       }
//       files {
//         id
//         url
//       }
//       likeCount
//       isLiked
//       comments {
//         id
//         text
//         user {
//           id
//           username
//         }
//       }
//       createdAt
//     }
//   }
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

export default () => {
  //const { data, loading } = useQuery(FEED_QUERY);
  const feed = [
    {
      id: 1,
      location: "Seoul",
      caption: "hello",
      user: {
        id: 1,
        avatar: "https://a.cdn-hotels.com/gdcs/production47/d1059/04077388-e2a5-4952-88d6-4cd6ffe07710.jpg",
        username: "nanpok"
      },
      files: [
        {
          id: 1,
          url: "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D"
        }
      ],
      likeCount: 4,
      isLiked: 0,
      comments: [
        {
          id: 1,
          text: "good",
          user: {
            id: 1,
            username: "pokongyee"
          }
        }
      ]
    },
    {
      id: 2,
      location: "Korea",
      caption: "웰시코기",
      user: {
        id: 2,
        avatar: "https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg",
        username: "swl_ee"
      },
      files: [
        {
          id: 2,
          url: "https://img.hankyung.com/photo/202109/99.26479073.1.jpg"
        },
        {
          id: 3,
          url:
            "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG"
        }
      ],
      likeCount: 12,
      isLiked: true,
      comments: [
        {
          id: 2,
          text: "강아지 귀여워요",
          user: {
            id: 2,
            username: "nanpok"
          }
        }
      ]
    }
  ];
  return (
    <Wrapper>
      {feed.map(post => (
        <Post
          key={post.id}
          id={post.id}
          location={post.location}
          caption={post.caption}
          user={post.user}
          files={post.files}
          likeCount={post.likeCount}
          isLiked={post.isLiked}
          comments={post.comments}
        />
      ))}
    </Wrapper>
  );
};
