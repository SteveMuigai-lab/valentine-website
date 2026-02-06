class FloatingHearts extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                    z-index: 0;
                }
                .heart {
                    position: absolute;
                    color: rgba(244, 63, 94, 0.4);
                    animation: float linear infinite;
                    font-size: 20px;
                    user-select: none;
                }
                @keyframes float {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.6;
                    }
                    90% {
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(-10vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            </style>
            <div id="hearts-container"></div>
        `;
        
        this.createHearts();
    }
    
    createHearts() {
        const container = this.shadowRoot.getElementById('hearts-container');
        const heartSymbols = ['❤️', '💖', '💕', '💗', '💓', '💝', '🌹'];
        
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            
            const left = Math.random() * 100;
            const duration = 15 + Math.random() * 20;
            const delay = Math.random() * 15;
            const size = 15 + Math.random() * 30;
            
            heart.style.left = `${left}%`;
            heart.style.animationDuration = `${duration}s`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.fontSize = `${size}px`;
            
            container.appendChild(heart);
        }
    }
}

customElements.define('floating-hearts', FloatingHearts);
