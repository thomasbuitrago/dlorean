/* =========================================================
   D'LORIAN TECH
   JAVASCRIPT PRINCIPAL
========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SERVICIOS
    ===================================================== */

    const services = [

        {
            icon: "fa-comments",
            title: "Chat de atención al cliente",
            description: "Comunicación directa y rápida con tus clientes."
        },

        {
            icon: "fa-robot",
            title: "Chatbot inteligente",
            description: "Automatiza respuestas y atención digital."
        },

        {
            icon: "fa-award",
            title: "Programa de puntos",
            description: "Fideliza clientes mediante recompensas."
        },

        {
            icon: "fa-crown",
            title: "Membresías VIP",
            description: "Ofrece beneficios exclusivos a tus mejores clientes."
        },

        {
            icon: "fa-star",
            title: "Opiniones y reseñas",
            description: "Mejora la confianza y reputación de tu negocio."
        },

        {
            icon: "fa-boxes-stacked",
            title: "Gestión de inventario",
            description: "Controla productos y existencias."
        },

        {
            icon: "fa-table-columns",
            title: "Panel administrativo",
            description: "Gestiona tu negocio desde un solo lugar."
        },

        {
            icon: "fa-users",
            title: "Gestión de usuarios",
            description: "Administra clientes, empleados y permisos."
        },

        {
            icon: "fa-cart-shopping",
            title: "Gestión de ventas",
            description: "Control digital de ventas y operaciones."
        },

        {
            icon: "fa-bell",
            title: "Notificaciones",
            description: "Mantén informados a usuarios y clientes."
        },

        {
            icon: "fa-tags",
            title: "Promociones y descuentos",
            description: "Gestiona ofertas de manera inteligente."
        },

        {
            icon: "fa-credit-card",
            title: "Pago en línea",
            description: "Facilita pagos digitales seguros."
        },

        {
            icon: "fa-file-invoice-dollar",
            title: "Facturación",
            description: "Organiza procesos de facturación digital."
        },

        {
            icon: "fa-truck-fast",
            title: "Gestión de envíos",
            description: "Controla pedidos y entregas."
        },

        {
            icon: "fa-wand-magic-sparkles",
            title: "Recomendación de productos",
            description: "Experiencias personalizadas para clientes."
        },

        {
            icon: "fa-calendar-days",
            title: "Agenda de eventos",
            description: "Organiza reservas y eventos."
        },

        {
            icon: "fa-images",
            title: "Galería de imágenes",
            description: "Muestra visualmente tus productos y servicios."
        },

        {
            icon: "fa-address-card",
            title: "Contacto empresarial",
            description: "Canales profesionales para tus clientes."
        },

        {
            icon: "fa-location-dot",
            title: "Ubicación de tiendas",
            description: "Ayuda a tus clientes a encontrarte."
        },

        {
            icon: "fa-headset",
            title: "Soporte técnico",
            description: "Asistencia para usuarios y plataformas."
        },

        {
            icon: "fa-square-poll-vertical",
            title: "Encuestas de satisfacción",
            description: "Conoce la experiencia de tus clientes."
        },

        {
            icon: "fa-chart-line",
            title: "Sistema de estadísticas",
            description: "Convierte datos en decisiones."
        },

        {
            icon: "fa-chart-pie",
            title: "Dashboard administrativo",
            description: "Visualiza toda la información importante."
        },

        {
            icon: "fa-truck",
            title: "Gestión de proveedores",
            description: "Organiza proveedores y suministros."
        },

        {
            icon: "fa-box",
            title: "Control de stock",
            description: "Evita faltantes y exceso de productos."
        },

        {
            icon: "fa-scale-balanced",
            title: "Comparador de productos",
            description: "Facilita decisiones de compra."
        },

        {
            icon: "fa-magnifying-glass",
            title: "Buscador avanzado",
            description: "Encuentra información rápidamente."
        },

        {
            icon: "fa-filter",
            title: "Filtros de productos",
            description: "Mejora la experiencia de navegación."
        },

        {
            icon: "fa-share-nodes",
            title: "Integración con redes sociales",
            description: "Conecta tu negocio con tus comunidades."
        },

        {
            icon: "fa-envelope",
            title: "Newsletter",
            description: "Mantén comunicación con tus clientes."
        },

        {
            icon: "fa-shield-halved",
            title: "Sistema de seguridad y autenticación",
            description: "Protege usuarios e información importante."
        }

    ];


    const servicesGrid = document.getElementById("servicesGrid");


    services.forEach((service, index) => {

        const card = document.createElement("article");

        card.className = "service-card reveal";

        card.innerHTML = `

            <i class="fa-solid ${service.icon}"></i>

            <h3>${service.title}</h3>

            <p>${service.description}</p>

            <a href="#contacto">
                Conocer más
                <i class="fa-solid fa-arrow-right"></i>
            </a>

        `;

        servicesGrid.appendChild(card);

    });


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar = document.getElementById("navbar");


    window.addEventListener("scroll", () => {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    });


    /* =====================================================
       MENU MOVIL
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");


    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =====================================================
       ANIMACIONES SCROLL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       CHATBOT
    ===================================================== */

    const chatToggle = document.getElementById("chatToggle");
    const chatWindow = document.getElementById("chatWindow");
    const closeChat = document.getElementById("closeChat");

    const chatBody = document.getElementById("chatBody");


    chatToggle.addEventListener("click", () => {

        chatWindow.classList.toggle("active");

    });


    closeChat.addEventListener("click", () => {

        chatWindow.classList.remove("active");

    });


    const chatOptions = document.querySelectorAll(".chat-options button");


    chatOptions.forEach(button => {

        button.addEventListener("click", () => {

            const userMessage = document.createElement("div");

            userMessage.className = "bot-message";

            userMessage.style.background =
                "rgba(37,99,235,.15)";

            userMessage.style.color =
                "#f8fafc";

            userMessage.textContent = button.textContent;


            chatBody.appendChild(userMessage);


            const response = document.createElement("div");

            response.className = "bot-message";


            let message = "";

            switch (button.textContent) {

                case "Necesito una página web":

                    message =
                        "Perfecto 🚀 Podemos crear una página web moderna, profesional y adaptada a cualquier dispositivo.";

                    break;


                case "Necesito una aplicación":

                    message =
                        "Excelente. Podemos analizar qué tipo de aplicación necesita tu negocio y desarrollar una solución personalizada.";

                    break;


                case "Quiero una tienda online":

                    message =
                        "Una tienda online puede ayudarte a vender 24/7. Podemos integrar catálogo, pagos y gestión administrativa.";

                    break;


                case "Quiero modernizar mi negocio":

                    message =
                        "Ese es precisamente nuestro objetivo 💡 Analizamos tus procesos actuales para encontrar oportunidades de digitalización.";

                    break;


                case "Quiero hablar con un asesor":

                    message =
                        "Claro. Déjanos tus datos en el formulario de contacto y podremos analizar tu proyecto.";

                    break;


                default:

                    message =
                        "Gracias por contactarnos. Podemos ayudarte a encontrar la solución adecuada.";

            }


            setTimeout(() => {

                response.textContent = message;

                chatBody.appendChild(response);

                chatBody.scrollTop =
                    chatBody.scrollHeight;

            }, 500);

        });

    });


    /* =====================================================
       FORMULARIO
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    contactForm.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const project =
            document.getElementById("project").value;

        const message =
            document.getElementById("message").value.trim();


        if (
            !name ||
            !email ||
            !phone ||
            !project ||
            !message
        ) {

            showFormMessage(
                "Por favor completa todos los campos obligatorios.",
                "error"
            );

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showFormMessage(
                "Ingresa un correo electrónico válido.",
                "error"
            );

            return;

        }


        showFormMessage(
            "¡Solicitud enviada correctamente! 🚀 Pronto nos pondremos en contacto contigo.",
            "success"
        );


        contactForm.reset();

    });


    function showFormMessage(message, type) {

        formMessage.textContent = message;

        formMessage.className =
            `form-message ${type}`;

    }


    /* =====================================================
       VOLVER ARRIBA
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       PARALLAX HERO
    ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");


    window.addEventListener("mousemove", event => {

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }


        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });


    /* =====================================================
       PARTICULAS DIGITALES
    ===================================================== */

    const canvas =
        document.getElementById("particles");

    const ctx =
        canvas.getContext("2d");


    let particlesArray = [];


    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    class Particle {

        constructor() {

            this.x =
                Math.random() * canvas.width;

            this.y =
                Math.random() * canvas.height;

            this.size =
                Math.random() * 2 + 0.5;

            this.speedX =
                (Math.random() - 0.5) * 0.4;

            this.speedY =
                (Math.random() - 0.5) * 0.4;

        }


        update() {

            this.x += this.speedX;

            this.y += this.speedY;


            if (
                this.x < 0 ||
                this.x > canvas.width
            ) {
                this.speedX *= -1;
            }


            if (
                this.y < 0 ||
                this.y > canvas.height
            ) {
                this.speedY *= -1;
            }

        }


        draw() {

            ctx.fillStyle =
                "rgba(6, 182, 212, 0.7)";

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }

    }


    function initParticles() {

        particlesArray = [];


        const amount =
            Math.min(
                Math.floor(window.innerWidth / 12),
                100
            );


        for (let i = 0; i < amount; i++) {

            particlesArray.push(
                new Particle()
            );

        }

    }


    function connectParticles() {

        for (
            let a = 0;
            a < particlesArray.length;
            a++
        ) {

            for (
                let b = a;
                b < particlesArray.length;
                b++
            ) {

                const dx =
                    particlesArray[a].x -
                    particlesArray[b].x;

                const dy =
                    particlesArray[a].y -
                    particlesArray[b].y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (distance < 110) {

                    ctx.strokeStyle =
                        `rgba(37,99,235,${
                            0.15 - distance / 1000
                        })`;

                    ctx.lineWidth = 0.5;

                    ctx.beginPath();

                    ctx.moveTo(
                        particlesArray[a].x,
                        particlesArray[a].y
                    );

                    ctx.lineTo(
                        particlesArray[b].x,
                        particlesArray[b].y
                    );

                    ctx.stroke();

                }

            }

        }

    }


    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particlesArray.forEach(particle => {

            particle.update();

            particle.draw();

        });


        connectParticles();


        if (
            !window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            requestAnimationFrame(
                animateParticles
            );

        }

    }


    initParticles();


    if (
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        animateParticles();

    }

});