import React, { useState } from 'react';
import { tablesMock } from '../../constants';
import { Table } from '../../interfaces';
import styles from './tables.module.scss';

const Tables = () => {
  const [editMode, toggleEditMode] = useState(false);
  let tables: Table[] = tablesMock;

  return (
    <div className={styles.container}>
      <div className={styles.tablesContainer}>
        {tables.map((table) => {
          return (
            <div
              key={table.id}
              className={styles.table}
              style={{ top: `${table.posY}px`, left: `${table.posX}px` }}
            >
              {table.id}
              <button className={editMode ? styles.btn : styles.hidden}>Cambiar forma</button>
            </div>
          );
        })}
      </div>
      <h2>Presionar ctrl + click para mover la mesa</h2>
      <button>Modo edición</button>
      <button>Agregar mesa</button>
    </div>
  );
};

export default Tables;
