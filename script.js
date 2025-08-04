// Country data with comprehensive list of countries and their flag emojis
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

// Game state
let score = 0;
let currentQuestion = null;
let usedCountries = [];

// DOM elements
let flagEmoji, optionButtons, gameScreen, resultScreen, resultEmoji, resultText, continueBtn, restartBtn, scoreDisplay;

function initElements() {
    flagEmoji = document.getElementById('flag-emoji');
    optionButtons = document.querySelectorAll('.option-btn');
    gameScreen = document.getElementById('game-screen');
    resultScreen = document.getElementById('result-screen');
    resultEmoji = document.getElementById('result-emoji');
    resultText = document.getElementById('result-text');
    continueBtn = document.getElementById('continue-btn');
    restartBtn = document.getElementById('restart-btn');
    scoreDisplay = document.getElementById('score');
}

function initEventListeners() {
    optionButtons.forEach(btn => {
        btn.addEventListener('click', handleAnswer);
    });
    
    continueBtn.addEventListener('click', continueGame);
    restartBtn.addEventListener('click', restartGame);
}

function getRandomCountries(count) {
    const availableCountries = countries.filter(country => 
        !usedCountries.includes(country.name)
    );
    
    if (availableCountries.length < count) {
        usedCountries = [];
        return getRandomCountries(count);
    }
    
    const shuffled = [...availableCountries].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function startNewQuestion() {
    const questionCountries = getRandomCountries(4);
    const correctCountry = questionCountries[Math.floor(Math.random() * 4)];
    
    currentQuestion = {
        correct: correctCountry,
        options: questionCountries
    };
    
    usedCountries.push(correctCountry.name);
    
    flagEmoji.textContent = correctCountry.flag;
    
    optionButtons.forEach((btn, index) => {
        btn.textContent = questionCountries[index].name;
        btn.className = 'option-btn';
        btn.disabled = false;
        btn.dataset.answer = index;
    });
    
    showScreen('game');
}

function handleAnswer(e) {
    const selectedIndex = parseInt(e.target.dataset.answer);
    const selectedCountry = currentQuestion.options[selectedIndex];
    const isCorrect = selectedCountry.name === currentQuestion.correct.name;
    
    optionButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (currentQuestion.options[index].name === currentQuestion.correct.name) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    setTimeout(() => {
        if (isCorrect) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
    }, 1000);
}

function handleCorrectAnswer() {
    score++;
    updateScore();
    
    resultEmoji.textContent = '✅';
    resultText.textContent = 'Correct!';
    continueBtn.classList.remove('hidden');
    restartBtn.classList.add('hidden');
    
    showScreen('result');
}

function handleIncorrectAnswer() {
    resultEmoji.textContent = '❌';
    resultText.textContent = `Wrong! It was ${currentQuestion.correct.name}`;
    continueBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    
    showScreen('result');
}

function continueGame() {
    startNewQuestion();
}

function restartGame() {
    score = 0;
    usedCountries = [];
    updateScore();
    startNewQuestion();
}

function updateScore() {
    scoreDisplay.textContent = score;
}

function showScreen(screenName) {
    if (screenName === 'game') {
        gameScreen.classList.remove('hidden');
        resultScreen.classList.add('hidden');
    } else if (screenName === 'result') {
        gameScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
    }
}

function initGame() {
    initElements();
    initEventListeners();
    startNewQuestion();
}

document.addEventListener('DOMContentLoaded', initGame);