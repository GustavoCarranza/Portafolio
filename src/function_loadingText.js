const animacionLoading = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('loader2');
    },2000);
    document.body.style.overflow = 'hidden';
    return new Promise((resolve) => setTimeout(resolve, animacionLoading));
};



export default animacionLoading;
