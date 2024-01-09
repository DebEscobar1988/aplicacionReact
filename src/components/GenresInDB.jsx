import { GenresInDBItem } from "./GenresInDBItem"

const dataGenre = [
  {id:crypto.randomUUID(), color: "dark", title: "Acción" },
  {id:crypto.randomUUID(), color: "dark", title: "Animación" },
  {id:crypto.randomUUID(), color: "dark", title: "Aventura" },
  {id:crypto.randomUUID(), color: "dark", title: "Ciencia Ficción" },
  {id:crypto.randomUUID(), color: "dark", title: "Comedia" },
  {id:crypto.randomUUID(), color: "dark", title: "Documental" },
  {id:crypto.randomUUID(), color: "dark", title: "Drama" },
  {id:crypto.randomUUID(), color: "dark", title: "Fantasia" },
  {id:crypto.randomUUID(), color: "dark", title: "Infantil" },
  {id:crypto.randomUUID(), color: "dark", title: "Músical" },
  
];
export const GenresInDB = () => {
  return (
    <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
        </div>
        <div className="card-body">
            <div className="row">
           { dataGenre.map(({id, color,title})=><GenresInDBItem key={id} color={color} title={title}   />)  }
      
            </div>
        </div>
    </div>

</div>
  )
}
