import { useState } from 'react';
import './App.css';
import Lista from './components/Lista';

const listaDeSeries = [
  { id: 1, nombre: 'Stranger Things', label: 'Netflix' },
  { id: 2, nombre: 'Game of Thrones', label: 'HBO' },
  { id: 3, nombre: 'The last kingdom', label: 'Netflix' },
  { id: 4, nombre: 'Supernatural', label: 'Amazon' },
  { id: 5, nombre: 'Star Trek', label: 'Netflix' },
  { id: 6, nombre: 'Alf', label: 'Amazon' },
  { id: 7, nombre: 'Orphan Black', label: 'Netflix' },
];

function App() {

  const [series, setSeries] = useState(listaDeSeries);

  function eliminarItem(itemAEliminar){
    const seriesFiltradas = series.filter(serie => serie.id !== itemAEliminar);
    setSeries(seriesFiltradas);
  }

  return (
    <div>

      <Lista contenido={series} tituloDeLista='Series' eliminar={eliminarItem}>
        Esta es una lista de series y las plataformas donde podemos encontrarlas
      </Lista>

    </div>
  );
}

export default App;
