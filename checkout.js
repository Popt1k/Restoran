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

document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    const checkoutForm = document.getElementById('checkoutForm');

    if (!currentUser) {
        window.location.href = 'auth.html';
        return;
    }


    function displayCartItems() {
        orderItems.innerHTML = '';
        
        if (!currentUser.cart || currentUser.cart.length === 0) {
            orderItems.innerHTML = '<p class="empty-cart">Ваша корзина пуста</p>';
            return;
        }

        let totalPrice = 0;
        currentUser.cart.forEach(item => {
            const product = products.find(p => p.id === item.product_id);
            if (product) {
                const itemTotal = product.price * item.quantity;
                totalPrice += itemTotal;

                const itemElement = document.createElement('div');
                itemElement.className = 'order-item';
                itemElement.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <span class="product-name">${product.name}</span>
                        <span class="product-quantity">${item.quantity} × ${product.price}руб</span>
                    </div>
                    <div class="product-total">${itemTotal.toFixed(2)} руб</div>
                `;
                orderItems.appendChild(itemElement);
            }
        });
        orderTotal.innerHTML = `Итого: ${totalPrice.toFixed(2)}руб`;
    }

    displayCartItems();


    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
 
        alert('Заказ оформлен! Спасибо за покупку.');
        

        currentUser.cart = [];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex >= 0) {
            users[userIndex] = currentUser;
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        window.location.href = 'index.html';
    });
});