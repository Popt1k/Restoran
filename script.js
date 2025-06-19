
const products = [
    {
        id: 1,
        name: "Бургер дорблю",
        price: 350,
        image: "1.webp",
        description: "Сочная говяжья котлета с сыром, свежими овощами и фирменным соусом",
        category: "Бургеры"
    },
    {
        id: 2,
        name: "Бургер Лесоруб",
        price: 300,
        image: "3.webp",
        description: "Нежная куриная котлета с хрустящим салатом и медово-горчичным соусом",
        category: "Бургеры"
    },
    {
        id: 3,
        name: "Бургер Шаман",
        price: 330,
        image: "4.webp",
        description: "Нежная куриная котлета с хрустящим салатом и медово-горчичным соусом",
        category: "Бургеры"
    },
    {
        id: 4,
        name: "Бургер Моцарт",
        price: 370,
        image: "5.webp",
        description: "Нежная куриная котлета с хрустящим салатом и медово-горчичным соусом",
        category: "Бургеры"
    },
    {
        id: 5,
        name: "Бургер Таежный",
        price: 300,
        image: "6.webp",
        description: "Нежная куриная котлета с хрустящим салатом и медово-горчичным соусом",
        category: "Бургеры"
    },
    {
        id: 6,
        name: "Бургер Раскольников",
        price: 380,
        image: "7.webp",
        description: "Нежная куриная котлета с хрустящим салатом и медово-горчичным соусом",
        category: "Бургеры"
    },
    {
        id: 7,
        name: "Бургер классический",
        price: 310,
        image: "8.webp",
        description: "Нежная куриная котлета с хрустящим салатом и медово-горчичным соусом",
        category: "Бургеры"
    },
    {
        id: 8,
        name: "Бургер фермерский",
        price: 320,
        image: "9.webp",
        description: "Нежная куриная котлета с хрустящим салатом и медово-горчичным соусом",
        category: "Бургеры"
    },
    {
        id: 9,
        name: "Медово-горчичные",
        price: 480,
        image: "11.webp",
        description: "Хрустящие куриные крылышки в остром соусе Баффало",
        category: "Крылышки"
    },
    {
        id: 10,
        name: "Терияки Юдзу",
        price: 580,
        image: "12.webp",
        description: "Хрустящие куриные крылышки в остром соусе Баффало",
        category: "Крылышки"
    },
    {
        id: 11,
        name: "Мясоруб",
        price: 550,
        image: "13.webp",
        description: "Хрустящие куриные крылышки в остром соусе Баффало",
        category: "Крылышки"
    },
    {
        id: 12,
        name: "Апельсиновый барбекю",
        price: 650,
        image: "14.webp",
        description: "Нежные свиные ребра, запеченные в соусе барбекю",
        category: "Ребра"
    },
    {
        id: 13,
        name: "Кисло-сладкие",
        price: 750,
        image: "15.webp",
        description: "Нежные свиные ребра, запеченные в соусе барбекю",
        category: "Ребра"
    },
    {
        id: 14,
        name: "Терияки",
        price: 750,
        image: "16.webp",
        description: "Нежные свиные ребра, запеченные в соусе барбекю",
        category: "Ребра"
    },
    {
        id: 15,
        name: "Тако с креветкой",
        price: 320,
        image: "17.webp",
        description: "Мексиканские тако с пряной говядиной и овощами",
        category: "Тако"
    },
    {
        id: 16,
        name: "Рваная свинина",
        price: 380,
        image: "18.webp",
        description: "Мексиканские тако с пряной говядиной и овощами",
        category: "Тако"
    },
    {
        id: 17,
        name: "Тако с говядиной",
        price: 340,
        image: "19.webp",
        description: "Мексиканские тако с пряной говядиной и овощами",
        category: "Тако"
    },
    {
        id: 18,
        name: "Тако с курицей",
        price: 330,
        image: "20.webp",
        description: "Мексиканские тако с пряной говядиной и овощами",
        category: "Тако"
    },
    {
        id: 19,
        name: "Сет Тако",
        price: 970,
        image: "21.webp",
        description: "Мексиканские тако с пряной говядиной и овощами",
        category: "Тако"
    },
    {
        id: 20,
        name: "Луковые кольца",
        price: 150,
        image: "22.webp",
        description: "Хрустящий картофель фри с соусами",
        category: "Закуски"
    },
    {
        id: 21,
        name: "Картофель фри",
        price: 90,
        image: "23.webp",
        description: "Хрустящий картофель фри с соусами",
        category: "Закуски"
    },
    {
        id: 22,
        name: "Картофельные дольки",
        price: 190,
        image: "24.webp",
        description: "Хрустящий картофель фри с соусами",
        category: "Закуски"
    },
    {
        id: 23,
        name: "Чикен Боллс",
        price: 180,
        image: "25.webp",
        description: "Хрустящий картофель фри с соусами",
        category: "Закуски"
    },
    {
        id: 24,
        name: "Кентуки",
        price: 250,
        image: "26.webp",
        description: "Салат Цезарь с курицей и соусом",
        category: "Салаты"
    },
    {
        id: 25,
        name: "Рёберное мясо",
        price: 290,
        image: "27.webp",
        description: "Салат Цезарь с курицей и соусом",
        category: "Салаты"
    },
    {
        id: 26,
        name: "Цезарь",
        price: 270,
        image: "28.webp",
        description: "Салат Цезарь с курицей и соусом",
        category: "Салаты"
    },
    {
        id: 27,
        name: "Классический хот-дог",
        price: 290,
        image: "29.webp",
        description: "Хот-дог с сосиской и овощами",
        category: "Хотдоги"
    },
    {
        id: 28,
        name: "Рубленный хот-дог",
        price: 350,
        image: "30.webp",
        description: "Хот-дог с сосиской и овощами",
        category: "Хотдоги"
    },
    {
        id: 29,
        name: "Дерзкий картофель",
        price: 300,
        image: "31.webp",
        description: "Говяжий стейк с овощами",
        category: "Горячие блюда"
    },
    {
        id: 30,
        name: "Стейк из кур.филе",
        price: 500,
        image: "32.webp",
        description: "Говяжий стейк с овощами",
        category: "Горячие блюда"
    },
    {
        id: 31,
        name: "Фирменный бифштекс",
        price: 550,
        image: "33.webp",
        description: "Говяжий стейк с овощами",
        category: "Горячие блюда"
    },
    {
        id: 32,
        name: "Ужин мясоруба",
        price: 430,
        image: "34.webp",
        description: "Говяжий стейк с овощами",
        category: "Горячие блюда"
    }  
];

