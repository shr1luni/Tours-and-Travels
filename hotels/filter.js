let hotels = {
  data: [
    {
      hotelsName: "Hyatt Palace",
      category: "Kathmandu",
      price: "40,892",
      image:"hyatt.jpg",
      description:"Kathmandu-3.5 km from centre"
    },
    {
      hotelsName: "Sunshine Resort",
      category: "Pokhara",
      price: "38,336",
      image: "Sunshine Resort Pokhara.jpg",
      description:"Pokhara-5.3 km from centre"
    },
    {
      hotelsName: "Tiger Tops Tharu Lodge",
      category: "Chitwan",
      price: "40,336",
      image: "Tiger Tops Tharu Lodge.jpg",
      description:" Chitwan-31.7 km from centre"
    },
    {
      hotelsName: "The Dwarika's Hotel",
      category: "Kathmandu",
      price: "186,571",
      image: "dwarika.jpg",
      description:"Kathmandu-1.8 km from centre"
    },
    {
      hotelsName: "Royal Mustang Resort",
      category: "Mustang",
      price: "28,000",
      image: "Royal Mustang Resort.jpg",
      description:"Mustang-1.5 km from centre"
    },
    {
      hotelsName: "Fish Tail Lodge",
      category: "Pokhara",
      price: "84,340",
      image: "Fish Tail Lodge.jpg",
      description:"Pokhara-3 km from centre"
    },
    {
      hotelsName: "Moksha Mustang",
      category: "Mustang",
      price: "30,000",
      image: "Moksha Mustang.jpg",
      description:"Mustang-2.2 km from centre"
    },
    {
      hotelsName: "Bar Peepal Resort",
      category: "Pokhara",
      price: "33,455",
      image: "Bar Peepal Resort.jpg",
      description:"Pokhara-2.7 km from centre"
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
  let name = document.createElement("h3");
  name.classList.add("hotels-name");
  name.innerText = i.hotelsName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "NPR"+" " + i.price;
  container.appendChild(price);

  let des = document.createElement("h5");
  icon = document.createElement("i");
  icon.setAttribute("class","fa-solid fa-location-dot");
  container.appendChild(icon);
  des.innerText = i.description;
  container.appendChild(des);
 

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