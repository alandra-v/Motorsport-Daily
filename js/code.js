/******************/
/* BLOG ARTICLES */
/*****************/

// fetch data with async await

const apiURL = "API_data/blogPosts.json";

getData();

async function getData() {

  // fetch and filter data
  const response = await fetch(apiURL);
  const dataAll = await response.json();
  // console.log(dataAll);
  const dataCEC = dataAll.filter(post => (post.category === "c-e-cars"));
  // console.log(dataCEC);
  const dataEC = dataAll.filter(post => (post.category === "e-cars"));
  // console.log(dataEC);


  // Variables

  const btnAll = document.querySelector("button.all");
  const btnCEC = document.querySelector("button.c-e-cars");
  const btnEC = document.querySelector("button.e-cars");

  const navBtns = [btnAll, btnCEC, btnEC];

  // Function Calls
  createPostList(dataAll);


  // Event Listeners
  btnAll.addEventListener("click", (e) => {
    e.preventDefault();
    generatePostList(dataAll)
    // console.log("click all");
    navBtns.forEach((btn) => { btn.classList.remove("active") });
    btnAll.classList.add("active");
  });
  btnCEC.addEventListener("click", (e) => {
    e.preventDefault();
    generatePostList(dataCEC)
    // console.log("click cec");
    navBtns.forEach((btn) => { btn.classList.remove("active") });
    btnCEC.classList.add("active");
  });
  btnEC.addEventListener("click", (e) => {
    e.preventDefault();
    generatePostList(dataEC)
    // console.log("click cec");
    navBtns.forEach((btn) => { btn.classList.remove("active") });
    btnEC.classList.add("active");
  });

}

// Functions

function createPostList(posts) {

  posts.forEach(post => {
    const template = `
    <div class="post">
       <div class="img-container">
       <img src="${post.thumbnail}" alt="${post.alt}" class="thumbnail" height="200" width="520">
      </div>
      <h3>${post.title}</h3>
      <p class="caption">${post.caption}</p>
      <span class="date" aria-label="${post.date}">${post.date}</span>
      <button class="continue-reading">Weiterlesen > </button>
    </div>
    `;

    if (!document.querySelector("ul")) {
      const postsContainer = document.createElement("ul");
      const postsCard = document.createElement("li");
      postsCard.classList.add("post");
      postsCard.innerHTML = template;
      postsContainer.appendChild(postsCard);
      document.querySelector("section.articles-section").appendChild(postsContainer);
    } else {
      const postsCard = document.createElement("li");
      postsCard.classList.add("post");
      postsCard.innerHTML = template;
      document.querySelector("ul").appendChild(postsCard);
    }

  });
}

function generatePostList(posts) {
  if (document.querySelector("ul")) {
    document.querySelector("ul").remove();
    createPostList(posts);
    console.log("ul removed");
  } else {
    createPostList(posts);
    console.log("new ul");
  }
}



/*********************/
/* EMAIL VALIDATION */
/********************/

// Variables

const emailInput = document.querySelector("#email");
let email;
const submitBtn = document.querySelector("#submit-btn");
const container = document.querySelector("div.registration-container");

// Functions

function emailValidation(e) {

  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  email = emailInput.value;
  if (!email) {
    // console.error("No email provided");
    if (!document.querySelector("div.error")) {
      errorDisplay(e);
    }
    submitBtn.disabled = true;
  } else {
    if (!emailRegEx.test(email)) {
      // console.error("Invalid email address");
      if (!document.querySelector("div.error")) {
        errorDisplay(e);
      }
      submitBtn.disabled = true;
      submitBtn.style
    } else {
      // console.info(`${email} is valid`);
      submitBtn.disabled = false;
      document.querySelector("div.error").style.display = "none";
    }
  }
}

function errorDisplay() {
  const error = document.createElement("div");
  error.classList.add("error");
  const errorMsg = document.createElement("p");
  errorMsg.innerText = "❗️ Please fill in a valid email address"
  error.appendChild(errorMsg);
  container.after(error);
}

function sendData() {
  // sending email address to backend
  console.log("sending email address to backend");
  submitBtn.style.display = "none";
}

// Event Listeners

emailInput.addEventListener("keyup", emailValidation);
submitBtn.addEventListener("click", sendData);
