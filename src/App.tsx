import { LembreteEntrada } from "./components/LembreteEntrada";
import { LembreteLista } from "./components/LembreteLista";

export const App = () => {

  const tarefas = [
    {
        id: 1, 
        titulo: "Preparar Aula de Programação"
    }, 
    {
        id: 2, 
        titulo: "Fazer Feira"
    }, 
    {
        id: 3,
        titulo: "Preparar marmitas"
    }
  ]

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <LembreteLista tarefas={ tarefas }/>
          <LembreteEntrada />
        </div>
      </div>
    </div>
  );
};
