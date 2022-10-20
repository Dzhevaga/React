<<<<<<< HEAD
function Poster(props) {

 const {movies, index} = props;

 const divStyle = {
    color: '#fff',
    backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movies[index].backdrop_path + ')',
  };


return (
<div className="Poster" style={divStyle}>
    <div className='Poster-dark'>
        <div className='Container'>
            <div className='Poster-content'>
                <span className='Poster-title'>{movies[index].original_title}</span>
                <p className='Poster-description'>{movies[index].overview}</p>
                <div className='Poster-data'><span className='Poster-data-title'>Release date:</span> <span className='Poster-data-accent'>{movies[index].release_date}</span></div>
                <div className='Poster-data'><span className='Poster-data-title'>Rating:</span> <span className='Poster-data-accent'>{movies[index].vote_average}</span></div>
                <div className='Poster-data'><span className='Poster-data-title'>Vote count:</span> <span className='Poster-data-accent'>{movies[index].vote_count}</span></div>
                <div className='Poster-carusel'>
                    {movies.map((movie, key) => (
                        <a href='#'>
                           <div className='Poster-element'>
                                <img className='Poster-img' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt=''/>
                                <div className='Poster-average'>{movie.vote_average}</div>
                            </div>
                        </a>
                    ))}
=======

function Poster(props) {

    const {movies, index}= props;

    // console.log(movie);

    const divStyle = {
        color: '#fff',
        backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movies[index].backdrop_path + ')',
      };

  return (
    <div className="Poster" style={divStyle}>
        <div className='Poster-dark'>
            <div className='Container'>
                <div className='Poster-content'>
                    <span className='Poster-title'>{movies[index].original_title}</span>
                    <p className='Poster-description'>{movies[index].overview}</p>
                    <div className='Poster-data'><span className='Poster-data-title'>Release date:</span> <span className='Poster-data-accent'>{movies[index].release_date}</span></div>
                    <div className='Poster-data'><span className='Poster-data-title'>Rating:</span> <span className='Poster-data-accent'>{movies[index].vote_average}</span></div>
                    <div className='Poster-data'><span className='Poster-data-title'>Vote count:</span> <span className='Poster-data-accent'>{movies[index].vote_count}</span></div>
                    
                    <div className='Poster-carusel'>
                        {movies.map((movie, key) => (
                            <a href='#'>
                               <div className='Poster-element'>
                                    <img className='Poster-img' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt=''/>
                                    <div className='Poster-average'>{movie.vote_average}</div>
                                </div>
                            </a>
                        ))}
                    </div>

>>>>>>> 95dddc359d0e1ad6196f6413472d1d851f261579
                </div>
            </div>
        </div>
    </div>
<<<<<<< HEAD
</div>

);

}

export default Poster; 
=======
  );
}

export default Poster;
>>>>>>> 95dddc359d0e1ad6196f6413472d1d851f261579
