// Dados simulados para o aplicativo
const restaurants = [
    {
        id: 1,
        name: 'Restaurante Italiano',
        cuisine: 'Italiana',
        rating: 4.5,
        price_range: '€€€',
        address: 'Rua das Flores, 123',
        phone: '+351 21 123 4567',
        email: 'info@italiano.pt',
        description: 'Autêntica cozinha italiana com ingredientes frescos e receitas tradicionais.',
        image_url: 'img/restaurant1.jpg',
        is_open: true,
        opening_hours: {
            monday: '12:00-15:00,19:00-23:00',
            tuesday: '12:00-15:00,19:00-23:00',
            wednesday: '12:00-15:00,19:00-23:00',
            thursday: '12:00-15:00,19:00-23:00',
            friday: '12:00-15:00,19:00-24:00',
            saturday: '12:00-15:00,19:00-24:00',
            sunday: '12:00-15:00,19:00-23:00'
        },
        specialties: ['Pizza Margherita', 'Pasta Carbonara', 'Risotto ai Funghi']
    },
    {
        id: 2,
        name: 'Sushi Bar',
        cuisine: 'Japonesa',
        rating: 4.8,
        price_range: '€€€€',
        address: 'Av. Principal, 456',
        phone: '+351 21 234 5678',
        email: 'reservas@sushibar.pt',
        description: 'Sushi fresco e sashimi de alta qualidade preparado por chefs experientes.',
        image_url: 'img/restaurant2.jpg',
        is_open: true,
        opening_hours: {
            monday: 'Fechado',
            tuesday: '18:00-23:00',
            wednesday: '18:00-23:00',
            thursday: '18:00-23:00',
            friday: '18:00-24:00',
            saturday: '18:00-24:00',
            sunday: '18:00-23:00'
        },
        specialties: ['Sushi Variado', 'Sashimi Premium', 'Tempura de Camarão']
    },
    {
        id: 3,
        name: 'Churrasqueira Premium',
        cuisine: 'Brasileira',
        rating: 4.3,
        price_range: '€€€',
        address: 'Praça Central, 789',
        phone: '+351 21 345 6789',
        email: 'contato@churrasco.pt',
        description: 'Churrasco brasileiro autêntico com carnes nobres e buffet variado.',
        image_url: 'img/restaurant3.jpg',
        is_open: false,
        opening_hours: {
            monday: '12:00-15:00,19:00-23:00',
            tuesday: '12:00-15:00,19:00-23:00',
            wednesday: '12:00-15:00,19:00-23:00',
            thursday: '12:00-15:00,19:00-23:00',
            friday: '12:00-15:00,19:00-24:00',
            saturday: '12:00-24:00',
            sunday: '12:00-22:00'
        },
        specialties: ['Picanha na Brasa', 'Costela de Porco', 'Linguiça Artesanal']
    },
    {
        id: 4,
        name: 'Bistro Francês',
        cuisine: 'Francesa',
        rating: 4.6,
        price_range: '€€€€',
        address: 'Rua Elegante, 321',
        phone: '+351 21 456 7890',
        email: 'bonjour@bistro.pt',
        description: 'Culinária francesa refinada em ambiente acolhedor e elegante.',
        image_url: 'img/restaurant4.jpg',
        is_open: true,
        opening_hours: {
            monday: 'Fechado',
            tuesday: '19:00-23:00',
            wednesday: '19:00-23:00',
            thursday: '19:00-23:00',
            friday: '19:00-24:00',
            saturday: '19:00-24:00',
            sunday: '19:00-23:00'
        },
        specialties: ['Coq au Vin', 'Ratatouille Provençal', 'Crème Brûlée']
    }
];

// Reservas simuladas
let reservations = [
    {
        id: 1,
        user_id: 1,
        restaurant_id: 1,
        restaurant_name: 'Restaurante Italiano',
        restaurant_address: 'Rua das Flores, 123',
        date: '2024-01-15',
        time: '19:30',
        guests: 4,
        status: 'confirmed',
        special_requests: 'Mesa próxima à janela'
    },
    {
        id: 2,
        user_id: 1,
        restaurant_id: 2,
        restaurant_name: 'Sushi Bar',
        restaurant_address: 'Av. Principal, 456',
        date: '2024-01-20',
        time: '20:00',
        guests: 2,
        status: 'pending',
        special_requests: ''
    },
    {
        id: 3,
        user_id: 1,
        restaurant_id: 3,
        restaurant_name: 'Churrasqueira Premium',
        restaurant_address: 'Praça Central, 789',
        date: '2024-01-10',
        time: '18:00',
        guests: 6,
        status: 'completed',
        special_requests: 'Aniversário - bolo de sobremesa'
    }
];

