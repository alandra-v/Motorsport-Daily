// fetch data with async await

const apiURL = "API_data/blogPosts.json";

async function getData() {

  const response = await fetch(apiURL);
  const data = await response.json();

  // console.log(data);
  createPostList(data);
  return data;
}

const dataPosts = getData()
const dataPostsArr = dataPosts || [];
console.log(dataPosts);
console.log(dataPostsArr);

// Variables

const btnAll = document.querySelector("button.all");
const btnCEC = document.querySelector("button.c-e-cars");
const btnEC = document.querySelector("button.e-cars");

// filter only combustion engine cars articles
const postsDatafilteredCEC = dataPostsArr.filter(post => (post.category === "c-e-cars"));
console.log(postsDatafilteredCEC);
// filter only electric cars articles
const postsDatafilteredEC = dataPostsArr.filter(post => (post.category === "e-cars"));
console.log(postsDatafilteredEC);

// Functions

function generatePostList(category) {
  if (document.querySelector("ul")) {
    document.querySelector("ul").remove();
    createPostList(category);
    console.log("ul removed");
  } else {
    createPostList(category);
    console.log("new ul");
  }
}

function createPostList(posts) {
  posts.forEach(post => {
    const template = `
      <div class="post">
         <div class="img-container">
         <img src="${post.thumbnail}" alt="${post.alt}" class="thumbnail" height="200" width="auto">
        </div>
        <h3>${post.title}</h3>
        <p class="caption">${post.caption}</p>
        <span class="date" aria-label="${post.date}">${post.date}</span>
        <button class="continue-reading">Continue reading > </button>
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

// Event Listeners

btnAll.addEventListener("click", function () { console.log("click all") });
btnCEC.addEventListener("click", function () { console.log("click cec") });
btnEC.addEventListener("click", function () { console.log("click ec") });
btnAll.addEventListener("click", function () { generatePostList(postsDataArr) });
btnCEC.addEventListener("click", function () { generatePostList(postsDatafilteredCEC) });
btnEC.addEventListener("click", function () { generatePostList(postsDatafilteredEC) });


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
