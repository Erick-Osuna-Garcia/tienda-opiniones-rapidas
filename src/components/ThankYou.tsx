import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface ThankYouProps {
  onBackToHome: () => void;
  categoryName: string;
  categoryEmoji: string;
}

const ThankYou: React.FC<ThankYouProps> = ({ onBackToHome, categoryName, categoryEmoji }) => {
  const [showQR, setShowQR] = useState(false);
  
  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      onBackToHome();
    }, 1300000);

    return () => clearTimeout(timer);
  }, [onBackToHome]);

  // URL que quieres codificar en el QR
const qrValue = "https://wa.me/5216863867352?text=Hola%2C%20acabo%20de%20llenar%20la%20encuesta%20y%20me%20gustar%C3%ADa%20compartir%20un%20comentario%20o%20sugerencia.";

  if (showQR) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
        <button 
          onClick={() => setShowQR(false)}
          className="absolute top-4 right-4 text-white text-xl p-2"
        >
          ✕
        </button>
        <div className="w-full max-w-xl aspect-square">
          <QRCodeSVG
            value={qrValue}
            size={'100%'}
            level={'H'}
            className="w-full h-full bg-white p-4"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="animate-scale-in">
          <div className="text-8xl md:text-9xl mb-8 animate-bounce">
            🙏
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            ¡Muchas Gracias!
          </h1>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
        
        
            <p className="text-gray-600 text-lg mb-6">
            Para comentarios y sugerencias a dirección, escanee el QR
            </p>
            <div className="flex flex-col items-center gap-4">
              <QRCodeSVG
                value={qrValue}
                size={200} // Hice el QR un poco más pequeño
                level={'H'}
                className="bg-white p-2 rounded-lg shadow-md"
              />
              <button
                onClick={() => setShowQR(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Ampliar código QR
              </button>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
        
            
            <button
              onClick={onBackToHome}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Evaluar otra área
            </button>
          </div>
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
