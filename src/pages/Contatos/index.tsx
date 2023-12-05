import Botao from 'components/Botao';
import styles from './Contatos.module.scss';
import Input from 'components/Input';
import Folha from 'components/Folha';

export default function Contatos() {
  return (
    <div className={styles.contatos}>
      <div className={styles.contatos__head}>
        <h1>Saiba como nos contatar</h1>
        <div className={styles.contatos__intro}>
          <p>Vamos ficar felizes em conhece-lo</p>
        </div>
      </div>
      <Folha className={styles.contatos__folha}>
        <h2>Preencha nosso formulário</h2>

        <form className={styles.contatos__formulario} action="">
          <Input etiqueta='Nome' dica='João Silva' />
          <Input etiqueta='E-mail' tipoIpt='email' dica='exemplo@gmail.com' />
          <Input etiqueta='Assunto' dica='Coleçoes que gostaria' />

          <label
            htmlFor=""
            className={styles.contatos__etq}
          >
            Escreva sua mensagem
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </label>

          <Botao>Enviar!</Botao>
        </form>
      </Folha>
    </div>
  );
}