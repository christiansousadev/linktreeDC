import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
      <div>
        <h1>Não encontrada</h1>
        <Link to="/">Voltar para home</Link>
      </div>
    );
  }

  