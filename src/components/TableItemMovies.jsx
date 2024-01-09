import  propTypes  from 'prop-types'

export const TableItemMovies = ({title,rating,length,genres,awards}) => {
  return (
    <tr>
    <td></td>
    <td>{title}</td>
    <td>{length}</td>
    <td>{rating}</td>
  
    <td>
        <ul>
            {
                genres.length ?  genres.map((genre, id )=> (
             <li key={id}>{genre}</li>
             )) : <p>Sin expecificar</p>
            }
        </ul>
   
    </td>
      <td>{awards}</td>
  </tr>
  )
}
TableItemMovies.propTypes ={
    title : propTypes.string,
    rating : propTypes.number,
    length: propTypes.number,
    genres: propTypes.array,
    awards: propTypes.number,

}
TableItemMovies.defaultProps={
    genres : []
}