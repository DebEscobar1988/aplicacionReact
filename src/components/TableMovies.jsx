import { Card, Table } from 'react-bootstrap';
import { TableItemMovies } from './TableItemMovies';
const movies = [
    {
        title : "tarzan",
        length : 120,
        awards: 10,
        rating: 10,
        genres : ["Aventura","Drama"]
    },
    {
        title : "Dracula",
        length : 80,
        awards: 3,
        rating: 7,
        genres : ["Terror","Suspenso"]
    },
    {
        title : "La historía sin fín",
        length : 140,
        awards: 15,
        rating: 12,
        genres : ["Fantasía","Familiar"]
    },
    {
        title : "Sin género",
        length : 140,
        awards: 1,
        rating: 5,
        genres : []
    }]

export const TableMovies = () => {
  return (
    <Card>
        <Card.Body>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Duración</th>
          <th>Rating</th>
          <th>Géneros</th>
          <th>Premíos</th>
        </tr>
      </thead>
      <tbody>
       {
movies.map(({title, length, genres, awards, rating}, index)=> <TableItemMovies
key= {index + title}
 title={title}
  length={length}
   genres={genres}
    awards={awards}
     rating={rating}
      />)}
      </tbody>
    </Table>
     </Card.Body>
    </Card>
   
  );
}




