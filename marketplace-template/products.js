document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');
    const products = document.querySelectorAll('.product');

    searchInput.addEventListener('input', filterProducts);
    categorySelect.addEventListener('change', filterProducts);

    function filterProducts() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productName = product.querySelector('h2').textContent.toLowerCase();

            if ((selectedCategory === 'all' || productCategory === selectedCategory) &&
                (productName.includes(searchText))) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
