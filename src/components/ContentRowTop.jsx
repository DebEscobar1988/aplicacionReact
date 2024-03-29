import { ContentRowMovies } from "./ContentRowMovies"
import { LastMovieInDB } from "./LastMovieInDB"
import { GenresInDB } from "./GenresInDB"
import { TableMovies } from "./TableMovies"

export const ContentRowTop = () => {
  return (
    <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
        
          <ContentRowMovies/>

            <div className="row">
        
             <LastMovieInDB/>
            
              <GenresInDB/>

         
            </div>
                 <TableMovies/>
        </div>
  )
}
