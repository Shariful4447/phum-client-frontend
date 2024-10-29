import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id"></input>
      </div>
      <div>
        <label htmlFor="password">PASSWORD:</label>
        <input type="text" id="password"></input>
      </div>
    </form>
  );
};

export default Login;
