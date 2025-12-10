// Enhanced JavaScript for coffee shop landing page

document.addEventListener("DOMContentLoaded", () => {
  // Navigation scroll effect
  const navbar = document.getElementById("navbar")
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  // Handle navbar background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
    })
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
  

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view")
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll(".animate-on-scroll")
  animateElements.forEach((element) => {
    observer.observe(element)
  })

  // Enhanced button interactions
  const buttons = document.querySelectorAll(".btn-primary, button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.02)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })

    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(0) scale(0.98)"
    })

    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-2px) scale(1.02)"
    })
  })

  // Add to cart functionality (basic)
  const addToCartButtons = document.querySelectorAll('button:contains("Add to Cart")')
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Simple feedback animation
      const originalText = this.textContent
      this.textContent = "Added!"
      this.style.backgroundColor = "#94b910ff"

      setTimeout(() => {
        this.textContent = originalText
        this.style.backgroundColor = ""
      }, 1500)
    })
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroImages = document.querySelectorAll("#home img")

    heroImages.forEach((img, index) => {
      const speed = 0.5 + index * 0.1
      img.style.transform = `translateY(${scrolled * speed}px)`
    })
  })

  // Loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")

    // Trigger initial animations
    setTimeout(() => {
      const heroContent = document.querySelector("#home .animate-on-scroll")
      if (heroContent) {
        heroContent.classList.add("in-view")
      }
    }, 300)
  })

  // Console log for debugging
  console.log("[v0] Coffee shop landing page loaded successfully")
  console.log("[v0] All interactive elements initialized")

})

// Utility function to check if element contains text
HTMLElement.prototype.contains = function (text) {
  return this.textContent.includes(text)
  }
// === LOGIN SYSTEM ===
const loginPopup = document.getElementById("loginPopup");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginMessage = document.getElementById("loginMessage");

// Dummy akun
const admin = {
  username: "admin",
  password: "123456"
};

// Buka popup
openLogin.addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
  loginPopup.classList.add("flex");
});

// Tutup popup
closeLogin.addEventListener("click", () => {
  loginPopup.classList.add("hidden");
  loginPopup.classList.remove("flex");
  loginMessage.textContent = "";
});

// Tombol login ditekan
loginBtn.addEventListener("click", () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === admin.username && pass === admin.password) {
    localStorage.setItem("loggedIn", "yes");

    // Tutup popup
    loginPopup.classList.add("hidden");
    loginPopup.classList.remove("flex");

    // Ubah tombol
    openLogin.classList.add("hidden");
    logoutBtn.classList.remove("hidden");

  } else {
    loginMessage.textContent = "Username atau password salah!";
  }
});

// Cek login otomatis
if (localStorage.getItem("loggedIn") === "yes") {
  openLogin.classList.add("hidden");
  logoutBtn.classList.remove("hidden");
}

// Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  openLogin.classList.remove("hidden");
  logoutBtn.classList.add("hidden");
});

// Ganti seluruh isi script.js dengan yang ini
// Coffee shop - improved cart + checkout + Whatsapp order

