const products = [
  {
    id: 1,
    name: 'Bàn phím cơ Titan V2',
    category: 'keyboard',
    price: 1990000,
    description: 'Switch quang học, LED RGB đa sắc và layout công thái học.',
    emoji: '⌨️',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    specs: ['Switch quang học', 'LED RGB 16.8M màu', 'Kết nối USB-C'],
    status: 'sale',
  },
  {
    id: 2,
    name: 'Chuột gaming Venom X',
    category: 'mouse',
    price: 890000,
    description: 'Cảm biến 16000 DPI, thiết kế 7 nút tiện lợi.',
    emoji: '🖱️',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
    specs: ['Cảm biến 16000 DPI', '7 nút tùy chỉnh', 'Pin 70 giờ'],
    status: 'in-stock',
  },
  {
    id: 3,
    name: 'Tai nghe Mystic One',
    category: 'headset',
    price: 1290000,
    description: 'Âm thanh vòm 7.1, micro khử ồn và tựa đệm êm.',
    emoji: '🎧',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    specs: ['Âm thanh vòm 7.1', 'Mic khử ồn', 'Đệm tai mềm êm'],
    status: 'coming-soon',
  },
  {
    id: 4,
    name: 'Tản nhiệt RGB Frost',
    category: 'cooling',
    price: 720000,
    description: 'Quạt 120mm, ánh sáng RGB đồng bộ, lạnh sâu.',
    emoji: '❄️',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    specs: ['Quạt 120mm', 'RGB đồng bộ', 'Tản nhiệt hiệu quả'],
    status: 'sale',
  },
  {
    id: 5,
    name: 'Mouse pad Ultra Glide',
    category: 'mouse',
    price: 280000,
    description: 'Bề mặt chống trượt, kích thước lớn cho game thủ.',
    emoji: '🧭',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    specs: ['Bề mặt siêu trơn', 'Kích thước rộng', 'Chống trượt'],
    status: 'in-stock',
  },
  {
    id: 6,
    name: 'Bàn phím mini Core',
    category: 'keyboard',
    price: 1650000,
    description: 'Layout 65%, keycap PBT, trọng lượng nhẹ di chuyển.',
    emoji: '🟦',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    specs: ['Layout 65%', 'Keycap PBT', 'Nhẹ và di chuyển dễ'],
    status: 'out-of-stock',
  },
  {
    id: 7,
    name: 'Hub USB Turbo',
    category: 'cooling',
    price: 430000,
    description: '4 cổng USB 3.0, nguồn ổn định, thiết kế gọn.',
    emoji: '🔌',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    specs: ['4 cổng USB 3.0', 'Nguồn ổn định', 'Thiết kế gọn nhẹ'],
    status: 'in-stock',
  },
  {
    id: 8,
    name: 'Kê tay Ergonomic',
    category: 'headset',
    price: 210000,
    description: 'Đệm gel êm ái, bảo vệ cổ tay khi dùng lâu.',
    emoji: '🧤',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    specs: ['Đệm gel êm', 'Hỗ trợ cổ tay', 'Phù hợp dùng lâu'],
    status: 'sale',
  },
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sortSelect');
const statusMenu = document.getElementById('statusMenu');
const cartToggle = document.getElementById('cartToggle');
const cartPanel = document.getElementById('cartPanel');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalCount = document.getElementById('cartTotalCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutButton = document.getElementById('checkoutButton');
const adminLoginToggle = document.getElementById('adminLoginToggle');
const adminModal = document.getElementById('adminModal');
const closeAdminModal = document.getElementById('closeAdminModal');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminDashboard = document.getElementById('adminDashboard');
const logoutAdminButton = document.getElementById('logoutAdminButton');
const ordersList = document.getElementById('ordersList');
const customersList = document.getElementById('customersList');
const statsOrders = document.getElementById('statsOrders');
const statsPending = document.getElementById('statsPending');
const statsCustomers = document.getElementById('statsCustomers');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const customerAuthToggle = document.getElementById('customerAuthToggle');
const customerAuthModal = document.getElementById('customerAuthModal');
const closeCustomerAuthModal = document.getElementById('closeCustomerAuthModal');
const customerLoginForm = document.getElementById('customerLoginForm');
const customerRegisterForm = document.getElementById('customerRegisterForm');
const customerAuthPanel = document.getElementById('customerAuthPanel');
const customerAccountPanel = document.getElementById('customerAccountPanel');
const customerAccountName = document.getElementById('customerAccountName');
const customerAccountInfo = document.getElementById('customerAccountInfo');
const customerLogoutButton = document.getElementById('customerLogoutButton');
const customerSettingsForm = document.getElementById('customerSettingsForm');
const customerSettingsPhone = document.getElementById('customerSettingsPhone');
const customerSettingsAddress = document.getElementById('customerSettingsAddress');
const showLoginView = document.getElementById('showLoginView');
const showRegisterView = document.getElementById('showRegisterView');
const customerModalTitle = document.getElementById('customerModalTitle');
const customerLoginViewButton = document.getElementById('showLoginView');
const customerRegisterViewButton = document.getElementById('showRegisterView');

let cart = [];
let orders = loadOrders();
let currentAdmin = null;
let customers = loadCustomers();
let currentCustomer = loadCurrentCustomer();
let currentStatusFilter = 'all';

const statusMeta = {
  sale: { label: 'Đang hạ giá', className: 'sale' },
  'in-stock': { label: 'Hàng còn', className: 'in-stock' },
  'out-of-stock': { label: 'Hàng hết', className: 'out-of-stock' },
  'coming-soon': { label: 'Hàng đang về', className: 'coming-soon' },
};

function formatCurrency(value) {
  return value.toLocaleString('vi-VN') + ' đ';
}

function loadOrders() {
  try {
    const storedOrders = localStorage.getItem('gearzone-orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

function saveOrders() {
  localStorage.setItem('gearzone-orders', JSON.stringify(orders));
}

function loadCustomers() {
  try {
    const storedCustomers = localStorage.getItem('gearzone-customers');
    return storedCustomers ? JSON.parse(storedCustomers) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

function saveCustomers() {
  localStorage.setItem('gearzone-customers', JSON.stringify(customers));
}

function loadCurrentCustomer() {
  try {
    const storedCurrentCustomer = localStorage.getItem('gearzone-current-customer');
    return storedCurrentCustomer ? JSON.parse(storedCurrentCustomer) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function saveCurrentCustomer() {
  if (currentCustomer) {
    localStorage.setItem('gearzone-current-customer', JSON.stringify(currentCustomer));
  } else {
    localStorage.removeItem('gearzone-current-customer');
  }
}

function buildCustomers() {
  return orders.reduce((customers, order) => {
    const existingCustomer = customers.find((customer) => customer.phone === order.customer.phone || customer.email === order.customer.email);

    if (existingCustomer) {
      existingCustomer.orderCount += 1;
      existingCustomer.lastOrder = order.createdAt;
      return customers;
    }

    customers.push({
      id: order.id,
      name: order.customer.name,
      phone: order.customer.phone,
      email: order.customer.email,
      address: order.customer.address,
      orderCount: 1,
      lastOrder: order.createdAt,
    });

    return customers;
  }, []);
}

function updateStatusMenuUI() {
  document.querySelectorAll('.status-chip').forEach((button) => {
    button.classList.toggle('active', button.dataset.status === currentStatusFilter);
  });
}

function renderProducts() {
  const searchValue = searchInput.value.trim().toLowerCase();
  const categoryValue = categoryFilter.value;
  const sortValue = sortSelect.value;

  let filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue === 'all' || product.category === categoryValue;
    const matchesStatus = currentStatusFilter === 'all' || product.status === currentStatusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (sortValue === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  productGrid.innerHTML = filtered.map((product) => {
    const statusInfo = statusMeta[product.status] || statusMeta['in-stock'];
    const isDisabled = product.status === 'out-of-stock' || product.status === 'coming-soon';
    const actionText = product.status === 'out-of-stock' ? 'Hết hàng' : product.status === 'coming-soon' ? 'Hàng đang về' : 'Thêm vào giỏ';

    return `
      <article class="product-card">
        <div class="product-image">
          ${product.image ? `<img src="${product.image}" alt="${product.name}" />` : `<span>${product.emoji}</span>`}
        </div>
        <div class="product-card-top">
          <div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <span class="status-pill ${statusInfo.className}">${statusInfo.label}</span>
        </div>
        <ul class="product-specs">
          ${product.specs.map((spec) => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="product-meta">
          <span class="product-price">${formatCurrency(product.price)}</span>
          <span class="product-tag">${product.category}</span>
        </div>
        <div class="product-actions">
          <button class="button button-primary" onclick="addToCart(${product.id})" ${isDisabled ? 'disabled' : ''}>${actionText}</button>
        </div>
      </article>
    `;
  }).join('');
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  cartCount.textContent = totalCount;
  cartTotalCount.textContent = totalCount;
  cartTotalPrice.textContent = formatCurrency(totalPrice);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="text-muted">Giỏ hàng trống. Thêm sản phẩm để tiếp tục.</p>';
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => `
      <div class="cart-item">
        <div class="cart-item-meta">
          <h4>${item.name}</h4>
          <span>${formatCurrency(item.price)}</span>
        </div>
        <div class="quantity-control">
          <button onclick="changeQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)">+</button>
          <button class="icon-button" onclick="removeFromCart(${item.id})">🗑️</button>
        </div>
      </div>
    `)
    .join('');
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  if (product.status === 'out-of-stock' || product.status === 'coming-soon') {
    alert('Sản phẩm này hiện không thể thêm vào giỏ hàng.');
    return;
  }

  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  showCart();
}

function changeQuantity(productId, delta) {
  const cartItem = cart.find((item) => item.id === productId);
  if (!cartItem) return;

  cartItem.quantity += delta;
  if (cartItem.quantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function renderCart() {
  updateCartUI();
}

function showCart() {
  cartPanel.classList.add('open');
  overlay.classList.add('visible');
}

function hideCart() {
  cartPanel.classList.remove('open');
  overlay.classList.remove('visible');
}

function showAdminModal() {
  adminModal.classList.add('open');
  if (currentAdmin) {
    adminLoginForm.classList.add('hidden');
    adminDashboard.classList.remove('hidden');
    renderAdminDashboard();
  } else {
    adminLoginForm.classList.remove('hidden');
    adminDashboard.classList.add('hidden');
  }
}

function showCustomerAuthModal() {
  customerAuthModal.classList.add('open');
  renderCustomerAuthState();
}

function hideCustomerAuthModal() {
  customerAuthModal.classList.remove('open');
}

function renderCustomerAuthState() {
  if (currentCustomer) {
    customerAuthPanel.classList.add('hidden');
    customerAccountPanel.classList.remove('hidden');
    customerAccountName.textContent = `Xin chào, ${currentCustomer.name}`;
    customerAccountInfo.textContent = currentCustomer.address
      ? `${currentCustomer.phone} • ${currentCustomer.address}`
      : 'Vui lòng cập nhật số điện thoại và địa chỉ nhận hàng để đặt hàng thuận tiện hơn.';
    customerSettingsPhone.value = currentCustomer.phone || '';
    customerSettingsAddress.value = currentCustomer.address || '';
    customerModalTitle.textContent = 'Tài khoản của bạn';
    customerAuthToggle.textContent = `Hi, ${currentCustomer.name.split(' ')[0] || 'Khách'}`;
  } else {
    customerAuthPanel.classList.remove('hidden');
    customerAccountPanel.classList.add('hidden');
    customerModalTitle.textContent = 'Đăng nhập hoặc đăng ký';
    customerAuthToggle.textContent = 'Đăng nhập';
  }
}

function switchCustomerView(view) {
  const isLogin = view === 'login';
  customerLoginForm.classList.toggle('hidden', !isLogin);
  customerRegisterForm.classList.toggle('hidden', isLogin);
  customerLoginViewButton.classList.toggle('active', isLogin);
  customerRegisterViewButton.classList.toggle('active', !isLogin);
}

function handleCustomerRegister(event) {
  event.preventDefault();
  const formData = new FormData(customerRegisterForm);
  const payload = Object.fromEntries(formData.entries());

  const existingAccount = customers.find((item) => item.phone === payload.phone || item.email === payload.email);
  if (existingAccount) {
    alert('Số điện thoại hoặc email đã được sử dụng.');
    return;
  }

  const newCustomer = {
    id: Date.now(),
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    address: '',
    password: payload.password,
    createdAt: new Date().toLocaleString('vi-VN'),
  };

  customers.push(newCustomer);
  saveCustomers();
  currentCustomer = newCustomer;
  saveCurrentCustomer();
  renderCustomerAuthState();
  customerRegisterForm.reset();
  hideCustomerAuthModal();
  alert('Đăng ký tài khoản thành công. Bạn có thể mua hàng ngay bây giờ.');
}

function handleCustomerLogin(event) {
  event.preventDefault();
  const identifier = customerLoginForm.identifier.value.trim();
  const password = customerLoginForm.password.value;

  const matchedCustomer = customers.find((item) => (item.phone === identifier || item.email === identifier) && item.password === password);

  if (!matchedCustomer) {
    alert('Thông tin đăng nhập không đúng.');
    return;
  }

  currentCustomer = matchedCustomer;
  saveCurrentCustomer();
  renderCustomerAuthState();
  customerLoginForm.reset();
  hideCustomerAuthModal();
  alert(`Chào mừng ${matchedCustomer.name} quay trở lại.`);
}

function logoutCustomer() {
  currentCustomer = null;
  saveCurrentCustomer();
  renderCustomerAuthState();
  hideCustomerAuthModal();
}

function handleCustomerSettings(event) {
  event.preventDefault();
  if (!currentCustomer) return;

  const phone = customerSettingsPhone.value.trim();
  const address = customerSettingsAddress.value.trim();

  if (!phone || !address) {
    alert('Vui lòng nhập đủ số điện thoại và địa chỉ nhận hàng.');
    return;
  }

  const customerIndex = customers.findIndex((item) => item.id === currentCustomer.id);
  if (customerIndex >= 0) {
    customers[customerIndex] = {
      ...customers[customerIndex],
      phone,
      address,
    };
    saveCustomers();
  }

  currentCustomer = {
    ...currentCustomer,
    phone,
    address,
  };
  saveCurrentCustomer();
  renderCustomerAuthState();
  alert('Cập nhật thông tin giao hàng thành công.');
}

function hideAdminModal() {
  adminModal.classList.remove('open');
}

function showCheckoutModal() {
  checkoutModal.classList.add('open');
  checkoutForm.reset();
  if (currentCustomer) {
    checkoutForm.name.value = currentCustomer.name;
    checkoutForm.phone.value = currentCustomer.phone;
    checkoutForm.email.value = currentCustomer.email || '';
    checkoutForm.address.value = currentCustomer.address;
  }
}

function hideCheckoutModal() {
  checkoutModal.classList.remove('open');
}

function renderAdminDashboard() {
  const customers = buildCustomers();
  statsOrders.textContent = orders.length;
  statsPending.textContent = orders.filter((order) => order.status === 'Chờ xác nhận').length;
  statsCustomers.textContent = customers.length;

  ordersList.innerHTML = orders.length
    ? orders.map((order) => `
      <article class="order-card">
        <div class="order-card-header">
          <div>
            <strong>#${order.id}</strong>
            <p>${order.customer.name} • ${order.customer.phone}</p>
          </div>
          <select class="status-select" data-order-id="${order.id}">
            <option value="Chờ xác nhận" ${order.status === 'Chờ xác nhận' ? 'selected' : ''}>Chờ xác nhận</option>
            <option value="Đang xử lý" ${order.status === 'Đang xử lý' ? 'selected' : ''}>Đang xử lý</option>
            <option value="Hoàn tất" ${order.status === 'Hoàn tất' ? 'selected' : ''}>Hoàn tất</option>
          </select>
        </div>
        <p>${order.customer.address}</p>
        <p>Email: ${order.customer.email || 'Chưa có'}</p>
        <p>Ngày đặt: ${order.createdAt}</p>
        <ul>
          ${order.items.map((item) => `<li>${item.name} × ${item.quantity}</li>`).join('')}
        </ul>
      </article>
    `).join('')
    : '<p class="empty-state">Chưa có đơn hàng nào.</p>';

  customersList.innerHTML = customers.length
    ? customers.map((customer) => `
      <article class="customer-card">
        <strong>${customer.name}</strong>
        <p>${customer.phone}</p>
        <p>${customer.address}</p>
        <p>Đơn hàng: ${customer.orderCount} • Lần cuối: ${customer.lastOrder}</p>
      </article>
    `).join('')
    : '<p class="empty-state">Chưa có khách hàng nào.</p>';

  document.querySelectorAll('.status-select').forEach((select) => {
    select.addEventListener('change', (event) => {
      const orderId = Number(event.target.dataset.orderId);
      const targetOrder = orders.find((item) => item.id === orderId);
      if (targetOrder) {
        targetOrder.status = event.target.value;
        saveOrders();
        renderAdminDashboard();
      }
    });
  });
}

function handleAdminLogin(event) {
  event.preventDefault();
  const username = adminLoginForm.username.value.trim();
  const password = adminLoginForm.password.value;

  if (username === 'admin' && password === 'admin123') {
    currentAdmin = { username };
    adminLoginForm.classList.add('hidden');
    adminDashboard.classList.remove('hidden');
    renderAdminDashboard();
  } else {
    alert('Thông tin đăng nhập không đúng.');
  }
}

function handleCheckout(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert('Giỏ hàng hiện đang trống.');
    return;
  }

  if (!currentCustomer) {
    alert('Vui lòng đăng nhập hoặc đăng ký tài khoản trước khi đặt hàng.');
    hideCheckoutModal();
    showCustomerAuthModal();
    switchCustomerView('register');
    return;
  }

  const formData = new FormData(checkoutForm);
  const customer = Object.fromEntries(formData.entries());
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const customerProfile = {
    ...currentCustomer,
    name: customer.name,
    phone: customer.phone,
    email: customer.email,
    address: customer.address,
  };

  const customerIndex = customers.findIndex((item) => item.id === currentCustomer.id);
  if (customerIndex >= 0) {
    customers[customerIndex] = customerProfile;
    saveCustomers();
  }

  currentCustomer = customerProfile;
  saveCurrentCustomer();

  orders.unshift({
    id: Date.now(),
    createdAt: new Date().toLocaleString('vi-VN'),
    customer: customerProfile,
    customerId: currentCustomer.id,
    items: cart.map((item) => ({ id: item.id, name: item.name, quantity: item.quantity, price: item.price })),
    total: totalPrice,
    status: 'Chờ xác nhận',
  });

  saveOrders();
  cart = [];
  renderCart();
  hideCheckoutModal();
  renderAdminDashboard();
  alert(`Đơn hàng đã được ghi nhận.\nTổng tiền: ${formatCurrency(totalPrice)}`);
}

function checkout() {
  if (cart.length === 0) {
    alert('Giỏ hàng hiện đang trống. Vui lòng thêm sản phẩm.');
    return;
  }

  if (!currentCustomer) {
    alert('Vui lòng đăng nhập hoặc đăng ký tài khoản trước khi đặt hàng.');
    showCustomerAuthModal();
    switchCustomerView('register');
    return;
  }

  showCheckoutModal();
}

searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', renderProducts);
sortSelect.addEventListener('change', renderProducts);
statusMenu.addEventListener('click', (event) => {
  const button = event.target.closest('.status-chip');
  if (!button) return;

  currentStatusFilter = button.dataset.status;
  updateStatusMenuUI();
  renderProducts();
});
cartToggle.addEventListener('click', showCart);
closeCart.addEventListener('click', hideCart);
overlay.addEventListener('click', hideCart);
checkoutButton.addEventListener('click', checkout);
customerAuthToggle.addEventListener('click', showCustomerAuthModal);
closeCustomerAuthModal.addEventListener('click', hideCustomerAuthModal);
showLoginView.addEventListener('click', () => switchCustomerView('login'));
showRegisterView.addEventListener('click', () => switchCustomerView('register'));
customerLoginForm.addEventListener('submit', handleCustomerLogin);
customerRegisterForm.addEventListener('submit', handleCustomerRegister);
customerSettingsForm.addEventListener('submit', handleCustomerSettings);
customerLogoutButton.addEventListener('click', logoutCustomer);
adminLoginToggle.addEventListener('click', showAdminModal);
closeAdminModal.addEventListener('click', hideAdminModal);
logoutAdminButton.addEventListener('click', () => {
  currentAdmin = null;
  adminLoginForm.classList.remove('hidden');
  adminDashboard.classList.add('hidden');
  adminLoginForm.reset();
});
closeCheckoutModal.addEventListener('click', hideCheckoutModal);
checkoutForm.addEventListener('submit', handleCheckout);
adminLoginForm.addEventListener('submit', handleAdminLogin);
adminModal.addEventListener('click', (event) => {
  if (event.target === adminModal) {
    hideAdminModal();
  }
});
checkoutModal.addEventListener('click', (event) => {
  if (event.target === checkoutModal) {
    hideCheckoutModal();
  }
});
customerAuthModal.addEventListener('click', (event) => {
  if (event.target === customerAuthModal) {
    hideCustomerAuthModal();
  }
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideCart();
    hideAdminModal();
    hideCheckoutModal();
    hideCustomerAuthModal();
  }
});

updateStatusMenuUI();
renderProducts();
renderCart();
renderAdminDashboard();
renderCustomerAuthState();
switchCustomerView('login');
