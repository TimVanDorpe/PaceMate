if (!sessionStorage.getItem('isLoggedIn')) {
    window.location.href = 'index.html';
}

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

const locations = [
    {
        id: 1,
        name: 'Citadelpark Gent',
        lat: 51.0357,
        lng: 3.7166,
        time: '10:00 - 11:30',
        participants: [
            { name: 'Emma Janssens', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=1' },
            { name: 'Liam Peeters', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=2' },
            { name: 'Sophie Claes', role: 'Coach', avatar: 'https://i.pravatar.cc/150?img=3' },
            { name: 'Noah Vermeulen', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=4' }
        ]
    },
    {
        id: 2,
        name: 'Watersportbaan Gent',
        lat: 51.0243,
        lng: 3.6847,
        time: '14:00 - 15:30',
        participants: [
            { name: 'Lucas De Smet', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=5' },
            { name: 'Olivia Maes', role: 'Coach', avatar: 'https://i.pravatar.cc/150?img=6' },
            { name: 'Milan Willems', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=7' },
            { name: 'Luna Bakker', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=8' }
        ]
    },
    {
        id: 3,
        name: 'Bourgoyen-Ossemeersen',
        lat: 51.0707,
        lng: 3.6706,
        time: '09:00 - 10:30',
        participants: [
            { name: 'Arthur Martens', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=9' },
            { name: 'Ella De Vos', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=10' },
            { name: 'Finn Hermans', role: 'Coach', avatar: 'https://i.pravatar.cc/150?img=11' },
            { name: 'Marie Goossens', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=12' }
        ]
    },
    {
        id: 4,
        name: 'Blaarmeersen',
        lat: 51.0538,
        lng: 3.6735,
        time: '16:00 - 17:30',
        participants: [
            { name: 'Louis Jacobs', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=13' },
            { name: 'Amelie Mertens', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=14' },
            { name: 'Jules Wouters', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=15' },
            { name: 'Camille Simon', role: 'Coach', avatar: 'https://i.pravatar.cc/150?img=16' }
        ]
    },
    {
        id: 5,
        name: 'Groot Veldeken',
        lat: 51.0627,
        lng: 3.7284,
        time: '11:00 - 12:30',
        participants: [
            { name: 'Victor Dubois', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=17' },
            { name: 'Charlotte Laurent', role: 'Coach', avatar: 'https://i.pravatar.cc/150?img=18' },
            { name: 'Adam Fontaine', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=19' },
            { name: 'Alice Lambert', role: 'Deelnemer', avatar: 'https://i.pravatar.cc/150?img=20' }
        ]
    }
];

const map = L.map('map').setView([51.0543, 3.7174], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

const createCustomIcon = () => {
    return L.divIcon({
        className: 'custom-marker',
        html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="3" fill="#6B9BD1"/>
                <circle cx="10" cy="10" r="7" stroke="#6B9BD1" stroke-width="2" fill="none"/>
              </svg>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });
};

locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng], {
        icon: createCustomIcon()
    }).addTo(map);
    
    marker.on('click', () => {
        openSidePanel(location);
    });
});

function openSidePanel(location) {
    const sidePanel = document.getElementById('sidePanel');
    const panelContent = document.getElementById('panelContent');
    
    const participantsHTML = location.participants.map(participant => `
        <div class="participant-card">
            <img src="${participant.avatar}" alt="${participant.name}" class="participant-avatar">
            <div class="participant-name">${participant.name}</div>
            <div class="participant-role">${participant.role}</div>
        </div>
    `).join('');
    
    panelContent.innerHTML = `
        <h2 class="location-title">${location.name}</h2>
        <div class="location-time">${location.time}</div>
        
        <div class="participants-section">
            <h3 class="section-title">Deelnemers (${location.participants.length})</h3>
            <div class="participants-grid">
                ${participantsHTML}
            </div>
        </div>
    `;
    
    sidePanel.classList.add('open');
}

function closeSidePanel() {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.remove('open');
}