document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'comet-cursor';
    document.body.appendChild(cursor);

    // Create tail particles
    const numParticles = 25; // Reduced number of particles for shorter trail
    const particles = [];
    const particlePositions = [];
    const particleAngles = [];

    // Initialize particle angles with more spread
    for (let i = 0; i < numParticles; i++) {
        particleAngles.push(Math.random() * Math.PI * 0.4 - Math.PI * 0.2); // -36 to +36 degrees
    }

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'comet-tail';
        document.body.appendChild(particle);
        particles.push(particle);
        particlePositions.push({ x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let isMoving = false;
    let lastMoveTime = 0;
    let velocity = 0;
    const moveTimeout = 30; // Shorter timeout for more responsive fade

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        const newMouseX = e.clientX;
        const newMouseY = e.clientY;
        
        // Calculate velocity
        velocity = Math.sqrt(
            Math.pow(newMouseX - mouseX, 2) + 
            Math.pow(newMouseY - mouseY, 2)
        );

        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = newMouseX;
        mouseY = newMouseY;

        isMoving = true;
        lastMoveTime = Date.now();

        // Update main cursor
        cursor.style.left = `${mouseX - 10}px`; // Reduced from 12 to 10
        cursor.style.top = `${mouseY - 10}px`; // Reduced from 12 to 10

        // Adjust cursor size based on velocity
        const size = Math.min(20 + velocity * 0.25, 30); // Reduced base size and max size
        cursor.style.width = `${size}px`;
        cursor.style.height = `${size}px`;
    });

    // Animation loop for particles
    function updateParticles() {
        // Check if cursor has stopped moving
        if (Date.now() - lastMoveTime > moveTimeout) {
            isMoving = false;
        }

        // Calculate fade factor based on movement
        let fadeFactor = isMoving ? 
            Math.min(1, velocity / 8) : 
            Math.max(0, 1 - (Date.now() - lastMoveTime) / 150); // Faster fade out

        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            
            // Update positions array
            if (i === 0) {
                particlePositions[i] = { x: mouseX, y: mouseY };
            } else {
                const prevPos = particlePositions[i - 1];
                const currentPos = particlePositions[i];
                
                // Create trailing effect with spread
                const dx = prevPos.x - currentPos.x;
                const dy = prevPos.y - currentPos.y;
                
                // Reduced spread effect for shorter tail
                const spread = (i / numParticles) * 12; // Reduced spread from 15 to 12
                const angle = particleAngles[i] + Math.sin(i * 0.1) * 0.12; // Reduced wave effect
                
                particlePositions[i] = {
                    x: currentPos.x + dx * 0.4 + Math.cos(angle) * spread,
                    y: currentPos.y + dy * 0.4 + Math.sin(angle) * spread
                };
            }

            const pos = particlePositions[i];
            particle.style.left = `${pos.x - 3}px`; // Reduced from 4 to 3
            particle.style.top = `${pos.y - 3}px`; // Reduced from 4 to 3
            
            // Calculate opacity and scale with more dramatic falloff
            const progress = i / particles.length;
            const baseOpacity = Math.pow(1 - progress, 2.2) * 0.85; // Reduced max opacity
            const scale = 1.2 - Math.pow(progress, 0.6); // Reduced scale factor
            
            // Apply movement-based fade and randomization
            const randomFactor = 0.9 + Math.random() * 0.2;
            const finalOpacity = baseOpacity * fadeFactor * randomFactor;
            const finalScale = scale * (isMoving ? randomFactor : 0.8);
            
            particle.style.opacity = finalOpacity;
            particle.style.transform = `scale(${finalScale})`;
        }

        requestAnimationFrame(updateParticles);
    }

    updateParticles();

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Show default cursor when leaving the window
    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
        particles.forEach(particle => {
            particle.style.display = 'none';
        });
        document.body.style.cursor = 'auto';
    });

    // Show custom cursor when entering the window
    document.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
        particles.forEach(particle => {
            particle.style.display = 'block';
        });
        document.body.style.cursor = 'none';
    });
}); 