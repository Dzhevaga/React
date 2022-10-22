
export default function List(props) {

    const {movies, isLoaded,rateMovies, isLoadedrate} = props;
    
  

  return (

    <div className="flex">
      List
    </div>
  );
}








// fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
// .then( response => response.json() )
// .then( answer =>  {
//   setArrayMovies(answer.results);
//   setIsLoaded(true);
//    })
// .catch((error) => {
//   console.error('Error:',error);
// })
// },[])

