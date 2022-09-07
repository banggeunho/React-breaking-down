import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

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

// PostViewPage에서 data.json의 comment에 대한 내용들을 상속받습니다.
// 모든 comment들을 iteration하면서 CommentListItem을 호출합니다.
function CommentList(props) {
    const { comments } = props;
    
    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return <CommentListItem key={comment.id} comment={comment} />;
            })}
        </Wrapper>
    );
}

export default CommentList;
