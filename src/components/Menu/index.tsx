import styles from './Menu.module.scss';
// import { ReactComponent as Logo } from 'assets/logo.svg';
import Logo from 'assets/logo.webp';
import { Link } from 'react-router-dom';
import BotaoHamburguer from './BotaoHamburguer';
import { useState } from 'react';
import classNames from 'classnames';
import Input from 'components/Input';

export default function Menu() {
  const rotas = [
    {
      label: 'Início',
      to: '/',
    }, {
      label: 'Roupas',
      to: '/roupas',
    }, {
      label: 'Sobre',
      to: '/sobre',
    }, {
      label: 'Contatos',
      to: '/contatos',
    }
  ];

  const [menu, setMenu] = useState(false);

  return (
    <nav className={styles.menu}>

      <img width={'200px'} src={Logo} alt="" />
      <BotaoHamburguer menu={menu} setMenu={setMenu} />
      <Input className={'etq__menu'} order={2} tipoIpt='text' dica='O quê esta buscado?' />

      <ul className={classNames({
        [styles.menu__list]: true,
        [styles['menu__list--ativo']]: menu
      })}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>);
}