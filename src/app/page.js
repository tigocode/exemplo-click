'use client';
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  const [ btnClique, setBtnClique ] = useState(false);
  const [ nomeBtn, setNomeBtn ] = useState('Abrir');

  function mudarNomeBtn() {
    if(btnClique === true) {
      setBtnClique(false);
      setNomeBtn('Abrir');
    } else {
      setBtnClique(true);
      setNomeBtn('Fechar');
    }
    
  }

  return (
    <main className={styles.main}>
      <div>
        <button onClick={mudarNomeBtn}>{nomeBtn}</button>
      </div>
    </main>
  );
}
