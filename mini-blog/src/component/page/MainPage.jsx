import React,{useEffect, useMemo} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../data.json';

// UI 디자인 부분
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

function MainPage(props) {
    // 해당 링크를 이동하라는 함수입니다.
    const navigate = useNavigate();
    const jsonData = JSON.parse(localStorage.getItem('user'))

    // Wrapper로 감싸주고, 글 작성하기 버튼과, PostList를 출력합니다.
    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />
                
                {/* json에서 data를 가져와 PostList로 보내줍니다. */}
                <PostList
                    posts={jsonData}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                        // string에서 변수 사용 시 $표시를 해주고 감싸줘야함.
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
