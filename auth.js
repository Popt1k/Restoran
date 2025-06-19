
document.addEventListener('DOMContentLoaded', function() {

    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            

            tabBtns.forEach(b => b.classList.remove('active'));
            authForms.forEach(form => form.classList.remove('active'));
            

            this.classList.add('active');
            document.getElementById(`${tabId}Form`).classList.add('active');
        });
    });
    

    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        

        if (password !== confirmPassword) {
            showMessage('Пароли не совпадают', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('Пароль должен содержать минимум 6 символов', 'error');
            return;
        }
        

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);
        
        if (userExists) {
            showMessage('Пользователь с таким email уже существует', 'error');
            return;
        }
        

        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
            cart: []
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        

        localStorage.setItem('currentUser', JSON.stringify(newUser));
        showMessage('Регистрация прошла успешно!', 'success');
        

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });
    

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            showMessage('Вход выполнен успешно!', 'success');
            

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            showMessage('Неверный email или пароль', 'error');
        }
    });
    

    function showMessage(text, type) {

        const oldMessage = document.querySelector('.auth-message');
        if (oldMessage) oldMessage.remove();
        
        const message = document.createElement('div');
        message.className = `auth-message ${type}`;
        message.textContent = text;
        
        const authContent = document.querySelector('.auth-content');
        authContent.appendChild(message);
    }
    

    if (localStorage.getItem('currentUser')) {
        window.location.href = 'index.html';
    }
});