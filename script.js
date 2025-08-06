// Import Firebase from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getDatabase, ref, set, onValue, push } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js';
import { initializeAppCheck, ReCaptchaV3Provider } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-check.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw0pPlQ3K0liSxPdXnlVYKd8lz0hiWNw0",
  authDomain: "mtjody-vercel-app.firebaseapp.com",
  databaseURL: "https://mtjody-vercel-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mtjody-vercel-app",
  storageBucket: "mtjody-vercel-app.firebasestorage.app",
  messagingSenderId: "795359187531",
  appId: "1:795359187531:web:ba36772eaae4b0214633ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize App Check for development (skip ReCaptcha for now)
try {
    // For development, we'll use debug mode
    // self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    
    const appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('6LflfpwrAAAAAM2-Nb1m_zCI92mPR0i8zICH5eTw'),
        isTokenAutoRefreshEnabled: true
    });
    console.log('✅ App Check initialized');
} catch (error) {
    console.warn('⚠️  App Check initialization failed:', error);
    console.log('Proceeding without App Check...');
}

const db = getDatabase(app);

// Get reference to your scores collection
const scoresRef = ref(db, 'gameScores');

async function addUserToFirebase(name) {
    try {
        console.log('Attempting to add user to Firebase:', name);
        
        // Use the pattern from Firebase docs - get fresh database reference
        const database = getDatabase();
        console.log('Got database reference');
        
        // Generate a new key under gameScores
        const newUserRef = push(ref(database, 'gameScores'));
        currentUserKey = newUserRef.key;
        console.log('Generated user key:', currentUserKey);
        
        console.log('About to call set() with data:', { name: name, score: 0 });
        
        // Use the docs pattern: set(ref(db, path), data)
        await set(ref(database, 'gameScores/' + currentUserKey), {
            name: name,
            score: 0
        });
        
        console.log('✅ User added to Firebase successfully:', name, 'with key:', currentUserKey);
        
        // Store the reference for future use
        currentUserRef = ref(database, 'gameScores/' + currentUserKey);
        
        // Listen to this user's score for real-time updates
        listenToUserScore();
        
        // Save the user key to localStorage for persistence
        localStorage.setItem('firebaseUserKey', currentUserKey);
        
    } catch (error) {
        console.error('❌ Error adding user to Firebase:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
    }
}

function listenToUserScore() {
    if (currentUserKey) {
        const userScoreRef = ref(db, `gameScores/${currentUserKey}/score`);
        onValue(userScoreRef, (snapshot) => {
            const firebaseScore = snapshot.val();
            if (firebaseScore !== null && firebaseScore !== score) {
                score = firebaseScore;
                scoreDisplay.textContent = score;
            }
        });
    }
}

function updateScoreInFirebase(newScore) {
    console.log('Attempting to update score to:', newScore, 'for user:', currentUserKey || 'no user');
    if (currentUserKey) {
        const database = getDatabase();
        const scoreRef = ref(database, `gameScores/${currentUserKey}/score`);
        set(scoreRef, newScore).then(() => {
            console.log('✅ Score updated in Firebase successfully to:', newScore);
        }).catch((error) => {
            console.error('❌ Error updating score in Firebase:', error);
        });
    } else {
        console.warn('No currentUserKey available for score update');
    }
}

function listenToAllScores(callback) {
    console.log('Setting up listener for all scores');
    onValue(scoresRef, (snapshot) => {
        const allScores = snapshot.val();
        console.log('Received scores from Firebase:', allScores);
        if (allScores) {
            const scoresArray = Object.values(allScores);
            console.log('Converted to array:', scoresArray);
            callback(scoresArray);
        } else {
            console.log('No scores found in Firebase');
            callback([]);
        }
    });
}

const countries = [
    { name: 'Afghanistan', flag: '🇦🇫' },
    { name: 'Albania', flag: '🇦🇱' },
    { name: 'Algeria', flag: '🇩🇿' },
    { name: 'Andorra', flag: '🇦🇩' },
    { name: 'Angola', flag: '🇦🇴' },
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Armenia', flag: '🇦🇲' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Austria', flag: '🇦🇹' },
    { name: 'Azerbaijan', flag: '🇦🇿' },
    { name: 'Bahamas', flag: '🇧🇸' },
    { name: 'Bahrain', flag: '🇧🇭' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Barbados', flag: '🇧🇧' },
    { name: 'Belarus', flag: '🇧🇾' },
    { name: 'Belgium', flag: '🇧🇪' },
    { name: 'Belize', flag: '🇧🇿' },
    { name: 'Benin', flag: '🇧🇯' },
    { name: 'Bhutan', flag: '🇧🇹' },
    { name: 'Bolivia', flag: '🇧🇴' },
    { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { name: 'Botswana', flag: '🇧🇼' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Brunei', flag: '🇧🇳' },
    { name: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Burkina Faso', flag: '🇧🇫' },
    { name: 'Burundi', flag: '🇧🇮' },
    { name: 'Cambodia', flag: '🇰🇭' },
    { name: 'Cameroon', flag: '🇨🇲' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Cape Verde', flag: '🇨🇻' },
    { name: 'Central African Republic', flag: '🇨🇫' },
    { name: 'Chad', flag: '🇹🇩' },
    { name: 'Chile', flag: '🇨🇱' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Comoros', flag: '🇰🇲' },
    { name: 'Congo', flag: '🇨🇬' },
    { name: 'Costa Rica', flag: '🇨🇷' },
    { name: 'Croatia', flag: '🇭🇷' },
    { name: 'Cuba', flag: '🇨🇺' },
    { name: 'Cyprus', flag: '🇨🇾' },
    { name: 'Czech Republic', flag: '🇨🇿' },
    { name: 'Denmark', flag: '🇩🇰' },
    { name: 'Djibouti', flag: '🇩🇯' },
    { name: 'Dominica', flag: '🇩🇲' },
    { name: 'Dominican Republic', flag: '🇩🇴' },
    { name: 'Ecuador', flag: '🇪🇨' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'El Salvador', flag: '🇸🇻' },
    { name: 'Equatorial Guinea', flag: '🇬🇶' },
    { name: 'Eritrea', flag: '🇪🇷' },
    { name: 'Estonia', flag: '🇪🇪' },
    { name: 'Eswatini', flag: '🇸🇿' },
    { name: 'Ethiopia', flag: '🇪🇹' },
    { name: 'Fiji', flag: '🇫🇯' },
    { name: 'Finland', flag: '🇫🇮' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Gabon', flag: '🇬🇦' },
    { name: 'Gambia', flag: '🇬🇲' },
    { name: 'Georgia', flag: '🇬🇪' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Greece', flag: '🇬🇷' },
    { name: 'Grenada', flag: '🇬🇩' },
    { name: 'Guatemala', flag: '🇬🇹' },
    { name: 'Guinea', flag: '🇬🇳' },
    { name: 'Guinea-Bissau', flag: '🇬🇼' },
    { name: 'Guyana', flag: '🇬🇾' },
    { name: 'Haiti', flag: '🇭🇹' },
    { name: 'Honduras', flag: '🇭🇳' },
    { name: 'Hungary', flag: '🇭🇺' },
    { name: 'Iceland', flag: '🇮🇸' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Indonesia', flag: '🇮🇩' },
    { name: 'Iran', flag: '🇮🇷' },
    { name: 'Iraq', flag: '🇮🇶' },
    { name: 'Ireland', flag: '🇮🇪' },
    { name: 'Israel', flag: '🇮🇱' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Ivory Coast', flag: '🇨🇮' },
    { name: 'Jamaica', flag: '🇯🇲' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Jordan', flag: '🇯🇴' },
    { name: 'Kazakhstan', flag: '🇰🇿' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Kiribati', flag: '🇰🇮' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Kyrgyzstan', flag: '🇰🇬' },
    { name: 'Laos', flag: '🇱🇦' },
    { name: 'Latvia', flag: '🇱🇻' },
    { name: 'Lebanon', flag: '🇱🇧' },
    { name: 'Lesotho', flag: '🇱🇸' },
    { name: 'Liberia', flag: '🇱🇷' },
    { name: 'Libya', flag: '🇱🇾' },
    { name: 'Liechtenstein', flag: '🇱🇮' },
    { name: 'Lithuania', flag: '🇱🇹' },
    { name: 'Luxembourg', flag: '🇱🇺' },
    { name: 'Madagascar', flag: '🇲🇬' },
    { name: 'Malawi', flag: '🇲🇼' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Maldives', flag: '🇲🇻' },
    { name: 'Mali', flag: '🇲🇱' },
    { name: 'Malta', flag: '🇲🇹' },
    { name: 'Marshall Islands', flag: '🇲🇭' },
    { name: 'Mauritania', flag: '🇲🇷' },
    { name: 'Mauritius', flag: '🇲🇺' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Micronesia', flag: '🇫🇲' },
    { name: 'Moldova', flag: '🇲🇩' },
    { name: 'Monaco', flag: '🇲🇨' },
    { name: 'Mongolia', flag: '🇲🇳' },
    { name: 'Montenegro', flag: '🇲🇪' },
    { name: 'Morocco', flag: '🇲🇦' },
    { name: 'Mozambique', flag: '🇲🇿' },
    { name: 'Myanmar', flag: '🇲🇲' },
    { name: 'Namibia', flag: '🇳🇦' },
    { name: 'Nauru', flag: '🇳🇷' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'Nicaragua', flag: '🇳🇮' },
    { name: 'Niger', flag: '🇳🇪' },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'North Korea', flag: '🇰🇵' },
    { name: 'North Macedonia', flag: '🇲🇰' },
    { name: 'Norway', flag: '🇳🇴' },
    { name: 'Oman', flag: '🇴🇲' },
    { name: 'Pakistan', flag: '🇵🇰' },
    { name: 'Palau', flag: '🇵🇼' },
    { name: 'Panama', flag: '🇵🇦' },
    { name: 'Papua New Guinea', flag: '🇵🇬' },
    { name: 'Paraguay', flag: '🇵🇾' },
    { name: 'Peru', flag: '🇵🇪' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Romania', flag: '🇷🇴' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'Rwanda', flag: '🇷🇼' },
    { name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { name: 'Saint Lucia', flag: '🇱🇨' },
    { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { name: 'Samoa', flag: '🇼🇸' },
    { name: 'San Marino', flag: '🇸🇲' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Senegal', flag: '🇸🇳' },
    { name: 'Serbia', flag: '🇷🇸' },
    { name: 'Seychelles', flag: '🇸🇨' },
    { name: 'Sierra Leone', flag: '🇸🇱' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Slovakia', flag: '🇸🇰' },
    { name: 'Slovenia', flag: '🇸🇮' },
    { name: 'Solomon Islands', flag: '🇸🇧' },
    { name: 'Somalia', flag: '🇸🇴' },
    { name: 'South Africa', flag: '🇿🇦' },
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'South Sudan', flag: '🇸🇸' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'Sudan', flag: '🇸🇩' },
    { name: 'Suriname', flag: '🇸🇷' },
    { name: 'Sweden', flag: '🇸🇪' },
    { name: 'Switzerland', flag: '🇨🇭' },
    { name: 'Syria', flag: '🇸🇾' },
    { name: 'Taiwan', flag: '🇹🇼' },
    { name: 'Tajikistan', flag: '🇹🇯' },
    { name: 'Tanzania', flag: '🇹🇿' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Timor-Leste', flag: '🇹🇱' },
    { name: 'Togo', flag: '🇹🇬' },
    { name: 'Tonga', flag: '🇹🇴' },
    { name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { name: 'Tunisia', flag: '🇹🇳' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'Turkmenistan', flag: '🇹🇲' },
    { name: 'Tuvalu', flag: '🇹🇻' },
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'Ukraine', flag: '🇺🇦' },
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Uruguay', flag: '🇺🇾' },
    { name: 'Uzbekistan', flag: '🇺🇿' },
    { name: 'Vanuatu', flag: '🇻🇺' },
    { name: 'Vatican City', flag: '🇻🇦' },
    { name: 'Venezuela', flag: '🇻🇪' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Yemen', flag: '🇾🇪' },
    { name: 'Zambia', flag: '🇿🇲' },
    { name: 'Zimbabwe', flag: '🇿🇼' }
];

const targetCountries = new Set([
    'Argentina',
    'Austria', 
    'Bahrain',
    'Belgium',
    'Brazil',
    'Bulgaria',
    'Cambodia',
    'Cape Verde',
    'China',
    'Colombia',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'India',
    'Iran',
    'Ireland',
    'Italy',
    'Jordan',
    'Kuwait',
    'Latvia',
    'Lebanon',
    'Lithuania',
    'Luxembourg',
    'Montenegro',
    'Morocco',
    'Netherlands',
    'Oman',
    'Peru',
    'Poland',
    'Portugal',
    'Romania',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sweden',
    'Tanzania',
    'Thailand',
    'Tunisia',
    'Turkey',
    'Uganda',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Vatican City',
    'Vietnam',
    'Norway'
]);

let score = 0;
let clickedCountries = new Set();
let playerName = '';
let currentUserRef = null;
let currentUserKey = null;

let scoreDisplay, countriesGrid, newGameBtn;
let welcomeScreen, gameScreen, playerNameInput, startGameBtn, playerDisplay;

const STORAGE_KEY = 'gridFlagQuizData';


function saveGameData() {
    const gameData = {
        playerName: playerName,
        score: score,
        clickedCountries: Array.from(clickedCountries)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameData));
}

function loadGameData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const gameData = JSON.parse(saved);
            return {
                playerName: gameData.playerName || '',
                score: gameData.score || 0,
                clickedCountries: new Set(gameData.clickedCountries || [])
            };
        }
    } catch (error) {
        console.warn('Failed to load game data:', error);
    }
    return null;
}

function clearGameData() {
    localStorage.removeItem(STORAGE_KEY);
}

function initElements() {
    scoreDisplay = document.getElementById('score');
    countriesGrid = document.getElementById('countries-grid');
    newGameBtn = document.getElementById('new-game-btn');
    welcomeScreen = document.getElementById('welcome-screen');
    gameScreen = document.getElementById('game-screen');
    playerNameInput = document.getElementById('player-name');
    startGameBtn = document.getElementById('start-game-btn');
    playerDisplay = document.getElementById('player-display');
}

function initEventListeners() {
    newGameBtn.addEventListener('click', startNewGame);
    startGameBtn.addEventListener('click', handleStartGame);
    
    playerNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleStartGame();
        }
    });
}

function handleStartGame() {
    const name = playerNameInput.value.trim();
    
    if (name === '') {
        playerNameInput.focus();
        playerNameInput.style.borderColor = '#dc3545';
        setTimeout(() => {
            playerNameInput.style.borderColor = '#e9ecef';
        }, 2000);
        return;
    }
    
    playerName = name;
    playerDisplay.textContent = playerName;
    
    // Add user to Firebase when they start the game
    if (name.toLowerCase() !== 'admin') {
        addUserToFirebase(name);
    }
    
    welcomeScreen.style.display = 'none';
    gameScreen.classList.remove('hidden');
    
    if (name.toLowerCase() === 'admin') {
        showAdminTable();
    } else {
        renderGrid();
    }
    saveGameData();
}

function createCountryItem(country) {
    const item = document.createElement('div');
    item.className = 'country-item';
    item.dataset.countryName = country.name;
    
    const flagEmoji = document.createElement('div');
    flagEmoji.className = 'flag-emoji';
    flagEmoji.textContent = country.flag;
    
    const countryName = document.createElement('div');
    countryName.className = 'country-name';
    countryName.textContent = country.name;
    
    item.appendChild(flagEmoji);
    item.appendChild(countryName);
    
    item.addEventListener('click', handleCountryClick);
    
    return item;
}

function handleCountryClick(e) {
    const item = e.currentTarget;
    const countryName = item.dataset.countryName;
    
    if (clickedCountries.has(countryName)) {
        return;
    }
    
    clickedCountries.add(countryName);
    
    const flagEmoji = item.querySelector('.flag-emoji');
    
    if (targetCountries.has(countryName)) {
        item.classList.add('correct');
        flagEmoji.textContent = '✅';
        score += 1;
    } else {
        item.classList.add('incorrect');
        flagEmoji.textContent = '❌';
        score -= 2;
    }
    
    updateScore();
    saveGameData();
}

function renderGrid() {
    countriesGrid.innerHTML = '';
    
    countries.forEach(country => {
        const item = createCountryItem(country);
        
        if (clickedCountries.has(country.name)) {
            const flagEmoji = item.querySelector('.flag-emoji');
            if (targetCountries.has(country.name)) {
                item.classList.add('correct');
                flagEmoji.textContent = '✅';
            } else {
                item.classList.add('incorrect');
                flagEmoji.textContent = '❌';
            }
        }
        
        countriesGrid.appendChild(item);
    });
}

function startNewGame() {
    clickedCountries = new Set();
    score = 0;
    updateScore();
    renderGrid();
    saveGameData();
}

function updateScore() {
    scoreDisplay.textContent = score;
    updateScoreInFirebase(score);
}

function showAdminTable() {
    const adminTable = document.getElementById('admin-table');
    const adminTableBody = document.getElementById('admin-table-body');
    const countriesGrid = document.getElementById('countries-grid');
    const gameControls = document.querySelector('.game-controls');
    
    // Hide grid and controls
    countriesGrid.style.display = 'none';
    gameControls.style.display = 'none';
    
    // Clear existing table body
    adminTableBody.innerHTML = '';
    
    // Listen to Firebase scores for real-time leaderboard
    listenToAllScores((scoresArray) => {
        // Sort by score (highest to lowest)
        const sortedData = scoresArray.sort((a, b) => b.score - a.score);
        
        // Clear table body before repopulating
        adminTableBody.innerHTML = '';
        
        // Populate table with Firebase data
        sortedData.forEach(user => {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;
            
            const scoreCell = document.createElement('td');
            scoreCell.textContent = user.score;
            
            row.appendChild(nameCell);
            row.appendChild(scoreCell);
            adminTableBody.appendChild(row);
        });
    });
    
    // Show admin table
    adminTable.classList.remove('hidden');
}

function initGame() {
    initElements();
    initEventListeners();
    
    const savedData = loadGameData();
    if (savedData && savedData.playerName) {
        playerName = savedData.playerName;
        score = savedData.score;
        clickedCountries = savedData.clickedCountries;
        
        // Restore Firebase user reference if available
        const savedUserKey = localStorage.getItem('firebaseUserKey');
        if (savedUserKey && playerName.toLowerCase() !== 'admin') {
            currentUserKey = savedUserKey;
            currentUserRef = ref(db, `gameScores/${currentUserKey}`);
            console.log('Restored Firebase user ref:', currentUserKey);
            listenToUserScore();
        }
        
        playerDisplay.textContent = playerName;
        updateScore();
        
        welcomeScreen.style.display = 'none';
        gameScreen.classList.remove('hidden');
        
        if (playerName.toLowerCase() === 'admin') {
            showAdminTable();
        } else {
            renderGrid();
        }
    } else {
        playerNameInput.focus();
    }
}

document.addEventListener('DOMContentLoaded', initGame);
