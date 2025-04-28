rowEl = document.querySelector(".row");
const api_url = "https://lanciweb.github.io/demo/api/pictures/";
const overlayEL = document.getElementById("overlay");
const closeButtonEl = document.getElementById("close-button");
const overlayImageEl = document.getElementById("open-post-image");

axios.get(api_url).then((response) => {
  const posts = response.data;
  console.log(posts);

  let cardHTML = "";

  posts.forEach((image) => {
    if (image.url) {
      cardHTML += `
        <div class="col-s-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
          <div class="card p-3" style="width: 18rem">
            <img class="pin" src="./img/pin.svg" alt="Pin" />
            <img src="${image.url}" class="card-img-top" alt="${image.title}" />
            <div class="card-body">
              <h5 class="card-title">${image.title}</h5>
              <p class="card-text">Data: ${image.date}</p>
            </div>
          </div>
        </div>
      `;
    }
  });

  rowEl.innerHTML = cardHTML;

  const postNodes = document.querySelectorAll(".card");

  postNodes.forEach((postNode) => {
    postNode.addEventListener("click", () => {
      const img = postNode.querySelector(".card-img-top");
      overlayImageEl.src = img.src;
      overlayImageEl.alt = img.alt;
      overlayEL.classList.remove("d-none");
      overlayEL.classList.add("d-block");
    });
  });

  closeButtonEl.addEventListener("click", () => {
    overlayEL.classList.replace("d-block", "d-none");
  });
});
