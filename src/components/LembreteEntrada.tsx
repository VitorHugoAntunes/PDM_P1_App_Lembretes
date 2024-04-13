
import { useState, ChangeEvent, FormEvent } from 'react';
import { LembreteLista } from './LembreteLista';

type Tarefa = {
  id: number;
  titulo: string;
};


export const LembreteEntrada = () => {
  const [novoLembrete, setNovoLembrete] = useState<string>(''); 
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const criarTarefa = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adicionarLembrete(novoLembrete); 
    setNovoLembrete('');
  };

  const tarefa = (event: ChangeEvent<HTMLInputElement>) => {
    setNovoLembrete(event.target.value);
  };

  const adicionarLembrete = (novoLembrete: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(), 
      titulo: novoLembrete,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <div>
      <LembreteLista tarefas={tarefas} />
      <form className="w-100 d-flex flex-column" onSubmit={criarTarefa}>
        <input
          type="text"
          placeholder="Digite seu novo lembrete"
          className="border border-secondary-subtle rounded p-2"
          value={novoLembrete}
          onChange={tarefa}
        />
        <button
          type="submit"
          className="mt-2  bg-primary rounded border border-primary p-2 text-light fw-bold"
        >
          OK
        </button>
      </form>
    </div>
  );
};

