import { Prato } from 'types/Prato';
import styles from './TagsPrato.module.scss';
import classNames from 'classnames';

export default function TagsPrato({ category, size, qtd, price }: Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>
        {category.label}
      </div>
      <div className={styles.tags__qtdpessoas}>
        Unidade{qtd === 1 ? '' : 's'} {qtd}
      </div>
      <div className={styles.tags__valor}>
        R$ {price.toFixed(2)}
      </div>
    </div>
  );
}