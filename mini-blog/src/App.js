import React, {useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import data from './data.json'

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    localStorage.setItem('user', JSON.stringify(data))
    useEffect(()=> {localStorage.setItem('user', JSON.stringify(data))},[])
    // localStorage.setItem('user', JSON.stringify(data))

    return (
        // React DOM Router를 이용하여 path 설정
        <BrowserRouter>
            <MainTitleText>KaKao Academy of Gachon Univ. </MainTitleText>
            {/* route path에 명시된 링크로 이동 시 route의 내용만 변경해줍니다. */}
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
