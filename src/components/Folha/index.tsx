import classNames from 'classnames';
import styles from './Folha.module.scss';

interface IFolha {
  children: React.ReactNode;
  className?: string
}

export default function Folha({ children, className }: IFolha) {
  return (
    <div className={classNames(
      styles.folha,
      className
    )}>
      {children}
    </div>
  );
}