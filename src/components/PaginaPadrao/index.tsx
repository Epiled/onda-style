import styles from './PaginaPadrao.module.scss';
import stylesThema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';
import Wrap from 'components/Wrap';

export default function PaginaPadrao({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <Wrap>
          <div className={styles.header__text}>
            A sua casa de verão neste verão!
          </div>
        </Wrap>
      </header>
      <div className={stylesThema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}