document.addEventListener("DOMContentLoaded", () => {
  // --- NAV / UI BASIC ---
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  mobileMenuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });

  // --- BUTTON INTERACTIONS (small effects) ---
  const buttons = document.querySelectorAll(".btn-primary, button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.02)";
    });
    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(0) scale(0.98)";
    });
    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-2px) scale(1.02)";
    });
  });

  // --- ANIMATIONS ON SCROLL ---
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, observerOptions);
  document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

  // --- CART SYSTEM ---
  // structure: [{ name, price (number), qty }]
  let cart = JSON.parse(localStorage.getItem("cart_v1") || "[]");

  // Utilities
  function formatRupiah(n) {
    // ensure integer
    n = Math.round(Number(n) || 0);
    return "Rp" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function parsePriceText(text) {
    // robust parsing for variations like "Rp22k", "Rp 22k", "Rp22.000", "Rp 25k", "Rp28k", "Rp18k", "Rp20k", "Rp25.000"
    if (!text) return 0;
    let t = text.toLowerCase().replace(/\s/g, "");
    // remove "rp"
    t = t.replace(/^rp/, "");
    // handle "k"
    if (t.includes("k")) {
      // e.g., "22k" or "22.5k"
      const num = parseFloat(t.replace("k", "").replace(",", "."));
      if (isNaN(num)) return 0;
      return Math.round(num * 1000);
    }
    // remove dots/commas and non-digits
    let digits = t.replace(/[^\d]/g, "");
    return digits ? parseInt(digits, 10) : 0;
  }

  function saveCart() {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }

  function updateCartCount() {
    // show total items (sum of qty)
    const count = cart.reduce((s, it) => s + (it.qty || 0), 0);
    const el = document.getElementById("cartCount");
    if (el) el.textContent = String(count);
  }

  function updateCartUI() {
    const container = document.getElementById("cartItems");
    const totalText = document.getElementById("cartTotal");
    if (!container || !totalText) return;

    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      container.innerHTML = `<p class="text-sm text-gray-500">Keranjang kosong</p>`;
    }

    cart.forEach((item, index) => {
      const subtotal = item.price * item.qty;
      total += subtotal;

      const itemNode = document.createElement("div");
      itemNode.className = "flex justify-between bg-gray-100 p-3 rounded-lg items-center";
      itemNode.innerHTML = `
        <div>
          <p class="font-semibold">${item.name}</p>
          <p class="text-sm text-gray-600">${formatRupiah(item.price)} × ${item.qty} = <strong>${formatRupiah(subtotal)}</strong></p>
        </div>
        <div class="flex gap-2 items-center">
          <button data-idx="${index}" class="btn-decrease px-2 py-1 rounded bg-red-200">-</button>
          <span class="px-2">${item.qty}</span>
          <button data-idx="${index}" class="btn-increase px-2 py-1 rounded bg-green-200">+</button>
          <button data-idx="${index}" class="btn-remove text-red-600 ml-2">🗑</button>
        </div>
      `;
      container.appendChild(itemNode);
    });

    totalText.textContent = formatRupiah(total);

    // attach listeners for dynamic buttons
    container.querySelectorAll(".btn-decrease").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = Number(btn.getAttribute("data-idx"));
        changeQty(i, -1);
      });
    });
    container.querySelectorAll(".btn-increase").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = Number(btn.getAttribute("data-idx"));
        changeQty(i, 1);
      });
    });
    container.querySelectorAll(".btn-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = Number(btn.getAttribute("data-idx"));
        removeItem(i);
      });
    });
  }

  function addToCart(name, price) {
    price = Number(price) || 0;
    const existing = cart.find(it => it.name === name);
    if (existing) existing.qty++;
    else cart.push({ name, price, qty: 1 });

    saveCart();
    updateCartCount();
    updateCartUI();
  }

  function changeQty(index, amount) {
    if (!cart[index]) return;
    cart[index].qty += amount;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartCount();
    updateCartUI();
  }

  function removeItem(index) {
    if (!cart[index]) return;
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    updateCartUI();
  }

  // INIT UI
  updateCartCount();
  updateCartUI();

  // --- HOOK add-to-cart BUTTONS from the page ---
  // For reliability, try to read price from a data-price attribute, otherwise parse from visible text
  document.querySelectorAll(".menu-item").forEach(item => {
    const addBtn = item.querySelector(".addToCartBtn");
    if (!addBtn) return;

    const nameEl = item.querySelector("h3");
    const priceEl = item.querySelector(".text-coffee-orange");

    const name = nameEl ? nameEl.textContent.trim() : "Item";
    const priceText = priceEl ? priceEl.textContent.trim() : "";
    const price = parsePriceText(priceText);

    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(name, price);

      // small feedback
      const orig = addBtn.innerHTML;
      addBtn.innerHTML = "Added ✓";
      addBtn.disabled = true;
      setTimeout(() => {
        addBtn.innerHTML = orig;
        addBtn.disabled = false;
      }, 900);
    });
  });

  // --- CART SIDEBAR OPEN/CLOSE ---
  document.getElementById("cartBtn").onclick = () => {
    document.getElementById("cartSidebar").classList.remove("translate-x-full");
  };
  document.getElementById("closeCart").onclick = () => {
    document.getElementById("cartSidebar").classList.add("translate-x-full");
  };

  // --- CHECKOUT POPUP ---
  document.getElementById("checkoutBtn").onclick = () => {
    const checkoutList = document.getElementById("checkoutList");
    const checkoutTotal = document.getElementById("checkoutTotal");
    const checkoutName = document.getElementById("checkoutName");
    const checkoutPhone = document.getElementById("checkoutPhone");

    checkoutList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      checkoutList.innerHTML = "<p class='text-sm text-gray-600'>Keranjang kosong</p>";
      checkoutTotal.textContent = formatRupiah(0);
    } else {
      cart.forEach(item => {
        const subtotal = item.qty * item.price;
        total += subtotal;
        const p = document.createElement("p");
        p.textContent = `${item.qty} × ${item.name} — ${formatRupiah(item.price)} (sub ${formatRupiah(subtotal)})`;
        checkoutList.appendChild(p);
      });
      checkoutTotal.textContent = formatRupiah(total);
    }

    // try fill name from order form if present
    const namaField = document.querySelector('#orderForm input[name="nama"]');
    if (namaField && checkoutName) checkoutName.value = namaField.value || "";

    document.getElementById("checkoutPopup").classList.remove("hidden");
    document.getElementById("checkoutPopup").classList.add("flex");
  };

  document.getElementById("closeCheckout").onclick = () => {
    document.getElementById("checkoutPopup").classList.add("hidden");
    document.getElementById("checkoutPopup").classList.remove("flex");
  };

  // PLACE ORDER -> Whatsapp
  document.getElementById("placeOrder").addEventListener("click", () => {
    // read customer info
    const name = document.getElementById("checkoutName")?.value?.trim() || "";
    const phone = document.getElementById("checkoutPhone")?.value?.trim() || "";

    if (cart.length === 0) {
      alert("Keranjang kosong — tambahkan item dulu.");
      return;
    }

    // Build message precisely
    let total = 0;
    let message = `Halo, saya ingin memesan:%0A`;
    cart.forEach(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      message += `• ${item.qty} x ${item.name} — ${formatRupiah(item.price)} (sub ${formatRupiah(subtotal)})%0A`;
    });
    message += `%0ATotal: ${formatRupiah(total)}%0A`;
    if (name) message += `%0ANama: ${encodeURIComponent(name)}`;
    if (phone) message += `%0ANo HP: ${encodeURIComponent(phone)}`;

    // phone number to send to (change to merchant/your number)
    const merchantNumber = "6285603384492"; // <- GANTI NOMOR TUJUAN WA DISINI (format internasional tanpa +)
    const waUrl = `https://wa.me/${merchantNumber}?text=${message}`;

    // open whatsapp
    window.open(waUrl, "_blank");

    // Optionally clear cart after sending
    // cart = [];
    // saveCart();
    // updateCartUI();
    // updateCartCount();
  });

  // QUICK ORDER FORM (the small #order form on page) — also send to cart if they press "Pesan Sekarang"
  const orderForm = document.getElementById("orderForm");
  const orderResult = document.getElementById("orderResult");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = orderForm.nama.value.trim();
      const menu = orderForm.menu.value;
      const jumlah = Number(orderForm.jumlah.value || 1);

      // try to find price of that menu on page
      let price = 0;
      document.querySelectorAll(".menu-item").forEach(item => {
        const h3 = item.querySelector("h3");
        if (h3 && h3.textContent.trim().toLowerCase() === menu.toLowerCase()) {
          const priceText = item.querySelector(".text-coffee-orange")?.textContent || "";
          price = parsePriceText(priceText);
        }
      });

      // add to cart jumlah times
      for (let i = 0; i < jumlah; i++) addToCart(menu, price);

      orderResult.innerHTML = `<strong>Terima kasih, ${nama || "Pelanggan"}!</strong><br>Pesanan <b>${jumlah} ${menu}</b> telah ditambahkan ke keranjang.`;
      orderResult.classList.remove("hidden");

      orderForm.reset();
    });
  }

  // place a safety console log
  console.log("[cart] initialized", cart.length, "items");
});
