import { useState } from 'react';

import { Button, Container, Typography } from '@mui/material';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handleNo = () => {
    // Calcula posiciones aleatorias cerca del botón "Sí" y el texto
    const randomX = Math.floor(Math.random() * 100) + 50; // Valor entre 50 y 250
    const randomY = Math.floor(Math.random() * 250) + 50; // Valor entre 50 y 150

    // Actualiza el estilo del botón "No" para cambiar su posición
    setNoButtonStyle({
      position: 'absolute',
      top: `calc(50% + ${randomY}px)`,
      left: `calc(50% + ${randomX}px)`,
      transform: 'translate(-50%, -50%)',
    });

   
    document.body.style.overflow = 'hidden';
  };
  const imageUrl = '/pregunta.png';
  const imageUrl2 = '/si.png';
  const imageUrl23 = '/aho.jpg';
  return (
    <>
    {step === 1 && (
        <Container id="step1" maxWidth="sm">
          
          <Button style={{margin:"15px", fontFamily: 'Times New Roman'}} onClick={handleContinue} variant="contained" color="primary">
          Ingresar
          </Button>
        </Container>
      )}
      {step === 2 && (
        <Container id="step1" maxWidth="sm">
          <Typography variant="h5" className="root" style={{ fontFamily: 'Times New Roman'}}>¡Hola , Elizabeth!</Typography>
          <Button style={{margin:"15px"}} onClick={handleContinue} variant="contained" color="primary">
            Continuar
          </Button>
        </Container>
      )}

      {step === 3 && (
        <Container id="step2" maxWidth="sm">
          <Typography variant="h5" align="justify" className="root" style={{ fontFamily: 'Times New Roman'}}>
Desde nuestra primera conversacion, hemos sentido una conexión muy especial. Cada conversación ha revelado una química única que nos une de una manera sorprendente.</Typography>
          <Button style={{margin:"15px"}} onClick={handleContinue} variant="contained" color="primary">
            Continuar
          </Button>
        </Container>
      )}
      {step === 4 && (
        <Container id="step2" maxWidth="sm">
          <Typography variant="h5" align="justify" className="root" style={{ fontFamily: 'Times New Roman'}}>Es difícil para mí poner en palabras todo lo que siento por ti, pues las expresiones parecen no alcanzar para describirlo. Cada momento que hablamos es un tesoro, cada risa compartida es un destello de felicidad en mi vida. Tu presencia ilumina mis días y tu amor llena mi corazón de una manera que nunca antes había experimentado.</Typography>
          <Button style={{margin:"15px"}} onClick={handleContinue} variant="contained" color="primary">
            Continuar
          </Button>
        </Container>
      )}
      {step === 5 && (
        <Container id="step2" maxWidth="sm">
          <Typography variant="h5" align="justify" className="root" style={{ fontFamily: 'Times New Roman'}}>No puedo evitar maravillarme de la forma en que nuestras almas se conectan, como si estuvieran destinadas a encontrarse en este vasto océano de posibilidades. Eres la calma en medio de la tormenta, la luz en mi oscuridad, y cada día que pasa, mi amor por ti solo crece más profundo y verdadero.</Typography>
          <Button style={{margin:"15px"}} onClick={handleContinue} variant="contained" color="primary">
            Continuar
          </Button>
        </Container>
      )}
      {step === 6 && (
        <Container id="step2" maxWidth="sm">
          <Typography variant="h5" align="justify" className="root" style={{ fontFamily: 'Times New Roman'}}>Quiero que seas mi confidente, mi compañera, mi todo. No hay nada en este mundo que cambiaría de ti, porque en mi mundo, ya eres perfecta en cada aspecto. Te Quiero más de lo que las palabras pueden expresar, y siempre estaré agradecido por tenerte a mi lado, mi niña. ❤️</Typography>
          <Button style={{margin:"15px"}} onClick={handleContinue} variant="contained" color="primary">
            Continuar
          </Button>
        </Container>
      )}
        {step === 7 && (
        <Container className="root" id="step3" maxWidth="sm" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
      style={{
        backgroundImage: `url(${imageUrl23})`,
        width: '250px',
        height: '250px',
        backgroundSize: 'cover', // Ajuste de tamaño de la imagen de fondo
        backgroundPosition: 'center', // Posición de la imagen de fondo
      }}
    >
      {/* Contenido adicional */}
    </div>
    <Typography variant="h5" align="center" className="root" style={{ fontFamily: 'Times New Roman'}}>Siempre voy a decirtelo:</Typography>
    <Typography variant="h5" align="center" className="root" style={{ fontFamily: 'Times New Roman'}}>Yo me estaba ahogando cuando te conocí, pero esa luz, esa luz dentro de ti, ha hecho que me sienta lleno de vida. y todo lo que quiero ahora es estar cerca de ella, de ti, juntos.</Typography>
    <Button style={{margin:"15px"}} onClick={handleContinue} variant="contained" color="primary">
            Continuar
          </Button>
          
        </Container>
      )}
      {step === 8 && (
        <Container id="step2" maxWidth="sm">
          <Typography variant="h5" align="justify" className="root" style={{ fontFamily: 'Times New Roman'}}>Quiero hacerte una pregunta muy importante.</Typography>
          <Button style={{margin:"15px"}} onClick={handleContinue} variant="contained" color="primary">
            Continuar
          </Button>
        </Container>
      )}
      {step === 9 && (
        <Container className="root" id="step3" maxWidth="sm" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: '250px',
        height: '250px',
        backgroundSize: 'cover', // Ajuste de tamaño de la imagen de fondo
        backgroundPosition: 'center', // Posición de la imagen de fondo
      }}
    >
      {/* Contenido adicional */}
    </div>
          <Typography variant="h5" >¿Quieres ser mi novia?</Typography>
          <div style={{ position: 'relative', marginTop: '16px' }}>
            <Button style={{margin:"5px"}} onClick={handleContinue} variant="contained" color="primary">
              Sí
            </Button>
            <Button  onClick={handleNo} variant="contained" color="secondary" style={noButtonStyle}>
              No
            </Button>
          </div>
          
        </Container>
      )}
      {step === 10 && (
        <Container id="step4" maxWidth="sm" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         
        <div
      style={{
        backgroundImage: `url(${imageUrl2})`,
        width: '250px',
        height: '250px',
        backgroundSize: 'cover', // Ajuste de tamaño de la imagen de fondo
        backgroundPosition: 'center', // Posición de la imagen de fondo
      }}
    >
      {/* Contenido adicional */}
    </div> <Typography variant="h5">Sabia que dirias que si</Typography>
          <Button variant="contained" color="secondary" component="a" href="https://wa.me/59167527797/?text=Acepto%20ser%20tu%20novia" target="_blank" rel="noopener noreferrer">
  Enviar Respuesta
</Button>
        </Container>
      )}

    
    </>
  );
}

export default App;
