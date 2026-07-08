import Character from "./Character";
import styles from "./CharacterList.module.css";

function CharacterList({ characters, onSelectCharacter }) {
  return (
    <div className={styles.grid}>
      {characters.map((character) => {
        return (
          <Character 
            key={character.id} 
            character={character} 
            onSelect={onSelectCharacter} 
          /> 
        );
      })}
    </div>
  );
}

export default CharacterList;