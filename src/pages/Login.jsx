import { useState } from "react";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setLogin((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit() {
    return navigate("/");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="shadow rounded-md flex flex-col gap-10 p-8 h-fit w-fit">
        <h1 className="text-center">Login</h1>
        <div>
          <Input
            label="E-mail"
            name="email"
            placeholder="Seu email"
            type="email"
            value={login.email}
            data-cy="input-email"
            onChange={handleChange}
          />
          <Input
            label="Senha"
            name="password"
            placeholder="Sua senha"
            type="password"
            value={login.password}
            data-cy="input-password"
            onChange={handleChange}
          />
        </div>
        <Button
          data-cy="btn-submit"
          isDisabled={login.password === "" || login.email === ""}
          onClick={handleSubmit}
          type="primary"
          value="Entrar"
        />
      </form>
    </div>
  );
}