// Estado da aplicação
let appState = {
    currentPage: 'home',
    isLoggedIn: false,
    currentUser: null,
    selectedRestaurant: null
};

// Elementos DOM
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
const registerModal = new bootstrap.Modal(document.getElementById('register-modal'));
const restaurantModal = new bootstrap.Modal(document.getElementById('restaurant-modal'));
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const reservationForm = document.getElementById('reservation-form');
const exploreBtn = document.getElementById('explore-btn');
const featuredRestaurantsContainer = document.getElementById('featured-restaurants');
const restaurantsListContainer = document.getElementById('restaurants-list');
const reservationsListContainer = document.getElementById('reservations-list');
const loginAlert = document.getElementById('login-alert');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cuisineFilter = document.getElementById('cuisine-filter');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carregar restaurantes em destaque
    loadFeaturedRestaurants();
    
    // Carregar todos os restaurantes
    loadRestaurants();
    
    // Configurar eventos
    setupEventListeners();
});

// Carregar restaurantes em destaque
function loadFeaturedRestaurants() {
    // Selecionar 3 restaurantes aleatórios para destaque
    const featured = [...restaurants].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    featuredRestaurantsContainer.innerHTML = '';
    
    featured.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        featuredRestaurantsContainer.appendChild(restaurantCard);
    });
}

