let hotels = {
  data: [
    {
      hotelsName: "Hyatt Palace",
      category: "Kathmandu",
      price: "30",
      image:"hyatt.jpg",
    },
    {
      hotelsName: "Sunshine Resort Pokhara",
      category: "Pokhara",
      price: "49",
      image: "Sunshine Resort Pokhara.jpg",
    },
    {
      hotelsName: "Sporty SmartWatch",
      category: "Chitwan",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      hotelsName: "The Dwarika's Hotel",
      category: "Kathmandu",
      price: "29",
      image: "dwarika.jpg",
    },
    {
      hotelsName: "Black Leather Jacket",
      category: "Mustang",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      hotelsName: "Fish Tail Lodge",
      category: "Pokhara",
      price: "89",
      image: "Fish Tail Lodge.jpg",
    },
    {
      hotelsName: "Brown Men's Jacket",
      category: "Mustang",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      hotelsName: "Bar Peepal Resort",
      category: "Pokhara",
      price: "49",
      image: "Bar Peepal Resort.jpg",
    },
  ],
};

for (let i of hotels.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("hotels-name");
  name.innerText = i.hotelsName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("hotels").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterhotels(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".hotels-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all hotels
window.onload = () => {
  filterhotels("all");
};