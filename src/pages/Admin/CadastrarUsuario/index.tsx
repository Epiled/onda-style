import Botao from 'components/Botao';
import styles from './CadastrarUsuario.module.scss';

export default function CadastrarUsuario() {
  return (
    <div className={styles.login}>
      <div className={styles.login__flutuante}>
        <h1 className={styles.login__titulo}>
          Cadastrar Novo Colaborador
        </h1>

        <form className={styles.login__form}>
          <label className={styles.login__label} htmlFor="">
            E-mail:
            <input className={styles.login__input} type="text" />
          </label>

          <Botao>
            Logar
          </Botao>
        </form>
      </div>
    </div>
  );
}