// Carregar todos os restaurantes
function loadRestaurants(filter = '', cuisine = 'all') {
    restaurantsListContainer.innerHTML = '';
    
    const filteredRestaurants = restaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
                             restaurant.cuisine.toLowerCase().includes(filter.toLowerCase()) ||
                             restaurant.description.toLowerCase().includes(filter.toLowerCase());
        
        const matchesCuisine = cuisine === 'all' || restaurant.cuisine.toLowerCase() === cuisine.toLowerCase();
        
        return matchesSearch && matchesCuisine;
    });
    
    if (filteredRestaurants.length === 0) {
        restaurantsListContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info">
                    Nenhum restaurante encontrado com os critérios selecionados.
                </div>
            </div>
        `;
        return;
    }
    
    filteredRestaurants.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        restaurantsListContainer.appendChild(restaurantCard);
    });
}

// Criar card de restaurante
function createRestaurantCard(restaurant) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    
    // Gerar estrelas para avaliação
    const stars = generateRatingStars(restaurant.rating);
    
    // Status do restaurante (aberto/fechado)
    const statusClass = restaurant.is_open ? 'status-open' : 'status-closed';
    const statusText = restaurant.is_open ? 'Aberto' : 'Fechado';
    
    col.innerHTML = `
        <div class="card restaurant-card h-100">
            <img src="${restaurant.image_url}" class="card-img-top restaurant-image" alt="${restaurant.name}">
            <div class="card-body">
                <h5 class="card-title">${restaurant.name}</h5>
                <p class="card-text restaurant-cuisine">${restaurant.cuisine} • ${restaurant.price_range}</p>
                <div class="restaurant-rating">
                    <div class="rating-stars">${stars}</div>
                    <span>${restaurant.rating}</span>
                </div>
                <p class="card-text">${restaurant.address}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="restaurant-status ${statusClass}">${statusText}</span>
                    <button class="btn btn-sm btn-outline-primary reserve-btn" data-id="${restaurant.id}">Reservar</button>
                </div>
            </div>
        </div>
    `;
    
    // Adicionar evento ao botão de reserva
    col.querySelector('.reserve-btn').addEventListener('click', () => {
        openRestaurantModal(restaurant);
    });
    
    return col;
}

// Gerar estrelas para avaliação
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Meia estrela
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Carregar reservas do usuário
function loadReservations() {
    if (!appState.isLoggedIn) {
        loginAlert.classList.remove('d-none');
        reservationsListContainer.classList.add('d-none');
        return;
    }
    
    loginAlert.classList.add('d-none');
    reservationsListContainer.classList.remove('d-none');
    
    reservationsListContainer.innerHTML = '';
    
    if (reservations.length === 0) {
        reservationsListContainer.innerHTML = `
            <div class="alert alert-info">
                Você ainda não tem reservas.
            </div>
        `;
        return;
    }
    
    reservations.forEach(reservation => {
        const statusClass = getStatusClass(reservation.status);
        const statusText = getStatusText(reservation.status);
        
        const reservationCard = document.createElement('div');
        reservationCard.className = `card reservation-card ${reservation.status} mb-3`;
        
        reservationCard.innerHTML = `
            <div class="reservation-header">
                <h5 class="mb-0">${reservation.restaurant_name}</h5>
                <span class="reservation-status ${statusClass}">${statusText}</span>
            </div>
            <div class="reservation-body">
                <div class="row">
                    <div class="col-md-6">
                        <p><i class="far fa-calendar-alt"></i> Data: ${formatDate(reservation.date)}</p>
                        <p><i class="far fa-clock"></i> Horário: ${reservation.time}</p>
                        <p><i class="fas fa-users"></i> Pessoas: ${reservation.guests}</p>
                    </div>
                    <div class="col-md-6">
                        <p><i class="fas fa-map-marker-alt"></i> ${reservation.restaurant_address}</p>
                        <p><i class="fas fa-comment-alt"></i> Observações: ${reservation.special_requests || 'Nenhuma'}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-end mt-3">
                    ${reservation.status === 'pending' ? `
                        <button class="btn btn-sm btn-danger me-2 cancel-btn" data-id="${reservation.id}">Cancelar</button>
                        <button class="btn btn-sm btn-primary edit-btn" data-id="${reservation.id}">Editar</button>
                    ` : ''}
                </div>
            </div>
        `;
        
        // Adicionar eventos aos botões
        if (reservation.status === 'pending') {
            const cancelBtn = reservationCard.querySelector('.cancel-btn');
            const editBtn = reservationCard.querySelector('.edit-btn');
            
            cancelBtn.addEventListener('click', () => {
                cancelReservation(reservation.id);
            });
            
            editBtn.addEventListener('click', () => {
                // Implementar edição de reserva
                alert('Funcionalidade de edição em desenvolvimento');
            });
        }
        
        reservationsListContainer.appendChild(reservationCard);
    });
}

// Obter classe CSS para status da reserva
function getStatusClass(status) {
    switch (status) {
        case 'confirmed': return 'status-confirmed';
        case 'pending': return 'status-pending';
        case 'cancelled': return 'status-cancelled';
        case 'completed': return 'status-confirmed';
        default: return '';
    }
}

// Obter texto para status da reserva
function getStatusText(status) {
    switch (status) {
        case 'confirmed': return 'Confirmada';
        case 'pending': return 'Pendente';
        case 'cancelled': return 'Cancelada';
        case 'completed': return 'Concluída';
        default: return '';
    }
}

// Formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Abrir modal de restaurante
function openRestaurantModal(restaurant) {
    appState.selectedRestaurant = restaurant;
    
    // Preencher dados do restaurante no modal
    document.getElementById('restaurant-name').textContent = restaurant.name;
    document.getElementById('restaurant-image').src = restaurant.image_url;
    document.getElementById('restaurant-rating').innerHTML = generateRatingStars(restaurant.rating);
    document.getElementById('restaurant-cuisine').textContent = `${restaurant.cuisine} • ${restaurant.price_range}`;
    document.getElementById('restaurant-address').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${restaurant.address}`;
    document.getElementById('restaurant-description').textContent = restaurant.description;
    
    // Status do restaurante
    const openStatusEl = document.getElementById('restaurant-open-status');
    if (restaurant.is_open) {
        openStatusEl.innerHTML = '<span class="badge bg-success">Aberto</span>';
    } else {
        openStatusEl.innerHTML = '<span class="badge bg-danger">Fechado</span>';
    }
    
    // Definir data mínima para reserva (hoje)
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('reservation-date').min = today;
    
    // Abrir modal
    restaurantModal.show();
}

// Cancelar reserva
function cancelReservation(reservationId) {
    if (confirm('Tem certeza que deseja cancelar esta reserva?')) {
        // Atualizar status da reserva
        const reservation = reservations.find(r => r.id === reservationId);
        if (reservation) {
            reservation.status = 'cancelled';
            
            // Recarregar reservas
            loadReservations();
            
            // Mostrar mensagem de sucesso
            alert('Reserva cancelada com sucesso!');
        }
    }
}

