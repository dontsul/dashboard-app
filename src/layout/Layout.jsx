import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Aside } from "../components/aside/Aside";
import { Main } from "../components/main/Main";
import { Header } from "../components/header/Header";
import { useEffect } from "react";
import { getUser } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDashboard } from "../features/dashboardSlice";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 84px 1836px;
  width: 1920px;
`;

export const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getUser());
      dispatch(fetchDashboard());
    } else {
      navigate("/login");
    }
  }, [navigate, dispatch]);

  return (
    <StyledLayout>
      <Aside />
      <Main>
        <Header />
        <Outlet />
      </Main>
    </StyledLayout>
  );
};
