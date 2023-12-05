import styles from './Botao.module.scss';

interface Props {
  children: React.ReactNode 
}

export default function Botao({ children }: Props) {
  return (
    <button className={styles.botao}>
      {children}
    </button>
  );
}