// Configurar eventos
function setupEventListeners() {
    // Navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.id.split('-')[0]; // Ex: home-link -> home
            navigateTo(targetPage);
        });
    });
    
    // Botão Explorar
    exploreBtn.addEventListener('click', () => {
        navigateTo('restaurants');
    });
    
    // Login e Registro
    loginBtn.addEventListener('click', () => {
        loginModal.show();
    });
    
    registerBtn.addEventListener('click', () => {
        registerModal.show();
    });
    
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.hide();
        setTimeout(() => {
            registerModal.show();
        }, 500);
    });
    
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.hide();
        setTimeout(() => {
            loginModal.show();
        }, 500);
    });
    
    // Formulários
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
    });
    
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleRegister();
    });
    
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleReservation();
    });
    
    // Pesquisa e filtros
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        const cuisine = cuisineFilter.value;
        loadRestaurants(searchTerm, cuisine);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            const cuisine = cuisineFilter.value;
            loadRestaurants(searchTerm, cuisine);
        }
    });
    
    cuisineFilter.addEventListener('change', () => {
        const searchTerm = searchInput.value.trim();
        const cuisine = cuisineFilter.value;
        loadRestaurants(searchTerm, cuisine);
    });
}

// Navegar para página
function navigateTo(page) {
    // Atualizar estado
    appState.currentPage = page;
    
    // Atualizar navegação
    navLinks.forEach(link => {
        if (link.id === `${page}-link`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Mostrar página correta
    pages.forEach(p => {
        if (p.id === `${page}-page`) {
            p.classList.add('active');
        } else {
            p.classList.remove('active');
        }
    });
    
    // Ações específicas por página
    if (page === 'reservations') {
        loadReservations();
    }
}

// Manipular login
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simulação de autenticação
    if (email === 'user@example.com' && password === '123456') {
        appState.isLoggedIn = true;
        appState.currentUser = {
            id: 1,
            name: 'João Silva',
            email: 'user@example.com'
        };
        
        // Atualizar UI
        loginBtn.textContent = 'Minha Conta';
        registerBtn.textContent = 'Sair';
        
        // Fechar modal
        loginModal.hide();
        
        // Mostrar mensagem de boas-vindas
        alert(`Bem-vindo, ${appState.currentUser.name}!`);
    } else {
        alert('Email ou senha incorretos!');
    }
}

// Manipular registro
function handleRegister() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Validação básica
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    // Simulação de registro
    alert(`Conta criada com sucesso para ${name}!`);
    registerModal.hide();
    
    // Redirecionar para login
    setTimeout(() => {
        loginModal.show();
    }, 500);
}

// Manipular reserva
function handleReservation() {
    if (!appState.isLoggedIn) {
        alert('Faça login para realizar uma reserva!');
        restaurantModal.hide();
        setTimeout(() => {
            loginModal.show();
        }, 500);
        return;
    }
    
    const date = document.getElementById('reservation-date').value;
    const time = document.getElementById('reservation-time').value;
    const guests = parseInt(document.getElementById('reservation-guests').value);
    const notes = document.getElementById('reservation-notes').value;
    
    // Criar nova reserva
    const newReservation = {
        id: reservations.length + 1,
        user_id: appState.currentUser.id,
        restaurant_id: appState.selectedRestaurant.id,
        restaurant_name: appState.selectedRestaurant.name,
        restaurant_address: appState.selectedRestaurant.address,
        date: date,
        time: time,
        guests: guests,
        status: 'pending',
        special_requests: notes
    };
    
    // Adicionar à lista de reservas
    reservations.push(newReservation);
    
    // Fechar modal
    restaurantModal.hide();
    
    // Mostrar mensagem de sucesso
    alert('Reserva realizada com sucesso! Aguarde a confirmação do restaurante.');
    
    // Navegar para página de reservas
    navigateTo('reservations');
}

// Imagens placeholder para restaurantes
// Nota: Em um ambiente real, estas seriam imagens reais dos restaurantes
const placeholderImages = [
    'https://via.placeholder.com/300x200/007AFF/FFFFFF?text=Restaurante+Italiano',
    'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Sushi+Bar',
    'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Churrasqueira',
    'https://via.placeholder.com/300x200/FFD93D/FFFFFF?text=Bistro+Francês'
];

// Atualizar URLs de imagens para os placeholders
restaurants.forEach((restaurant, index) => {
    restaurant.image_url = placeholderImages[index % placeholderImages.length];
});
