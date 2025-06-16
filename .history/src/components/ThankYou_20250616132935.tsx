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
  const qrValue = "https://wa.me/5216866509164?text=Hola%2C%20acabo%20de%20llenar%20la%20encuesta%20y%20me%20gustar%C3%ADa%20compartir%20una%20queja%20o%20sugerencia."; // Cambia esto por tu URL

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
            🎉
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            ¡Gracias por tu tiempo!
          </h1>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-5xl mb-4">{categoryEmoji}</div>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Tu opinión sobre <span className="font-semibold text-gray-800">{categoryName}</span> es muy importante para mejorar nuestros servicios.
            </p>
            <p className="text-gray-600 text-lg">
              Hemos registrado tus respuestas y trabajaremos para brindarte una mejor experiencia.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <button
              onClick={() => setShowQR(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mb-4"
            >
              Ver código QR
            </button>
            
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
          <p className="text-gray-400 text-sm">
            ¡Tu feedback nos ayuda a crecer! 💪
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
