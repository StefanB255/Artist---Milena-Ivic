const modal = document.querySelector(".modalx");
const main = document.querySelectorAll(".dream-img-box img");
const previews = document.querySelectorAll(".overflov");
const original = document.querySelector(".full-img");


previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
     original.src = `img/${originalSrc}`;
  });
});

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("modalx")) {
      modal.classList.remove("open");
      original.classList.remove("open");
    }
});
