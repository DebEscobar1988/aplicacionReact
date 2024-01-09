
import PropTypes from 'prop-types';
export const GenresInDBItem = ({color,title}) => {
  return (
    <div className="col-lg-6 mb-4">
    <div className={`card bg-${color} text-white shadow`}>
        <div className="card-body">
           {title}
        </div>
    </div>
</div>
  )
}
GenresInDBItem.propTypes = {
    color:PropTypes.string,
    title:PropTypes.string,
}
GenresInDBItem.defaultProps = {
    color : "primary"
}