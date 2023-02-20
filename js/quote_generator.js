/*********************/
/* QUOTE OF THE DAY */
/********************/
const quotes =
  ["“Flying cars are not a very efficient way to move things from one point to another.” ~Bill Gates",
    "“Shoes make an outfit: they’re like rims for a car.” ~Omari Hardwick",
    "“Money may not buy happiness, but I’d rather cry in a Jaguar than on a bus.” ~Françoise Sagan",
    "“Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?” ~George Carlin",
    "“It's like driving a car at night. You never see further than your headlights, but you can make the whole trip that way.” ~E. L. Doctorow",
    "“I know a lot about cars, man. I can look at any car's headlights and tell you exactly which way it's coming.” ~Mitch Hedberg",
    "“We at BMW do not build cars as consumer objects, just to drive from A to B. We build mobile works of art.” ~Chris Bangle"
  ]

function createQuoteList(quoteI) {
  // for (let i = 0; i <= quotes.length; i++) {
  const quote = document.createElement("p");
  quote.classList.add("quote-of-the-day");
  quote.innerHTML = `<p class="quote-title">Quote of the day:<br><br> ${quoteI}</p>`;
  document.querySelector("div.quote-container").appendChild(quote);
  // console.log(quote);
  // }
}

let day = new Date();
// console.log(day.getDay());
switch (day.getDay()) {
  case 0:
    createQuoteList(quotes[0]);
    // console.log("sunday");
    break;
  case 1:
    createQuoteList(quotes[1]);
    // console.log("monday");
    break;
  case 2:
    createQuoteList(quotes[2]);
    console.log("today is tuesday");
    break;
  case 3:
    createQuoteList(quotes[3]);
    break;
  case 4:
    createQuoteList(quotes[4]);
    break;
  case 5:
    createQuoteList(quotes[5]);
    break;
  case 6:
    createQuoteList(quotes[6]);
    break;
  default:
    createQuoteList("“Any man can learn anything he will, but no man can teach except to those who want to learn.” ~Henry Ford");
    console.log("the week only has 7 days");
}
