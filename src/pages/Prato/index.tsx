import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import roupas from 'data/roupas.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
  // console.log(useLocation());
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = roupas.find(item => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }
  return (
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>

      <section className={styles.container}>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>

        <div>
          <h1 className={styles.titulo}>
            {prato.title}
          </h1>
          <div className={styles.conteudo}>
            <p className={styles.conteudo__descricao}>
              {prato.description}
            </p>
          </div>
          <TagsPrato {...prato} />
        </div>
      </section>
    </PaginaPadrao>
  );
}