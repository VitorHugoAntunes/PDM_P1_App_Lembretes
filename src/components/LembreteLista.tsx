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
    <div className="mb-2">
      <ul className="card list-group rounded border p-2">
        {tarefas.map((tarefa) => (
          <li 
            className="card-body list-group-item text-center m-2 rounded border p-2" 
            key= {tarefa.id}
            onClick={() => removerTarefa(tarefa.id)}>
            {tarefa.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
};
