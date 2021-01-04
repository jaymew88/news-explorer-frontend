import './Preloader';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader_circle"/>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
