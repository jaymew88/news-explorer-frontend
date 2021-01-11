import './Preloader.css';
import noResults from '../../images/noresults.svg';

function Preloader({ loading }) {
  return (
    <section className="preloader">
      {loading ?
        <>
          <i  className="preloader_circle" />
          <p className="preloader__text">Searching for news...</p>
        </>
      :
        <>
          <img className="preloader__noresults-icon" src={noResults} alt="no-results icon" />
          <h3 className="preloader__noresults">Nothing Found</h3>
          <p className="preloader__noresults-text">Sorry, but nothing matched your search terms.</p>
        </>  
      }
    </section>
  );
}

export default Preloader;
