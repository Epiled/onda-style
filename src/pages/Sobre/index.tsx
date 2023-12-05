import stylesThema from 'styles/Tema.module.scss';
import styles from './Sobre.module.scss';

import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';
import Wrap from 'components/Wrap';

const imagens = [massa1, massa2];

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <Wrap>
        <h3 className={stylesThema.titulo}>
          Bem-vindo à Onda Style - O Seu Destino para Estilo à Beira-Mar!
        </h3>

        <p>
          Em nossa loja, mergulhe em um universo de elegância descontraída, onde cada peça é projetada para abraçar o espírito vibrante da praia. Na Onda Style, não estamos apenas oferecendo roupas; estamos proporcionando uma experiência de moda que é tão refrescante quanto uma brisa do oceano.
        </p>

        <div className={styles.sobreNos}>
          <img src={casa} alt="Cada da Aluroni" />

          <div className={styles.sobreNos__texto}>
            <h2>
              Coleções que Cativam:
            </h2>
            <p>
              Explore nossas coleções cuidadosamente selecionadas, cada uma refletindo a essência única da vida à beira-mar. De biquínis e maiôs deslumbrantes a vestidos leves e acessórios encantadores, nossas peças são criadas para tornar cada momento à beira-mar memorável.
            </p>
          </div>
        </div>

        <div className={styles.sobreNos}>
          <img src={casa} alt="Cada da Aluroni" />

          <div className={styles.sobreNos__texto}>
            <h2>
              Tendências Atuais, Estilo Duradouro:
            </h2>
            <p>
              Na Onda Style, buscamos não apenas seguir as últimas tendências, mas também criar estilos atemporais que resistem à passagem do tempo. Nossas roupas de praia são uma fusão perfeita de moda contemporânea e design clássico, garantindo que você se destaque em qualquer areal.
            </p>
          </div>
        </div>

        <div className={styles.sobreNos}>
          <img src={casa} alt="Cada da Aluroni" />

          <div className={styles.sobreNos__texto}>
            <h2>
              Conforto em Cada Detalhe:
            </h2>
            <p>
              Sabemos que o conforto é essencial, especialmente sob o sol tropical. Cada peça em nossa loja é escolhida por sua qualidade excepcional, proporcionando um ajuste confortável que permite que você aproveite cada momento despreocupado.
            </p>
          </div>
        </div>

        <div className={styles.sobreNos}>
          <img src={casa} alt="Cada da Aluroni" />

          <div className={styles.sobreNos__texto}>
            <h2>
              Sustentabilidade à Beira-Mar:
            </h2>
            <p>
              Estamos comprometidos com práticas sustentáveis. Nossas roupas de praia não apenas celebram a natureza, mas também são gentis com ela. Optamos por materiais e processos que minimizam nosso impacto ambiental, para que você possa se sentir bem ao escolher Onda Style.
            </p>
          </div>
        </div>

        <div className={styles.sobreNos}>
          <img src={casa} alt="Cada da Aluroni" />

          <div className={styles.sobreNos__texto}>
            <h2>
              Visite-nos Hoje:
            </h2>
            <p>
              Sinta a areia sob seus pés enquanto explora as últimas tendências em moda de praia na Onda Style. Estamos ansiosos para recebê-lo em nossa loja, onde o estilo encontra a costa e cada compra é uma jornada à beira-mar.
            </p>
            <p>
              Descubra a moda de praia que faz você brilhar. Descubra Onda Style.
            </p>
          </div>
        </div>
      </Wrap>
    </section>
  );
}