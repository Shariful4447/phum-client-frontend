import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "ami123457",
    },
  });
  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    toast.loading("Logging in...");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      console.log(user);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("User logged in successfully");
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong");
    }
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
