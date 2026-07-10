import styles from "./Modal.module.css";

function Modal({ character, onClose }) {
  if (!character) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <h2 style={{ fontFamily: 'sans-serif', color: '#212529', margin: '0 0 10px 0' }}>
          {character.name}
        </h2>
        
        <img src={character.image} alt={character.name} className={styles.modalImg} />
        
        <h3 style={{ fontFamily: 'sans-serif', color: '#ff8c00', fontSize: '1.1rem', textAlign: 'left', margin: '15px 0 5px 0' }}>
          Biografía / Descripción:
        </h3>
        <p className={styles.description}>
          {character.description || "Este personaje no posee una descripción disponible en la base de datos."}
        </p>
      </div>
    </div>
  );
}

export default Modal;