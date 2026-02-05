# 🐾 Pokédex - React Battle Arena

Nowoczesna aplikacja Pokédex zbudowana w React z funkcjonalnością walk między Pokémonami, systemem zarządzania ulubionych oraz trybami jasny/ciemny.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1.1-646CFF?logo=vite)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.19-DB7093?logo=styled-components)

## 🚀 Szybki start

### Wymagania

- Node.js (wersja 18+ zalecana)
- npm lub yarn
- JSON Server (do backendu)

### Instalacja i uruchomienie

1. **Klonowanie repozytorium**

   ```bash
   git clone [repository-url]
   cd Pokedex/Pokedex
   ```

2. **Instalacja zależności**

   ```bash
   npm install
   ```

3. **Uruchomienie JSON Server (backend)**

   ```bash
   # W osobnym terminalu
   npx json-server --watch db.json --port 3001
   ```

4. **Uruchomienie aplikacji React**

   ```bash
   npm run dev
   ```

5. **Dostęp do aplikacji**
   - Frontend: `http://localhost:5173` (lub kolejny wolny port)
   - Backend API: `http://localhost:3001`

## 📋 Dostępne komendy

```bash
npm run dev      # Uruchomienie serwera deweloperskiego
npm run build    # Budowanie wersji produkcyjnej
npm run preview  # Podgląd wersji produkcyjnej
npm run lint     # Sprawdzanie kodu ESLintem
```

## 🎯 Funkcjonalności

### 🏠 Główna strona

- **Lista Pokémonów** z PokeAPI
- **Paginacja** z nawigacją między stronami
- **Wyszukiwanie** Pokémonów po nazwie
- **Dodawanie do ulubionych** jednym kliknięciem
- **Przejście do areny** dla każdego Pokémona

### ⚔️ Arena walk

- **Dodawanie Pokémonów** do areny (maksymalnie 2)
- **System walk** oparty na doświadczeniu i wadze
- **Animowane wyniki** z modalami zwycięstwa/porażki
- **Aktualizacja statystyk** po walkach
- **Historia walk** zapisywana w JSON Server

### ❤️ Ulubione

- **Zarządzanie ulubionymi** Pokémonami
- **Lokalny JSON Server** dla persistencji danych
- **Synchronizacja** z PokeAPI

### 🔧 Zarządzanie Pokémonami

- **Tworzenie własnych** Pokémonów
- **Edycja istniejących** statystyk
- **Walidacja formularzy** z react-hook-form i Zod
- **Powiadomienia** o sukcesach/błędach

### 🎨 Interfejs i UX

- **System motywów** (jasny/ciemny)
- **Responsive design** na wszystkie urządzenia
- **Płynne animacje** i przejścia
- **Toast notifications** dla feedback użytkownika
- **Loading states** podczas pobierania danych

## 🏗️ Architektura projektu

```
src/
├── components/          # Komponenty React
│   ├── forms/          # Formularze (PokemonForm)
│   ├── shared/         # Komponenty współdzielone (PokemonCard, Navigation)
│   └── subpages/       # Główne strony (Arena, CreatePokemon, EditPokemon)
├── context/            # Context API dla stanu globalnego
│   ├── ArenaContext.jsx     # Stan areny walk
│   ├── AuthContext.jsx      # Autentykacja użytkownika
│   ├── PokemonsContext.jsx  # Dane Pokémonów
│   └── ThemeContext.jsx     # System motywów
├── hooks/              # Custom React Hooks
├── router/             # Konfiguracja React Router
├── services/           # API calls i komunikacja z zewnętrznymi serwisami
│   ├── favouritesApi.js    # API ulubionych
│   ├── pokeApi.js         # PokeAPI integration
│   └── pokemonsApi.js     # JSON Server API
├── themes/             # Definicje motywów (light/dark)
└── constants/          # Stałe aplikacji
```

## 🔧 Technologie i biblioteki

### Core

- **React 19.2.0** - Biblioteka UI
- **Vite 5.1.1** - Build tool i dev server
- **React Router 7.11.0** - Routing

### Styling

- **Styled Components 6.1.19** - CSS-in-JS
- **System motywów** - Jasny/ciemny tryb

### Forms & Validation

- **React Hook Form 7.69.0** - Zarządzanie formularzami
- **Zod 4.2.1** - Walidacja schematów

### HTTP & State

- **Axios 1.13.2** - HTTP client
- **Context API** - State management
- **JSON Server** - Mock backend

### UX & Notifications

- **Notistack 3.0.2** - Toast notifications
- **Custom loading states** - UX feedback
