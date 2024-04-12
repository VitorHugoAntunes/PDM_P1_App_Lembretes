export const LembreteEntrada = () => {
  return (
    <div>
      <form className="w-100 d-flex flex-column">
        <input
          type="text"
          placeholder="Digite seu novo lembrete"
          className="border border-secondary-subtle rounded p-2"
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
