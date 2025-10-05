document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'map.html';
    } else {
        errorMessage.textContent = 'Ongeldige gebruikersnaam of wachtwoord';
        
        const loginCard = document.querySelector('.login-card');
        loginCard.style.animation = 'shake 0.5s';
        setTimeout(() => {
            loginCard.style.animation = '';
        }, 500);
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);