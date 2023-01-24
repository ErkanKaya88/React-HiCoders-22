const Movie = ({ movie }) => {
  return (
    <div className="card-group container mt-0">
      <div className="row">
        {movie?.map((item) => (
          <div className="card col-3 m-3 mt-0 px-0">
            <img
              className="card-img-top h-75"
              src={item.Poster}
              alt={item.Title}
            />
            <div className="card-body">
              <h6 className="card-title fs-6">{item.Title}</h6>
              <p className="card-text fs-6">Type : {item.Type}</p>
            </div>
            <div className="card-footer">
              <p className="card-text fs-6"> {item.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Movie;