let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;


const listProductHTML = document.querySelector('.listProduct');
const listCartHTML = document.querySelector('.listCart');
const iconCart = document.querySelector('.icon-cart');
const iconCartSpan = document.querySelector('.icon-cart span');
const body = document.querySelector('body');
const closeCart = document.querySelector('.close');
const checkOutBtn = document.querySelector('.checkOut');
const totalPriceElement = document.querySelector('.total-price');
const authButton = document.createElement('a'); 


const initApp = () => {

    setupAuthButton();
    

    const groupedProducts = {};
    products.forEach(product => {
        if (!groupedProducts[product.category]) {
            groupedProducts[product.category] = [];
        }
        groupedProducts[product.category].push(product);
    });
    

    Object.keys(groupedProducts).forEach(category => {

        const categoryDivider = document.createElement('div');
        categoryDivider.className = 'category-divider';
        categoryDivider.innerHTML = `<h3 class="category-title">${category}</h3>`;
        listProductHTML.appendChild(categoryDivider);
        

        groupedProducts[category].forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <div class="price">${product.price} руб.</div>
                <button class="addCart" data-id="${product.id}">Добавить в корзину</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    });


    addEventListeners();
    

    refreshCart();
};


function setupAuthButton() {
    const authBtnContainer = document.querySelector('.user-auth');
    authBtnContainer.innerHTML = ''; 

    if (currentUser) {

        const profileContainer = document.createElement('div');
        profileContainer.className = 'user-profile';


        if (currentUser.name) {
            const avatar = document.createElement('div');
            avatar.className = 'user-avatar';
            avatar.textContent = currentUser.name.charAt(0).toUpperCase();
            profileContainer.appendChild(avatar);
        }


        const userName = document.createElement('span');
        userName.className = 'user-name';
        userName.textContent = currentUser.name || 'Мой профиль';
        profileContainer.appendChild(userName);


        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'logout-btn';
        logoutBtn.textContent = 'Выйти';
        logoutBtn.addEventListener('click', logout);
        profileContainer.appendChild(logoutBtn);

        authBtnContainer.appendChild(profileContainer);
    } else {

        const authBtn = document.createElement('a');
        authBtn.href = 'auth.html';
        authBtn.className = 'auth-btn';
        authBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
            <span class="auth-text">Войти</span>
        `;
        authBtnContainer.appendChild(authBtn);
    }
}



function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    refreshCart(); 
    authButton.href = 'auth.html';
    authButton.textContent = 'Войти';
    authButton.onclick = null;
    window.location.href = 'index.html';
}


const addEventListeners = () => {

    document.addEventListener('click', (event) => {
        const button = event.target.closest('.addCart');
        if (button) {
            if (!currentUser) {
                alert('Пожалуйста, войдите в систему, чтобы добавлять товары в корзину');
                window.location.href = 'auth.html';
                return;
            }
            
            const productId = parseInt(button.dataset.id);
            addToCart(productId);
        }
        
        const minusBtn = event.target.closest('.minus');
        if (minusBtn) {
            const productId = parseInt(minusBtn.dataset.id);
            changeQuantity(productId, -1);
        }
        
        const plusBtn = event.target.closest('.plus');
        if (plusBtn) {
            const productId = parseInt(plusBtn.dataset.id);
            changeQuantity(productId, 1);
        }
    });


    iconCart.addEventListener('click', () => {
        if (!currentUser) {
            alert('Пожалуйста, войдите в систему, чтобы просмотреть корзину');
            window.location.href = 'auth.html';
            return;
        }
        body.classList.toggle('activeTabCart');
    });

    closeCart.addEventListener('click', () => {
        body.classList.remove('activeTabCart');
    });


    checkOutBtn.addEventListener('click', () => {
        if (!currentUser) {
            alert('Пожалуйста, войдите в систему, чтобы оформить заказ');
            window.location.href = 'auth.html';
            return;
        }
        
        if (currentUser.cart && currentUser.cart.length > 0) {
            window.location.href = 'checkout.html';
        } else {
            alert('Ваша корзина пуста');
        }
    });
};


const addToCart = (productId) => {
    if (!currentUser) return;
    
    let position = currentUser.cart.findIndex(item => item.product_id === productId);
    if (position >= 0) {
        currentUser.cart[position].quantity += 1;
    } else {
        currentUser.cart.push({
            product_id: productId,
            quantity: 1
        });
    }
    

    updateCurrentUser();
    refreshCart();
};


const changeQuantity = (productId, change) => {
    if (!currentUser) return;
    
    let position = currentUser.cart.findIndex(item => item.product_id === productId);
    if (position >= 0) {
        currentUser.cart[position].quantity += change;
        
        if (currentUser.cart[position].quantity <= 0) {
            currentUser.cart.splice(position, 1);
        }
        
        updateCurrentUser();
        refreshCart();
    }
};


function updateCurrentUser() {
    if (!currentUser) return;
    

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex >= 0) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}


const refreshCart = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;

    if (currentUser && currentUser.cart) {
        currentUser.cart.forEach(item => {
            totalQuantity += item.quantity;
            const product = products.find(p => p.id === item.product_id);
            if (product) {
                totalPrice += product.price * item.quantity;

                const cartItem = document.createElement('div');
                cartItem.classList.add('item');
                cartItem.dataset.id = item.product_id;
                cartItem.innerHTML = `
                    <div class="image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="name">${product.name}</div>
                    <div class="totalPrice">${(product.price * item.quantity).toFixed(2)}р</div>
                    <div class="quantity">
                        <span class="minus" data-id="${product.id}">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-id="${product.id}">+</span>
                    </div>
                `;
                listCartHTML.appendChild(cartItem);
            }
        });
    }

    if (iconCartSpan) {
        iconCartSpan.textContent = totalQuantity;
        iconCartSpan.style.display = totalQuantity > 0 ? 'flex' : 'none';
    }
    
    if (totalPriceElement) {
        totalPriceElement.innerHTML = `Итоговая сумма: ${totalPrice.toFixed(2)}руб`;
    }
};


initApp();

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});


backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});