'use client';

import React, { useState } from 'react';

interface FloatingButtonProps {}

export const FloatingButton: React.FC<FloatingButtonProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Floating Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
          transition: 'all 0.3s ease',
        }}
        onClick={openModal}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 123, 255, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.3)';
        }}
        title="Open Digi Hulp App"
      >
        🚀
      </div>

      {/* Modal with iframe */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              width: '90%',
              height: '90%',
              maxWidth: '1200px',
              maxHeight: '800px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0, 0, 0, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001,
                transition: 'background 0.2s ease',
              }}
              onClick={closeModal}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
              }}
            >
              ×
            </button>

            {/* Header */}
            <div
              style={{
                padding: '20px',
                borderBottom: '1px solid #eee',
                backgroundColor: '#f8f9fa',
              }}
            >
              <h2 style={{ margin: 0, color: '#333', fontSize: '20px' }}>
                Digi Hulp voor Senioren
              </h2>
            </div>

            {/* Iframe */}
            <iframe
              src="https://digi-hulp-voor-senioren-240592934946.us-west1.run.app"
              style={{
                width: '100%',
                height: 'calc(100% - 80px)',
                border: 'none',
                display: 'block',
              }}
              title="Digi Hulp App"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButton;

