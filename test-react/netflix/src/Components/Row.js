import React ,{useState ,  useEffect} from 'react';
import axios from '../axios'

const Row = ({title , fetchUrl }) => {
    const base_url = "http://image.tmdb.org/t/p/w185/"
    const [movies , setMovies] =  useState([]);
    useEffect( _ => {
       
    // if our movies = [] updated our effect runs only once
     async function fetchData(){
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request
     }
     fetchData();
    // set the second paramater to our url variable cause we want to fetch the url everytime it changes
    },[fetchUrl]);
     return ( 
        <div className="row">
            <h2>{title}</h2>
              <div className="row__posters">
                 {/* {several row posters} */}
                    {movies.map(movie => {
                      return <img key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
                  })}
             </div>
         </div>     
    );
}

export default Row;
