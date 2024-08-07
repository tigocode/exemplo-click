'use client';
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  const [nomeBtn, setNomeBtn] = useState('Abrir');

  function mudarNomeBtn() {
    setNomeBtn('Fechar');
  }

  return (
    <main className={styles.main}>
      <div>
        <button onClick={mudarNomeBtn}>{nomeBtn}</button>
      </div>
    </main>
  );
}
