rowEl = document.querySelector(".row");
const api_url = "https://lanciweb.github.io/demo/api/pictures/";

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
});
