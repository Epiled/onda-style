import classNames from 'classnames';
import styles from './Input.module.scss';

interface IInput {
  variation?: string,
  tipoIpt?: 'text' | 'email' | 'password',
  dica: string,
  etiqueta?: string,
  className?: string,
  order?: number
}

export default function Input({ tipoIpt, dica, etiqueta, className, order }: IInput) {
  return (
    <label
      className={classNames(
        styles.etq,
        styles[`${className}`]
      )}
      style={order ? { order } : undefined}
      htmlFor=""
    >
      {etiqueta}

      <input
        className={classNames(
          styles.etq__ipt,
          styles.variation
        )}
        type={tipoIpt || 'text'}
        placeholder={dica}
      />

    </label>
  );
}