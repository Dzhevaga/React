import sandclock from '../images/sand-clock-icon-hourglass-simple-flat-vector-38155817.jpg'

export default function List(props) {

    const {rateMovies, isLoaded} = props;
    // const [popMovies, setPopMovies] = useState(0);

    const ckickHandler = ()=>{}
console.log(rateMovies);
if (!isLoaded){ 
  return (
    <div className={'bg-slate-300 flex items-center '}>
      <img className='' src={sandclock} alt=''/>
    </div>
  )
}else {
   return (
    <div
        className={'grid grid-cols-card gap-6 text-xl' + 
        'relative items-center justify-between'}
    >

    {rateMovies.map((rateMovies, index) => (
      <button 
        className={'hover:scale-150 trnsition easy-in-out delay-350'}  
        onClick={ (e) => ckickHandler (index) }>
          <div className=''>
                <img className='' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ rateMovies.poster_path} alt=''/>
                <div className=''>{rateMovies.vote_average}</div>
                <div className=''>{rateMovies.title}</div>
                <div className=''>{rateMovies.release_date}</div>
          </div>
      </button>
    ))}

    </div> 
  )}}