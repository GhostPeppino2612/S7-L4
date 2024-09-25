const cats = document.getElementById("cats");
const dogs = document.getElementById("dogs");

const row = document.querySelector("#card-cont .row");
console.log(row);

const url = "https://api.pexels.com/v1/search?query=";

const input = document.getElementById("name");

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url + input.value, {
    headers: {
      Authorization: "GMa30AgGoNrvk7hBnt3zZOyqzP7vCxT3epJVoPH7OkURa2WHfbTlGoYf",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nella Fetch");
      }
    })
    .then((data) => {
      console.log(data.photos);
      let cardContent = "";
      data.photos.forEach((element) => {
        cardContent += `
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${element.src.original}" class="bd-placeholder-img card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${element.alt}</h5>
                <p class="card-text">Photographer: ${element.photographer}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="./details.html?id=${element.id}" class="btn btn-sm btn-outline-secondary">View</a>
                    <a class="hide-btn btn btn-sm btn-outline-secondary">Hide</a>
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>
            </div>
          </div>`;
      });

      // Aggiorna il contenuto della row con tutte le card generate
      row.innerHTML = cardContent;

      const hideBtn = document.querySelectorAll(".hide-btn");

      hideBtn.forEach((e) => {
        e.addEventListener("click", (e) => {
          e.target.closest(".col-md-4").remove();
        });
      });
    });
});

cats.addEventListener("click", (e) => {
  fetch(url + "cat", {
    headers: {
      Authorization: "GMa30AgGoNrvk7hBnt3zZOyqzP7vCxT3epJVoPH7OkURa2WHfbTlGoYf",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nella Fetch");
      }
    })
    .then((data) => {
      console.log(data.photos);
      let cardContent = "";
      data.photos.forEach((element) => {
        cardContent += `
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${element.src.original}" class="bd-placeholder-img card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${element.alt}</h5>
                <p class="card-text">Photographer: ${element.photographer}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href=".details.html?${element.id}" class="btn btn-sm btn-outline-secondary">View</a>
                    <a class="hide-btn btn btn-sm btn-outline-secondary">Hide</a>
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>
            </div>
          </div>`;
      });

      // Aggiorna il contenuto della row con tutte le card generate
      row.innerHTML = cardContent;

      const hideBtn = document.querySelectorAll(".hide-btn");

      hideBtn.forEach((e) => {
        e.addEventListener("click", (e) => {
          e.target.closest(".col-md-4").remove();
        });
      });
    });
});

dogs.addEventListener("click", (e) => {
  fetch(url + "dog", {
    headers: {
      Authorization: "GMa30AgGoNrvk7hBnt3zZOyqzP7vCxT3epJVoPH7OkURa2WHfbTlGoYf",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nella Fetch");
      }
    })
    .then((data) => {
      console.log(data.photos);
      let cardContent = "";
      data.photos.forEach((element) => {
        cardContent += `
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="${element.src.original}" class="bd-placeholder-img card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${element.alt}</h5>
                <p class="card-text">Photographer: ${element.photographer}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="./details.html?id=${element.id}" class="btn btn-sm btn-outline-secondary">View</a>
                    <a class="hide-btn btn btn-sm btn-outline-secondary">Hide</a>
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>
            </div>
          </div>`;
      });

      // Aggiorna il contenuto della row con tutte le card generate
      row.innerHTML = cardContent;

      const hideBtn = document.querySelectorAll(".hide-btn");

      hideBtn.forEach((e) => {
        e.addEventListener("click", (e) => {
          e.target.closest(".col-md-4").remove();
        });
      });
    });
});
