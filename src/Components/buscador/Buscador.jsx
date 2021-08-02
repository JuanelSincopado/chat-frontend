const Buscador = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="buscador__form" onSubmit={submit}>
      <input
        type="text"
        className="buscador__input"
        placeholder="Buscar Amigos..."
      />
      <i aria-hidden className="fas fa-search"></i>
    </form>
  );
};

export default Buscador;
