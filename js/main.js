//ローディングアニメーション
const loading = document.querySelector(".loading");
window.onload = () => {
    setTimeout(function () {
        loading.style.display = "none";
    }, 1000);
};

document.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    loading.style.display = "flex";

    setTimeout(() => {
      loading.style.display = "none";
    }, 1000);
  });
});

//スクロールアニメーション
const objects =document.querySelectorAll(".fade-in");

const animateOnScroll = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
        entry.target.classList.add('show');

        observer.unobserve(entry.target);
      }
    });
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}

const observer = new IntersectionObserver(animateOnScroll,options);

objects.forEach(object => {
    observer.observe(object);
});
