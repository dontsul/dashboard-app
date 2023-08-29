import { Flex } from "../../components/flex/Flex";
import { AuthPage } from "../../components/authPage/AuthPage";
import { Title } from "../../components/title/Title";
import { Paragraph } from "../../components/paragraph/Paragraph";
import { CustomLoginForm } from "../../components/customLoginForm/CustomLoginForm";
export const Login = () => {
  return (
    <AuthPage>
      <Flex direction="column" content="center">
        <Title mb="8px" fontSize="48px">
          Welcome back
        </Title>
        <Paragraph color="#9496A6" mb="48px" fontSize="15px">
          Welcome back! Please enter your details
        </Paragraph>
        <CustomLoginForm />
      </Flex>
    </AuthPage>
  );
};
