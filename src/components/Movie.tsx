 
interface UserProps {
    id:string;
    coverImg:string;
    year:string;
    title:string;
    summary:string;
    genres:string[];
     
  }

function Movie({id, coverImg, title, year, summary, genres }:UserProps) {

    return (
        <div id={id} >
        <img src={coverImg} alt={title}   />
        <div>
          <h2  >
             {title} 
          </h2>
          <h3  >{year}</h3>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
          <ul  >
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

 

export default Movie;