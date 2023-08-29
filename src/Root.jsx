import { GlobalReset } from "./components/globalReset/GlobalReset";
import { GloablStyle } from "./components/globalStyle/GlobalStyle";
import { Outlet } from "react-router-dom";
import { Flex } from "./components/flex/Flex";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      navigate("/app/dashboard");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Flex>
      <GlobalReset />
      <GloablStyle />
      <Outlet />
      <Toaster position="top-center" />
    </Flex>
  );
};
