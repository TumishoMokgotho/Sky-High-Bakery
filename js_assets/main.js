/* Sky High Bakery - beginner-friendly page interactions */

// Update the year in the footer automatically.
document.querySelectorAll('.current-year').forEach(function (yearElement) {
    yearElement.textContent = new Date().getFullYear();
});

// Sample product data. This is demonstration content, not a live catalogue.
const bakeryProducts = [
    { name: 'Classic Brownie', description: 'A rich, chocolatey bakery favourite.', price: 32, image: '_images/cookies.jpg', alt: 'Chocolate baked treats' },
    { name: 'Sky High Cookies', description: 'A golden cookie with a soft centre.', price: 25, image: '_images/cookies.jpg', alt: 'Freshly baked cookies' },
    { name: 'Butter Croissant', description: 'A flaky pastry for a slow morning.', price: 28, image: '_images/croissant.jpg', alt: 'Golden croissant' },
    { name: 'Celebration Cupcake', description: 'A colourful cupcake for a little occasion.', price: 30, image: '_images/cupcakes.jpg', alt: 'Decorated cupcakes' }
];

const productList = document.getElementById('productList');
if (productList) {
    const searchInput = document.getElementById('productSearch');
    const sortInput = document.getElementById('productSort');
    const countText = document.getElementById('productCount');
    const noProducts = document.getElementById('noProducts');

    function showProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let matchingProducts = bakeryProducts.filter(function (product) {
            return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
        });

        if (sortInput.value === 'price-low') {
            matchingProducts.sort(function (a, b) { return a.price - b.price; });
        } else if (sortInput.value === 'price-high') {
            matchingProducts.sort(function (a, b) { return b.price - a.price; });
        } else {
            matchingProducts.sort(function (a, b) { return a.name.localeCompare(b.name); });
        }

        productList.innerHTML = '';
        matchingProducts.forEach(function (product) {
            const card = document.createElement('article');
            card.className = 'product-card';
            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.alt;
            image.loading = 'lazy';
            const title = document.createElement('h2');
            title.textContent = product.name;
            const description = document.createElement('p');
            description.textContent = product.description;
            const price = document.createElement('p');
            price.className = 'product-price';
            price.textContent = 'Sample price: R' + product.price.toFixed(2);
            card.append(image, title, description, price);
            productList.appendChild(card);
        });

        countText.textContent = 'Showing ' + matchingProducts.length + ' sample product' + (matchingProducts.length === 1 ? '' : 's');
        noProducts.hidden = matchingProducts.length !== 0;
    }
    searchInput.addEventListener('input', showProducts);
    sortInput.addEventListener('change', showProducts);
    showProducts();
}

// Gallery lightbox: click a gallery image to view it larger.
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeButton = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('[data-lightbox]').forEach(function (galleryButton) {
        galleryButton.addEventListener('click', function () {
            lightboxImage.src = galleryButton.dataset.lightbox;
            lightboxImage.alt = galleryButton.querySelector('img').alt;
            lightboxCaption.textContent = galleryButton.dataset.caption || '';
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
            closeButton.focus();
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
    }
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
}

// Enquiry form: HTML5 validates the fields first, then this displays a sample response.
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedType = document.getElementById('enquiryType').value;
        const name = document.getElementById('enquiryName').value.trim();
        const response = document.getElementById('enquiryResponse');
        let message = 'Thanks, ' + name + '! Your enquiry has been checked. ';

        if (selectedType === 'event') {
            message += 'Sample response: event and catering requests are subject to date and team availability.';
        } else if (selectedType === 'product') {
            message += 'Sample response: please note that menu details and prices on this student website are examples only.';
        } else if (selectedType === 'volunteer') {
            message += 'Sample response: volunteer and sponsorship opportunities would be discussed directly with the bakery.';
        } else {
            message += 'Sample response: the bakery would follow up using the email address you provided.';
        }
        response.textContent = message;
    });
}

// Contact form: validate, compile the fields, then open the visitor's email program.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const type = document.getElementById('messageType').value;
        const message = document.getElementById('contactMessage').value.trim();
        const response = document.getElementById('contactResponse');

        const subject = encodeURIComponent('Sky High Bakery website message: ' + type);
        const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + (phone || 'Not provided') + '\nMessage type: ' + type + '\n\nMessage:\n' + message);
        response.textContent = 'Your details passed validation. Opening an email draft addressed to skyhighbakery@gmail.com. If nothing opens, check that a mail app is configured.';
        window.location.href = 'mailto:skyhighbakery@gmail.com?subject=' + subject + '&body=' + body;
    });
}
