// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 10;
controls.maxDistance = 30;

// Earth setup with textures
const textureLoader = new THREE.TextureLoader();

const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
    map: textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
    bumpMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'),
    bumpScale: 0.05,
    specularMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'),
    specular: new THREE.Color('grey'),
    shininess: 10
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Atmosphere effect
const atmosphereGeometry = new THREE.SphereGeometry(5.1, 64, 64);
const atmosphereMaterial = new THREE.MeshPhongMaterial({
    map: textureLoader.load('https://threejs.org/examples/textures/planets/earth_clouds_1024.jpg'),
    transparent: true,
    opacity: 0.3
});
const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
scene.add(atmosphere);

// Stars background
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 0.05
});

const starVertices = [];
for(let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xffffff, 1);
sunLight.position.set(100, 10, 0);
scene.add(sunLight);

// Marker management
const markers = new Map();

function addMarker(lat, lng, name, type = 'observatory') {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const radius = 5;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ 
        color: type === 'observatory' ? 0xffff00 : 0xff0000 
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    
    marker.position.set(x, y, z);
    marker.userData = { name, type, lat, lng };
    
    earth.add(marker);
    markers.set(name, marker);
    
    return marker;
}

// Add some example markers
addMarker(40.7128, -74.0060, "New York Observatory");
addMarker(51.5074, -0.1278, "Greenwich Observatory");
addMarker(-33.8688, 151.2093, "Sydney Observatory");

// Camera position
camera.position.z = 15;

// Update functions
function updateCelestialBodies() {
    const date = new Date();
    const lat = 0;
    const lng = 0;

    const sunPos = SunCalc.getPosition(date, lat, lng);
    document.getElementById('sunInfo').innerHTML = `
        Sun Position:<br>
        Azimuth: ${(sunPos.azimuth * 180 / Math.PI).toFixed(2)}°<br>
        Altitude: ${(sunPos.altitude * 180 / Math.PI).toFixed(2)}°
    `;

    const moonPos = SunCalc.getMoonPosition(date, lat, lng);
    const moonIllum = SunCalc.getMoonIllumination(date);
    document.getElementById('moonInfo').innerHTML = `
        Moon Position:<br>
        Azimuth: ${(moonPos.azimuth * 180 / Math.PI).toFixed(2)}°<br>
        Altitude: ${(moonPos.altitude * 180 / Math.PI).toFixed(2)}°<br>
        Phase: ${(moonIllum.phase * 100).toFixed(1)}%
    `;

    // Update sun light position based on actual sun position
    const sunRadius = 100;
    sunLight.position.x = Math.cos(sunPos.azimuth) * Math.cos(sunPos.altitude) * sunRadius;
    sunLight.position.y = Math.sin(sunPos.altitude) * sunRadius;
    sunLight.position.z = Math.sin(sunPos.azimuth) * Math.cos(sunPos.altitude) * sunRadius;
}

// Mouse interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(earth.children);

    if (intersects.length > 0) {
        const marker = intersects[0].object;
        if (marker.userData) {
            document.body.style.cursor = 'pointer';
            showTooltip(event, marker.userData.name);
        }
    } else {
        document.body.style.cursor = 'default';
        hideTooltip();
    }
}

// Tooltip functions
function showTooltip(event, text) {
    const tooltip = document.querySelector('.tooltip') || createTooltip();
    tooltip.style.display = 'block';
    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY + 10 + 'px';
    tooltip.textContent = text;
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

function createTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    return tooltip;
}

// Event listeners
window.addEventListener('mousemove', onMouseMove);

document.getElementById('rotationSpeed').addEventListener('input', (e) => {
    const speed = e.target.value / 5000;
    earth.userData.rotationSpeed = speed;
    atmosphere.userData.rotationSpeed = speed;
});

document.getElementById('showMarkers').addEventListener('change', (e) => {
    markers.forEach(marker => {
        marker.visible = e.target.checked;
    });
});

document.getElementById('showAtmosphere').addEventListener('change', (e) => {
    atmosphere.visible = e.target.checked;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    const rotationSpeed = earth.userData.rotationSpeed || 0.01;
    earth.rotation.y += rotationSpeed;
    atmosphere.rotation.y += rotationSpeed * 1.1;
    
    controls.update();
    updateCelestialBodies();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize
earth.userData.rotationSpeed = 0.01;
atmosphere.userData.rotationSpeed = 0.011;
animate(); 