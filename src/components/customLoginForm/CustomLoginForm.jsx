import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button/Button";
import { Flex } from "../flex/Flex";
import { CustomSpan } from "../customSpan/CustomSpan";
import { RouterLink } from "../routerLink/RouterLink";
import { ForwardedInput } from "../input/Input";
import { StyledCustomForm } from "../../styles/styledCustomForm";
import { useDispatch } from "react-redux";
import { fetchSigin } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const CustomLoginForm = (props) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(fetchSigin({ ...data }))
      .unwrap()
      .then(() => {
        reset();
        navigate("/app/dashboard");
      });
  };
  return (
    <StyledCustomForm {...props} onSubmit={handleSubmit(onSubmit)}>
      <ForwardedInput mb="16px" placeholder="Email" {...register("email")} />
      <ForwardedInput
        mb="48px"
        placeholder="Password"
        {...register("password")}
      />
      <Button bg="is" mb="48px">
        Log in
      </Button>
      <Flex justify="center" gap="8px">
        <CustomSpan>Or</CustomSpan>
        <RouterLink to={`/registration`}>Sign up</RouterLink>
      </Flex>
    </StyledCustomForm>
  );
};
