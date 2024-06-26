
import { useState, ChangeEvent, FormEvent } from 'react';
import { LembreteLista } from './LembreteLista';

type Tarefa = {
  id: number;
  titulo: string;
};

export const LembreteEntrada = () => {
  const [novoLembrete, setNovoLembrete] = useState<string>('');
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

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

  const removerTarefa = (id: number) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const criarTarefa = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (novoLembrete === '') {
      return;
    } else {
      adicionarLembrete(novoLembrete);
    }
    setNovoLembrete('');
  };

  const removerTudo = () => {
    setTarefas([]);
  }

  return (
    <div>
      <LembreteLista tarefas={tarefas} removerTarefa={removerTarefa} />
      <form className="w-100 d-flex flex-column" onSubmit={criarTarefa}>
        <input
          type="text"
          placeholder="Digite seu novo lembrete"
          className="mt-4 border border-secondary-subtle rounded p-2"
          style={{ outline: "none" }}
          value={novoLembrete}
          onChange={tarefa}
        />
        <button
          type="submit"
          className="mt-4 btn btn-primary rounded border border-primary p-2 text-light fw-bold"
        >
          OK
        </button>
      </form>
      <div className="w100 d-flex flex-column">
        <button
          className="mt-4 btn btn-danger rounded border border-danger p-2 text-light fw-bold"
          onClick={removerTudo}
        >
          Remover tudo
        </button>

      </div>
    </div>
  );
};

