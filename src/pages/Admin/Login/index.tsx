import Botao from 'components/Botao';
import styles from './Login.module.scss';
import Input from 'components/Input';
import Folha from 'components/Folha';

export default function Login() {
  return (
    <div className={styles.login}>
      <Folha >
        <h1 className={styles.login__titulo}>
          Login
        </h1>

        <form className={styles.login__form}>
          <Input etiqueta='E-mail' tipoIpt='email' dica='exemplo@gmail.com' />
          <Input etiqueta='Senha' tipoIpt='password' dica='*******' />

          <Botao>
            Logar
          </Botao>
        </form>
      </Folha>
    </div>
  );
}