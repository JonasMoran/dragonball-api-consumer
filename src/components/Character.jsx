import styles from "./Character.module.css";

const raceClassMap = {
  Saiyan: styles.saiyan,
  Namekian: styles.namekian,
  Human: styles.human,
  Android: styles.android,
  "Frieza Race": styles.friezaRace,
  God: styles.god,
  Angel: styles.angel,
  Majin: styles.majin,
};

function Character({ character, onSelect }) {
  const raceColorClass = raceClassMap[character.race] || styles.defaultRace;
  const genderColorClass = character.gender === "Male" ? styles.male : styles.female;

  return (
    <div className={styles.card} onClick={() => onSelect(character)} style={{ cursor: 'pointer' }}>
      <h2 className={styles.title}>{character.name}</h2>
      
      <div className={styles.imgContainer}>
        <img 
          src={character.image} 
          alt={character.name} 
          className={styles.avatar} 
        />
      </div>

      <div className={styles.infoBlock}>
        <p><strong>Ki Base:</strong> {character.ki}</p>
        <p><strong>Ki Máximo:</strong> {character.maxKi}</p>
      </div>

      <div className={styles.badgeContainer}>
        <span className={`${styles.badge} ${raceColorClass}`}>
          {character.race}
        </span>
        <span className={`${styles.badge} ${genderColorClass}`}>
          {character.gender}
        </span>
      </div>
    </div>
  );
}

export default Character;