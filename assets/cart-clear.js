window.onload = function() {
    document.getElementById('clear-cart-btn').addEventListener('click', function(e) {
        e.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/cart/clear.js', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('Cart cleared successfully.');
                location.reload();
            } else if (xhr.readyState === 4) {
                console.error('Error clearing cart:', xhr.statusText);
            }
        };
        xhr.send();
    });
};
