import { useState } from "react";
import styles from "./style.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },

    { id: 2, name: "Мария", age: 22 },

    { id: 3, name: "Алексей", age: 21 },

    { id: 4, name: "Марина", age: 19 },

    { id: 5, name: "Даша", age: 23 },

    { id: 6, name: "Глеб", age: 24 },

    { id: 7, name: "Дима", age: 18 },

    { id: 8, name: "Гриша", age: 20 },

    { id: 9, name: "Серафим", age: 21 },
  ]);
  function handleDelete(id) {
    setPeople(people.filter((person) => person.id !== id));
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Invited Guests</h1>

        <div className={styles.cardsContainer}>
          {people.map((person) => {
            return (
              <div className={styles.card} key={person.id}>
                <div className={styles.personInfo}>
                  <h2 className={styles.personName}>{person.name}</h2>
                  <p className={styles.personAge}>Age: {person.age}</p>
                </div>

                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(person.id)}
                  type="button"
                >
                  Видалити
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
