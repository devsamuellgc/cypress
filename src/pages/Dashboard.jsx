import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main>
      <div>
        <Link data-cy="link-home" to="/">
          Sair
        </Link>
      </div>
      <h1 data-cy="title">Página inicial</h1>
    </main>
  );
}
/**
 * Criar um teste que vai sair da home, clicar no link para o login
 * realizar o login corretamente
 * acessa a página de dashboard
 * valida se está na página correta
 * valida se existe um título com o Página inicial
 */