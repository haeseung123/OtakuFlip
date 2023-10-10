import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Join from "pages/Join/Join";
import Login from "pages/Login/Login";

const MyView: React.FC = () => {
    return (
        <div>
            <Link to="/Join">회원가입</Link>
            <Link to="/Login">로그인</Link>
            <Routes>
                <Route path="/Join" Component={Join}></Route>
                <Route path="/Login" Component={Login}></Route>
            </Routes>
        </div>
    )
}

export default MyView

