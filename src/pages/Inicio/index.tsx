import roupas from 'data/roupas.json';
import styles from './Inicio.module.scss';
import stylesThema from 'styles/Tema.module.scss';
import nossacasa from 'assets/nossa_casa.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';
import Botao from 'components/Botao';
import Wrap from 'components/Wrap';

export default function Inicio() {
  let pratosRecomedados = [...roupas];
  pratosRecomedados = pratosRecomedados.sort(() => .5 - Math.random()).splice(0, 3);

  const navigate = useNavigate();

  function redirecionaPrato(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <div className={styles.banner}>
        <Wrap>
          <div className={styles.banner__flutuante}>
            <h1 className={styles.banner__titulo}>
              Looks para o
              <span className={styles.banner__destaque}> fim do ano</span>
            </h1>
            <p className={styles.banner__intro}>Escolha seu look de praia</p>
            <Botao>Comprar Agora!</Botao>
          </div>
        </Wrap>
      </div>

      <Wrap>
        <h3 className={stylesThema.titulo}>
          Na moda no momento!
        </h3>
        <div className={styles.recomendados}>
          {pratosRecomedados.map(item => (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <div>
                <h4 className={styles.recomendado__titulo}>{item.title}</h4>
                <div className={styles.recomendado__infos}>
                  <span className={styles.recomendado__qtd}>Qts: {item.qtd}</span>
                  <span className={styles.recomendado__price}>R$: {item.price}</span>
                </div>
              </div>
              <button
                className={styles.recomendado__botao}
                onClick={() => { redirecionaPrato(item); }}
              >
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}