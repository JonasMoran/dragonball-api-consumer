import styles from "./Character.module.css";

const getRaceColor = (race) => {
  const colors = {
    Saiyan: { bg: "#ffe8cc", text: "#d97706" },
    Namekian: { bg: "#d1fae5", text: "#065f46" },
    Human: { bg: "#fee2e2", text: "#991b1b" },
    Android: { bg: "#e0f2fe", text: "#0369a1" },
    "Frieza Race": { bg: "#f3e8ff", text: "#6b21a8" },
    God: { bg: "#fef3c7", text: "#92400e" },
  };
  return colors[race] || { bg: "#f3f4f6", text: "#374151" };
};

function Character({ character, onSelect }) {
  const raceStyle = getRaceColor(character.race);
  
  const genderStyle = character.gender === "Male" 
    ? { bg: "#e0f2fe", text: "#0369a1" } 
    : { bg: "#fce7f3", text: "#9d174d" };

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
        <span style={{ backgroundColor: raceStyle.bg, color: raceStyle.text, padding: '5px 12px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
          {character.race}
        </span>
        <span style={{ backgroundColor: genderStyle.bg, color: genderStyle.text, padding: '5px 12px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
          {character.gender}
        </span>
      </div>
    </div>
  );
}

export default Character;