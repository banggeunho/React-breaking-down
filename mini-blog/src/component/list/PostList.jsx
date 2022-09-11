import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
// Data.json과 클릭 시 해당 id페이지로 이동하는 콜백함수를 props로 받아왔습니다.
function PostList(props) {
    // posts와 onClickItem을 받아왔슴다..
    const { posts, onClickItem } = props;
    console.log(posts);
    
    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    // postlistitem에 post의 key, post내용, onclick 함수를 상속해줍니다.
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post); // post를 넣어주면 post.id 링크로 이동합니다.
                            // MainPage에서 onClickItem 선언 시 post/${props.id}로 이동하라고 명시
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;
