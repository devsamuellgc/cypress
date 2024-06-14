import { useState } from "react";
import { Input } from "./Input";

export function Form() {
  const [user, setUser] = useState({ name: "", password: "" });

  function handleChange(e) {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div>
      <form>
        <Input
          label="Nome"
          name="name"
          type="text"
          placeholder="Nome"
          onChange={handleChange}
          value={user.name}
          data-cy="input-name"
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
          value={user.password}
          data-cy="input-password"
        />
        <button data-cy="btn-submit">Enviar</button>
      </form>
    </div>
  );
}
