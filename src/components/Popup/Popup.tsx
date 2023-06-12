import classes from './Popup.module.css';

const Popup = () => {
  return (
    <>
      <h1 className={classes.title}>
        DeleteNonio <span className={classes.version}>v2.1.0</span>
      </h1>
      <h2 className={classes.subTitle}>Remover Nonio popup dos sites</h2>
      <a className={classes.noPadding} target="_blank" href="https://www.buymeacoffee.com/dippas">
        <img
          className={classes.image}
          src="https://cdn.buymeacoffee.com/buttons/lato-black.png"
          alt="Buy me a coffee"
          title="Ajuda a manter o projeto vivo"
        />
      </a>
      <h3>
        <p className={classes.content}>Problemas ou feedback</p>
        <a
          className={classes.link}
          title="Problemas ou feedback"
          target="_blank"
          href="https://github.com/dippas/DeleteNonio/issues"
        >
          Clicar aqui
        </a>
      </h3>
      <h3>
        <p className={classes.content}>Mais informações</p>
        <a
          className={classes.link}
          title="Mais informações"
          target="_blank"
          href="https://github.com/dippas/DeleteNonio"
        >
          Clicar aqui
        </a>
      </h3>
    </>
  );
};

export default Popup;
