function searchCars() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const items = document.querySelectorAll('.car-item');

    let anyVisible = false;
    items.forEach(item => {
        const carType = item.getAttribute('data-car').toLowerCase();
        if (carType.includes(query) || query === "") {
            item.style.display = "block";
            anyVisible = true;
        } else {
            item.style.display = "none";
        }
    });

    if (!anyVisible) {
        alert("عذراً، لم يتم العثور على نتائج!");
    }
}
