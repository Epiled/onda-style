import roupas from 'data/roupas.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect } from 'react';
import { Cardapio } from 'types/Prato';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(roupas);
  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: Cardapio) {
    switch(ordenador) {
    case 'porcao': 
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return novaLista.sort((a,b) => a.qtd > b.qtd ? 1 : -1);
    case 'preco':
      return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista; 
    }
  }

  useEffect(() => {
    const novaLista = roupas.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  },[busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}