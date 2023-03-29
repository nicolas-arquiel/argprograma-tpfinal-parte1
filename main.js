const inputFilters = document.querySelectorAll('input[type=radio]')
const divShop = document.querySelectorAll('#filter')
const cartEmptyIcon = document.querySelector('.cart-empty')
const cartIcon = document.querySelector('.cart-non-empty')
const purchaseButton = document.querySelectorAll('button')
const cartButton = document.querySelector('.cart-container')

const errorMesagge = 'Lo siento, estamos realizando tareas de mantenimiento en la tienda en este momento. Sin embargo, siéntete libre de explorar nuestro catálogo mientras tanto. Gracias por tu comprensión.'

// GESTION DE FILTROS DE PRODUCTOS

const filterProduct = () => {
    inputFilters.forEach((input, index) => {
        if (input.checked) {
            divShop[index].classList.remove('hidden')
        } else {
            divShop[index].classList.add('hidden')
        }
    })
}

inputFilters.forEach(input => {
    input.addEventListener('click', filterProduct)
})

// GESTION DE EVENTO CLICK EN BUTTON (COMPRAR)

purchaseButton.forEach(button => {
    button.addEventListener('click', () => {
        alert(errorMesagge)
        cartEmptyIcon.classList.add('hidden')
        cartIcon.classList.remove('hidden')
    })
});

// GESTION DE EVENTO CLICK CART
cartButton.addEventListener('click',()=>alert(errorMesagge))


