$(document).ready(function () {

  // const codigo = `
  // <div class="card">
  //           <div class="like"></div>
  //           <a href="">
  //               <img class="produto" src="https://static.vecteezy.com/ti/fotos-gratis/t2/22653879-fantasia-ilha-com-cachoeiras-3d-ilustracao-elementos-do-isto-imagem-mobiliado-de-nasa-generativo-ai-gratis-foto.jpg" alt="">
  //           </a>
  //           <h4 class="nome-produto">${element.name}</h4>
  //           <div class="rating">
  //               &#9733;
  //               &#9733;
  //               &#9733;
  //               &#9733;
  //               &#9734;
  //           </div>
  //           <div class="price">
  //               <h5>Preço</h5>
  //               <h5>Preço promoção</h5>
  //           </div>
  //           <a class="button" href="carrinho.html">Adicionar ao carrinho</a>
  //       </div>
  // `;

  fetch('data.json')
    .then((Response) => Response.json())
    .then((data) => {
      data.forEach(element => {
        console.log("===================================");
        document.querySelector('.slider').insertAdjacentHTML('beforeend',  `
        <div class="card">
                  <div class="like"></div>
                  <a href="">
                      <img class="produto" src=${element.image} alt="${element.name}">
                  </a>
                  <h4 class="nome-produto" title="${element.name}">${element.name}</h4>
                  <div class="rating">
                  ${handleRating(element.rating)}
                  </div>
                  <div class="price">
                      <h5>R$ ${handlePrice(element.price)}</h5>
                      <h5>R$ ${handlePrice(element.price, true )}</h5>
                  </div>
                  <a class="button" href="carrinho.html">Adicionar ao carrinho</a>
              </div>
        `);
        console.log("===================================");
      });
    })

    .then(() => {

      $(".js-slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    })

});

    function handleRating (rating) {
      let htmlToReturn = "";
      for (let i = 0; i < rating; i++) {
        htmlToReturn = htmlToReturn + "&#9733;";
      }

      for (let i = 0; i < 5 - rating; i++) {
        htmlToReturn = htmlToReturn + "&#9734;";
      }

      return htmlToReturn
    }

    function handlePrice(price, discount = false) {
      if (discount) {
        price = price * 0.9;
      }

      return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }