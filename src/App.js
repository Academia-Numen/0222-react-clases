import './App.css';
import Lista from './components/Lista';
import Text from './components/Text';

function App() {

  const listaDeSeries = [
    { id: 1, nombre: 'Stranger Things', label: 'Netflix' },
    { id: 2, nombre: 'Game of Thrones', label: 'HBO' },
    { id: 3, nombre: 'The last kingdom', label: 'Netflix' },
    { id: 4, nombre: 'Supernatural', label: 'Amazon' },
    { id: 5, nombre: 'Star Trek', label: 'Netflix' },
    { id: 6, nombre: 'Alf', label: 'Amazon' },
    { id: 7, nombre: 'Orphan Black', label: 'Netflix' },
  ];

  const listaDePeliculas = [
    { id: 1, nombre: 'El Caballero de la Noche', label: 'Netflix' },
    { id: 2, nombre: 'Sexto Sentido', label: 'HBO' },
    { id: 3, nombre: 'Volver al Futuro', label: 'Netflix' },
    { id: 4, nombre: 'Ironman', label: 'Amazon' },
  ];

  const listaDeAutos = [
    { id: 1, nombre: 'Fox', label: 'Volkswagen' },
    { id: 2, nombre: 'Siena', label: 'Fiat' },
    { id: 3, nombre: 'TT', label: 'Audi' },
  ];

  function eventHandler(e) {
    console.log('Has presionado el botón', e.target);
    e.preventDefault();
  }

  return (
    <div>

      <Text type='p' color='red' content='Clase 3'/>
      <Text type='h1' color='blue' content='Props'/>
      <Text type='h1' color='green' content='Props'/>
      
      <form onSubmit={eventHandler}>
        <input type="text" name="" id="" />
        <input type="submit" />
      </form>

      <Lista contenido={listaDeSeries} tituloDeLista='Series'>
        Esta es una lista de series y las plataformas donde podemos encontrarlas
      </Lista>
      <Lista contenido={listaDePeliculas} tituloDeLista='Peliculas'/>
      <Lista contenido={listaDeAutos} tituloDeLista='Autos'/>

      {/* VER EJEMPLO CON OTRO COMPONENTE, TEXTO */}
    </div>
  );
}

export default App;
