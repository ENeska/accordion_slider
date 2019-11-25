let listEl = [].slice.call(document.querySelectorAll(".acordion__item"));
let listEl2 = [].slice.call(document.querySelectorAll(".accordion__text"));

console.log(listEl);

listEl.forEach(element => {
    element.addEventListener("mouseover", function () {
        listEl.forEach(el => {
            el.classList.remove("acordion__item__hover");
        });
        listEl2.forEach(el => {
            el.classList.remove("yellowBack")
        })
        element.classList.add("acordion__item__hover");
        element.querySelector(".accordion__text").classList.add("yellowBack");
    })
});