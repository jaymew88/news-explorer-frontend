import './Preloader.css';
import noResults from '../../images/noresults.svg';

function Preloader(props) {
  return (
    <section className="preloader">
      {props.loading &&
        <>
          <i  className="preloader__circle" />
          <p className="preloader__text">Searching for news...</p>
        </>}
      {!props.loading && !props.results &&
        <>
          <img className="preloader__noresults-icon" src={noResults} alt="no-results icon" />
          <h3 className="preloader__noresults">Nothing Found</h3>
          <p className="preloader__text">Sorry, but nothing matched your search terms.</p>
        </>  
      }
      {!props.loading && props.results &&
        <>
        </>
      }
    </section>
  );
}

export default Preloader;
