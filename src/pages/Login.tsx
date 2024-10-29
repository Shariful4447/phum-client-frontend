import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "ami123457",
    },
  });
  const [login, { data, error }] = useLoginMutation();
  const onSubmit = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    login(userInfo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")}></input>
      </div>
      <div>
        <label htmlFor="password">PASSWORD:</label>
        <input type="text" id="password" {...register("password")}></input>
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
