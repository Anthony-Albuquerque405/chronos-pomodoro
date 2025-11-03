import styles from './styles.module.css';

export function Footer() {
  /* Componente de Cabeçalho */
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a tecnica de pomodoro</a>
      <a href='#'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} -- Feito com 💚
      </a>
    </footer>
  );
}
