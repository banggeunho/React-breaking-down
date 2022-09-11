import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    // useParams을 통해 현재링크의 post/{?} 마지막 파라미터를 받아옵니다.
    const { postId } = useParams();
    const data = JSON.parse(localStorage.getItem('user'));
    
    // data.json에서 위에서 받아온 param의 값과 같은 것이 있는지 없는지 확인
    // 있으면 true, 없으면 false 리턴
    const post = data.find((item) => {
        return item.id == postId;
    });

    // comment를 state로 선언
    const [comment, setComment] = useState("");

    const writeComment = comment =>{
        console.log('댓글 추가 함수 호출')

        // 수정 및 추가
        post.comments.push(
            {id: post.comments.length > 0 ? post.comments[post.comments.length-1].id+1 : post.id*10+1,
            content : comment,
            }
        )

        // json에서 교체
        data.find((item) => {
            return item.id == post.id;
        }).comments = post.comments;

        // update
        localStorage.setItem('user', JSON.stringify(data))
    }

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                {/* 댓글 작성란에 텍스트 작성 시 state를 변경하여 글자입력마다 계속 렌더링 */}
                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                
                {/* 댓글 작성하기 버튼 클릭 시 이전 페이지로 이동 */}
                {/* onClick 함수 호출 시 json에 내용을 추가시켜 다시 렌더링 시켜주면 댓글이 추가되는 것을 만들 수 있을 듯  */}
                <Button
                    title="댓글 작성하기"
                    onClick={() => {
                        writeComment(comment);
                        setComment("");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
