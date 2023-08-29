import { Flex } from "../../components/flex/Flex";
import { AuthPage } from "../../components/authPage/AuthPage";
import { Title } from "../../components/title/Title";
import { Paragraph } from "../../components/paragraph/Paragraph";
import { CustomRegistrationForm } from "../../components/customRegistrationForm/CustomRegistrationForm";

export const Registration = () => {
  return (
    <AuthPage>
      <Flex direction="column" align="center" width="100%">
        <Title mb="8px" fontSize="48px">
          Welcome
        </Title>
        <Paragraph color="#9496A6" mb="48px" fontSize="15px">
          Welcome! Please enter your details
        </Paragraph>
        <CustomRegistrationForm />
      </Flex>
    </AuthPage>
  );
};
