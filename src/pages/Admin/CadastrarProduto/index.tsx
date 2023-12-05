import styles from './CadastrarProduto.module.scss';
import Botao from 'components/Botao';

export default function CadastrarProduto() {
  return (
    <div className={styles.login}>
      <div className={styles.login__flutuante}>
        <h1 className={styles.login__titulo}>
          Cadastrar Novo Produto
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