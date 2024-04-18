type Tarefa = {
  id: number;
  titulo: string;
};

interface LembreteListaProps {
  tarefas: Tarefa[];
  removerTarefa: (id: number) => void;
}

export const LembreteLista = ({ tarefas, removerTarefa } : LembreteListaProps) => {
  return (
    <div className="mb-2 pt-3 card text-center">
      <h2>Tarefas</h2>
      {
        tarefas.length === 0 ? (
          <div className="p-2">
            <p className="fs-1">🎉</p>
            <p>Que ótimo! Você não tem tarefas a fazer!</p>
          </div>
        )
        :
        (
          <ul className="list-group list-group-flush p-2" style={{border: "none"}}>
            {tarefas.map((tarefa) => (
              <li 
                className="card-body btn btn-light list-group-item m-2 rounded border p-2" 
                key= {tarefa.id}
                onClick={() => removerTarefa(tarefa.id)}>
                  {tarefa.titulo}
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};
