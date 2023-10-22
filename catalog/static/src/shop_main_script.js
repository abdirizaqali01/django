/*-------------------------------------------------*/
/* PRODUCT-TAB DISPLAY */
/*-------------------------------------------------*/
function showProduct(productId) {
    // Hide all product groups
    document.querySelectorAll('.product-group').forEach(function(group) {
        group.style.display = 'none';
    });
    
    // Show the selected product group
    document.getElementById(productId).style.display = 'block';
}