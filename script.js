document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
     
        const phoneNumber = "558488573439"; 
        const message = "Gostaria de saber mais sobre seus serviços de gestão de tráfego!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});
document.querySelectorAll('.btn2').forEach(button => {
    button.addEventListener('click', function () {
     
        const phoneNumber = "558488573439"; 
        const message = "Gostaria de saber mais sobre seus serviços de gestão de tráfego!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});


