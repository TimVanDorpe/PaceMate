# Pacemaker Flutter App

Een moderne Flutter applicatie voor Pacemaker met interactieve kaart en locatie details.

## ✨ Features

- **Login Scherm**: Authenticatie met admin/admin credentials
- **Interactieve Kaart**: Flutter Map met 5 locaties in Gent
- **Side Panel**: Animerend panel met locatie details en deelnemers
- **Modern Design**: Strak design met lichte kleurtinten (#6B9BD1)
- **Responsive**: Werkt op alle schermformaten
- **Dummy Data**: 5 locaties met elk 4 deelnemers + profielfoto's

## 🚀 Installatie

1. **Clone de repository:**
```bash
git clone https://github.com/TimVanDorpe/PaceMate.git
cd PaceMate/pacemate
```

2. **Installeer dependencies:**
```bash
flutter pub get
```

3. **Run de app:**
```bash
flutter run
```

## 📱 Login Credentials

- **Gebruikersnaam**: `admin`
- **Wachtwoord**: `admin`

## 📍 Locaties

De app toont 5 dummy locaties in Gent:

1. **Citadelpark Gent** - 10:00 - 11:30
2. **Watersportbaan Gent** - 14:00 - 15:30
3. **Bourgoyen-Ossemeersen** - 09:00 - 10:30
4. **Blaarmeersen** - 16:00 - 17:30
5. **Groot Veldeken** - 11:00 - 12:30

## 🛠️ Technologieën

- **Flutter 3.9.2+**
- **flutter_map**: Open-source kaart library
- **latlong2**: Latitude/longitude berekeningen
- **Material Design 3**: Modern UI design

## 📁 Project Structuur

```
lib/
├── main.dart                    # App entry point
├── models/
│   └── location.dart           # Data models
├── data/
│   └── dummy_data.dart         # Dummy locaties en deelnemers
├── screens/
│   ├── login_screen.dart       # Login pagina
│   └── map_screen.dart         # Kaart met markers
└── widgets/
    └── location_side_panel.dart # Side panel component
```

## 🎨 Design

Het design gebruikt een licht kleurenpalet:
- **Primaire kleur**: #6B9BD1 (lichtblauw)
- **Achtergrond**: Gradient van #E8F4F8 naar #F0F7FB
- **Text**: #2C3E50 (donkergrijs)
- **Accenten**: Subtiele schaduwen en smooth animaties

## 🔧 Development

### Android Emulator
```bash
# Start emulator
flutter emulators --launch <emulator_id>

# Run op Android
flutter run -d android
```

### Physical Device
1. Schakel Developer Options in
2. Enable USB Debugging
3. Sluit device aan
4. Run `flutter run`

### Hot Reload
Tijdens development:
- `r` = hot reload
- `R` = hot restart
- `q` = quit

## ⚠️ Opmerking

Dit is een demo applicatie met client-side authenticatie. Voor productie is server-side authenticatie en echte data nodig.

## 📄 Dependencies

```yaml
dependencies:
  flutter_map: ^7.0.2
  latlong2: ^0.9.1
  http: ^1.2.2
```

## 🚧 Toekomstige Features

- Backend integratie
- Real-time locatie tracking
- Push notificaties
- Gebruikersprofielen
- Event management
- Chat functionaliteit

## 📝 License

Demo project voor Pacemaker.