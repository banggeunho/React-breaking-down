import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
// import data from "../../data.json";

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

// 글 작성 페이지
function PostWritePage(props) {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('user'))
    console.log('PostWritePage 렌더링');

    // title과 content를 useState를 사용하여 state로 선언해줍니다.
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 불러온 json에 작성한 글의 데이터를 추가해주는 함수 작성
    const writePost = ({title, content}) => {
        data.push(
            {
                id : data[data.length-1].id + 1,
                title : title,
                content : content,
                comments : []
            }
        )
        // localStorage에 저장합니다.
        // localStorage는 개발마모드 Applicants탭에서 볼 수 있습니다.
        localStorage.setItem('user', JSON.stringify(data));
        }

    // onChange는 해당 textInput에 값이 변경될때마다 state를 변경해주고 있으므로
    // 한단어라도 작성하거나 지울경우에도 계속 렌더링됩니다.
    // 작성하기 버튼 클릭 시 단순 navigate를 통해 메인 페이지로 이동해주는 함수를 호출합니다.
    // 즉, 글 작성 페이지는 단순 껍데기 페이지~
    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <Button
                    title="글 작성하기"
                    onClick={() => {
                        writePost({title, content})
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
