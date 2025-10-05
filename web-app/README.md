# Pacemaker Web App

Een moderne web applicatie voor Pacemaker met een interactieve kaart waarop locaties en deelnemers worden weergegeven.

## ✨ Features

- **Login Pagina**: Veilige authenticatie met admin/admin
- **Interactieve Kaart**: Leaflet.js kaart met locaties in Gent
- **Side Panel**: Gedetailleerde informatie over locaties en deelnemers
- **Modern Design**: Strak, minimalistisch design met lichte kleurtinten
- **Responsive**: Werkt op desktop, tablet en mobiel
- **Dummy Data**: 5 locaties met elk 4 dummy deelnemers

## 🚀 Gebruik

1. Open `index.html` in een webbrowser
2. Log in met de volgende credentials:
   - **Gebruikersnaam**: `admin`
   - **Wachtwoord**: `admin`
3. Klik op de markers op de kaart om locatiedetails te bekijken
4. Bekijk deelnemers met foto's en rollen in het side panel

## 📁 Bestandsstructuur

```
web-app/
├── index.html      # Login pagina
├── map.html        # Kaart pagina met locaties
├── styles.css      # Alle styling
├── login.js        # Login authenticatie logica
├── map.js          # Kaart functionaliteit en data
└── README.md       # Deze file
```

## 🛠️ Technologieën

- **HTML5**: Semantische markup
- **CSS3**: Moderne styling met gradients en transitions
- **Vanilla JavaScript**: Geen frameworks, pure JS
- **Leaflet.js**: Open-source kaart library
- **Session Storage**: Client-side authenticatie
- **CartoDB Light**: Lichte kaart tiles voor clean look

## 📍 Locaties

De app toont 5 dummy locaties in Gent:

1. **Citadelpark Gent** - 10:00 - 11:30
2. **Watersportbaan Gent** - 14:00 - 15:30
3. **Bourgoyen-Ossemeersen** - 09:00 - 10:30
4. **Blaarmeersen** - 16:00 - 17:30
5. **Groot Veldeken** - 11:00 - 12:30

Elke locatie heeft 4 dummy deelnemers met profielfoto's (via pravatar.cc).

## 🎨 Design

Het design gebruikt een licht kleurenpalet:
- Primaire kleur: #6B9BD1 (lichtblauw)
- Achtergrond: Gradient van #E8F4F8 naar #F0F7FB
- Text: #2C3E50 (donkergrijs)
- Accenten: Subtiele schaduwen en hover effecten

## 🔒 Beveiliging

⚠️ **Let op**: Dit is een demo applicatie. De authenticatie gebruikt session storage en is NIET geschikt voor productie. Voor een echte applicatie heb je server-side authenticatie nodig.

## 📱 Responsive Design

- **Desktop**: Volledig side panel (450px breed)
- **Tablet**: Aangepaste layouts
- **Mobiel**: Full-screen side panel

## 🚧 Toekomstige Verbeteringen

- Backend integratie voor echte data
- Gebruikersbeheer en rollen
- Filtering en zoekfunctionaliteit
- Kalender integratie
- Notificaties voor nieuwe events
- Export functionaliteit

## 📄 Licentie

Dit is een demo project voor Pacemaker.