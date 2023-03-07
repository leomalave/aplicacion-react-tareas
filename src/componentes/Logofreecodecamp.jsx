import freeCodeCampLogo from '../imagenes/freeCodeCamp-logo.png';


const logofreeCodeCamp = () => {
  return (
        <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          className='freecodecamp-logo' />
        </div>
  );
};

export default logofreeCodeCamp;