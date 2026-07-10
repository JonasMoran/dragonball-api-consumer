import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  return (
    <div className={styles.container}>
      <button 
        className={`${styles.btn} ${styles.btnPrev}`}
        onClick={() => setPage(page - 1)} 
        disabled={page === 1}
      >
        Anterior
      </button>
      
      <span className={styles.pageInfo}>
        Página {page} / 6
      </span>

      <button 
        className={`${styles.btn} ${styles.btnNext}`}
        onClick={() => setPage(page + 1)} 
        disabled={page === 6}
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;