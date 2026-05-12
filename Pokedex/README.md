# 🐾 Pokédex - React Battle Arena

Nowoczesna aplikacja Pokédex zbudowana w React z funkcjonalnością walk między Pokémonami, systemem zarządzania ulubionych oraz trybami jasny/ciemny.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1.1-646CFF?logo=vite)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.19-DB7093?logo=styled-components)

## 🚀 Szybki start

### Wymagania

- Node.js (wersja 18+ zalecana)
- npm

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

3. **Uruchomienie aplikacji (frontend + backend jednocześnie)**

   ```bash
   npm run dev:all
   ```

   Lub osobno w dwóch terminalach:

   ```bash
   npm run dev:api   # JSON Server na porcie 3001
   npm run dev       # React dev server
   ```

4. **Dostęp do aplikacji**
   - Frontend: `http://localhost:5173` (lub kolejny wolny port)
   - Backend API: `http://localhost:3001`

## 📋 Dostępne komendy

```bash
npm run dev        # Uruchomienie serwera deweloperskiego (tylko frontend)
npm run dev:api    # Uruchomienie JSON Server (backend)
npm run dev:all    # Uruchomienie frontendu i backendu jednocześnie
npm run build      # Budowanie wersji produkcyjnej
npm run preview    # Podgląd wersji produkcyjnej
npm run lint       # Sprawdzanie kodu ESLintem
```

## 🎯 Funkcjonalności

### 🏠 Główna strona (publiczna)

- **Lista Pokémonów** pobieranych z PokeAPI (150 pokémonów) połączona z danymi z JSON Server
- **Paginacja** z nawigacją między stronami
- **Wyszukiwanie** Pokémonów po nazwie
- **Dodawanie do ulubionych** (wymaga zalogowania)
- **Przejście do szczegółów** każdego Pokémona

### ⚔️ Arena walk (wymaga zalogowania)

- **Dodawanie Pokémonów** do areny (maksymalnie 2)
- **System walk** oparty na statystykach (HP, atak, obrona, szybkość)
- **Wyniki walk** z powiadomieniami toast (zwycięstwo, porażka, remis)
- **Powiadomienie notistack przy remisie** - żaden pokémon nie otrzymuje punktów
- **Aktualizacja statystyk** po walkach zapisywana w JSON Server

### ❤️ Ulubione (wymaga zalogowania)

- **Lista ulubionych** Pokémonów filtrowana z głównej kolekcji
- **Flaga `isFavorite`** przechowywana bezpośrednio w rekordzie Pokémona (jeden rekord = jedno źródło prawdy)
- **Persistencja** przez JSON Server

### 🔧 Zarządzanie Pokémonami (wymaga zalogowania)

- **Tworzenie własnych** Pokémonów z polem `ability`
- **Edycja istniejących** statystyk
- **Lista edycji z paginacją** (10 Pokémonów na stronę)
- **Walidacja formularzy** z react-hook-form i Zod
- **Powiadomienia** o sukcesach/błędach

### 🏆 Ranking (wymaga zalogowania)

- **Sortowanie** Pokémonów według różnych statystyk
- **Paginacja** (10 Pokémonów na stronę) z zachowaniem globalnych numerów pozycji
- **Zmiana kryterium sortowania** resetuje stronę do 1

### 🎨 Interfejs i UX

- **System motywów** (jasny/ciemny) z przełącznikiem i etykietą DarkMode/LightMode
- **Zapamiętywanie motywu** w `localStorage`
- **Pełna obsługa dark mode** w: navbarze, kartach, szczegółach Pokémona, formularzach
- **Toast notifications** (notistack) dla feedbacku użytkownika
- **Nawigacja dla gości** - niezalogowani widzą tylko Home/Login/Register

## 🏗️ Architektura projektu

```
src/
├── components/          # Komponenty React
│   ├── forms/          # Formularze (PokemonForm, PokemonForm.styled.js)
│   ├── shared/         # Komponenty współdzielone
│   │   ├── Pagination.jsx          # Komponent paginacji
│   │   ├── Pagination.styled.js    # Style paginacji
│   │   ├── PokemonCard.jsx
│   │   ├── PokemonCard.styled.js
│   │   └── Navbar.jsx / Navbar.styled.js
│   └── subpages/       # Główne strony
│       ├── Arena.jsx
│       ├── CreatePokemon.jsx
│       ├── Edit.jsx
│       ├── EditPokemon.jsx
│       ├── Favourites.jsx
│       ├── Home.jsx
│       ├── PokemonDetails.jsx / PokemonDetails.styled.js
│       └── Ranking.jsx
├── context/            # Context API dla stanu globalnego
│   ├── ArenaContext.jsx      # Stan areny walk
│   ├── AuthContext.jsx       # Autentykacja użytkownika
│   ├── FavouritesContext.jsx # Ulubione (filtrowane z PokemonsContext)
│   ├── PokemonsContext.jsx   # Dystrybuuje dane z hooka do komponentów
│   └── ThemeContext.jsx      # System motywów + localStorage
├── hooks/              # Custom React Hooks
│   └── usePokemonsData.js   # Cała logika pobierania i scalania danych pokémonów
├── router/             # Konfiguracja React Router (AppRouter.jsx z auth guards)
├── services/           # Warstwa API
│   ├── pokeApi.js          # Integracja z PokeAPI
│   └── pokemonsApi.js      # JSON Server API (upsertPokemonByPokemonId)
├── themes/             # Definicje motywów light/dark
└── constants/          # Stałe aplikacji
```

### Baza danych (`db.json`)

JSON Server

## 🔧 Technologie i biblioteki

### Core

- **React 19.2.0** - Biblioteka UI
- **Vite 5.1.1** - Build tool i dev server
- **React Router 7.11.0** - Routing z auth guards

### Styling

- **Styled Components 6.1.19** - CSS-in-JS z pełną obsługą motywów (light/dark)

### Forms & Validation

- **React Hook Form 7.69.0** - Zarządzanie formularzami
- **Zod 4.2.1** - Walidacja schematów

### HTTP & State

- **Axios 1.13.2** - HTTP client
- **Context API + Custom Hooks** - State management
- **JSON Server** - Mock backend

### UX & Notifications

- **Notistack 3.0.2** - Toast notifications (m.in. powiadomienie o remisie w arenie)
