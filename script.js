// Penguin Animation on Page Load
document.addEventListener('DOMContentLoaded', function() {
    const penguinContainer = document.getElementById('penguinContainer');
    
    // Show penguin immediately
    setTimeout(() => {
        penguinContainer.classList.add('visible');
        
        // Add dance animation class
        const penguin = penguinContainer.querySelector('.penguin');
        penguin.style.animation = 'penguin-entrance 2s ease-out forwards, penguin-dance 2s ease-in-out 2s infinite';
        
    }, 100);
    
    // After 5 seconds, make penguin fade out and move to corner
    setTimeout(() => {
        penguinContainer.classList.add('fade-out');
        
        // After fade completes, move penguin to top-right corner
        setTimeout(() => {
            penguinContainer.style.top = '20px';
            penguinContainer.style.right = '20px';
            penguinContainer.style.left = 'auto';
            penguinContainer.style.transform = 'translate(0, 0)';
            penguinContainer.style.width = '80px';
            penguinContainer.style.height = '100px';
            
            const penguin = penguinContainer.querySelector('.penguin');
            penguin.style.width = '80px';
            penguin.style.height = '100px';
            penguin.style.animation = 'penguin-idle 3s ease-in-out infinite';
            
            // Fade back in at smaller size
            setTimeout(() => {
                penguinContainer.classList.remove('fade-out');
                penguinContainer.classList.add('visible');
            }, 100);
        }, 1000);
    }, 5000);
});

// Add dancing animation
const style = document.createElement('style');
style.textContent = `
    @keyframes penguin-dance {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        10% {
            transform: translateY(-15px) rotate(-10deg);
        }
        20% {
            transform: translateY(0) rotate(10deg);
        }
        30% {
            transform: translateY(-10px) rotate(-5deg);
        }
        40% {
            transform: translateY(0) rotate(5deg);
        }
        50% {
            transform: translateY(-20px) rotate(-15deg);
        }
        60% {
            transform: translateY(0) rotate(15deg);
        }
        70% {
            transform: translateY(-10px) rotate(-5deg);
        }
        80% {
            transform: translateY(0) rotate(5deg);
        }
        90% {
            transform: translateY(-5px) rotate(-2deg);
        }
    }
    
    @keyframes penguin-idle {
        0%, 100% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-5px) scale(1.05);
        }
    }
    
    @media (max-width: 768px) {
        .penguin-container {
            width: 60px !important;
            height: 75px !important;
        }
        
        .penguin-container .penguin {
            width: 60px !important;
            height: 75px !important;
        }
    }
`;
document.head.appendChild(style);


