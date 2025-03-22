const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});






        function showProduct(name, description, image) {
            document.getElementById('modalProductName').innerText = name;
            document.getElementById('modalProductDescription').innerText = description;
            document.getElementById('modalProductImage').src = image;
            document.getElementById('productModal').style.display = 'block';
        }
        
        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
        }
        
        // Close the modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        document.getElementById('current-year').textContent = new Date().getFullYear();


  
