window.addEventListener('scroll', function() {
    var scroll = document.querySelector('#scrollToTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top:0
    })
} 