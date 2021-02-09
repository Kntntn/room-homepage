function toggleMenu() {
  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

const content = [
  [
    "Discover innovative<br>ways to decorate",
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "images/desktop-image-hero-1.jpg",
  ],
  [
    "We are available all across the globe",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "images/desktop-image-hero-2.jpg",
  ],
  [
    "Manufactured with the best materials",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    "images/desktop-image-hero-3.jpg",
  ],
];

var current = 0;

function nextSlide(direction) {
  var title = document.getElementById("title");
  var text = document.getElementById("text");
  var image = document.getElementById("image");

  if (direction == 0) {
    current -= 1;
    if (current == -1) {
      current = content.length - 1;
    }
  } else {
    current += 1;
    if (current == 3) {
      current = 0;
    }
  }
  title.innerHTML = content[current][0];
  text.innerHTML = content[current][1];
  image.src = content[current][2];
}
