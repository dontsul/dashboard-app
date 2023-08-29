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
import { fetchSignup } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const CustomRegistrationForm = (props) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(fetchSignup({ ...data }))
      .unwrap()
      .then(() => {
        reset();
        navigate("/login");
      });
  };
  return (
    <StyledCustomForm {...props} onSubmit={handleSubmit(onSubmit)}>
      <ForwardedInput mb="16px" placeholder="Name" {...register("name")} />
      <ForwardedInput mb="16px" placeholder="Email" {...register("email")} />
      <ForwardedInput
        mb="48px"
        placeholder="Password"
        {...register("password")}
      />
      <Button bg="is" mb="48px" type="submit">
        Create account
      </Button>
      <Flex justify="center" gap="8px">
        <CustomSpan>Or</CustomSpan>
        <RouterLink to={`/login`}>Log in</RouterLink>
      </Flex>
    </StyledCustomForm>
  );
};
