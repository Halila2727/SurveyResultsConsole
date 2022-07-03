console.log("Script running!");

// This is the arrays you'll interact with! It's pretty good. Scroll down for the first challenge.
let names = [
  "Daniel",
  "Yaika",
  "Luke",
  "William",
  "Kathryn",
  "Taylor",
  "Makenzie",
  "Brenton",
  "Max",
  "Mike",
  "Olivia",
  "Rebecca",
  "Daley",
  "Tim",
  "Ahmad",
  "Chelsey",
  "Faedra",
  "Terrace",
  "Kate",
  "Zaire"
];

let nickname = [
  "Danny",
  "Yikes",
  "Loki",
  "Wild Bill",
  "Kath",
  "Tay",
  "Kenzy",
  "Smelly",
  "Smallman",
  "",
  "Liv",
  "Becca",
  "",
  "Tim",
  "Ahms",
  "",
  "Mattox",
  "T-Dawg",
  "KMoMo",
  ""
];

let age = [
  31,
  30,
  28,
  29,
  51,
  25,
  27,
  30,
  100,
  19,
  26,
  29,
  25,
  27,
  29,
  29,
  43,
  31,
  27,
  29
];

let favoriteBand = [
  "Booker T and the MGs",
  "OAR",
  "Miike Snow",
  "Pentatonix",
  "Imagine Dragons",
  "Joseph",
  "Something Corporate",
  "Guster",
  "adele",
  "Led Zeppelin",
  "",
  "The Beatles",
  "Leon Bridges",
  "Kishi Bashi",
  "Saves The Day",
  "Eli young band",
  "OAR",
  "Chicago",
  "Adele",
  "MCR"
];

let favoriteShow = [
  "Mad Men",
  "Penny Dreadful",
  "Game of Thrones",
  "Steven Universe",
  "Game of Thrones",
  "The West Wing",
  "Bob's Burgers",
  "Rick and Morty",
  "Game of Thrones",
  "Welcome to the NHK",
  "Parks and Rec",
  "Hunter x Hunter",
  "Stranger Things",
  "The Wire",
  "The West Wing",
  "WOD",
  "The Office",
  "The Office",
  "Game of Thrones",
  "Rick and morty"
];

let isProgrammer = [
  true,
  false,
  false,
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  false
];

let state = [
  "NY",
  "TX",
  "N/A - UK",
  "TX",
  "NC",
  "NY",
  "TX",
  "ON",
  "CA",
  "AZ",
  "AZ",
  "TX",
  "TN",
  "CA",
  "MI",
  "ID",
  "WI",
  "AZ",
  "AZ",
  "TX"
];

let hairColor = [
  "Brown",
  "Black",
  "Dark Blonde",
  "Brown",
  "Brown",
  "Brown",
  "Brown",
  "Blonde",
  "Brown",
  "Blonde",
  "Blonde",
  "Brown",
  "Brown",
  "Black",
  "Black",
  "Blonde",
  "Brown",
  "Brown",
  "Amber ",
  "Black"
];

let motto = [
  "Don't overthink it.",
  "I guess we'll find out. ",
  "People have catchphrases in America?",
  "Being kind is always a good idea.",
  "You can practice being right or you can practice being kind. ",
  "The work always gets done.",
  "Meh",
  "Ohmydog",
  "Get along little doggy",
  "I never die.",
  "The best is yet to come!",
  "The thing is",
  "You can lock your heart up",
  "Swing Away",
  "That's Dope!",
  "Don't tell me",
  "She is clothed in strength and dignity and she laughs without fear of the future",
  "Beep beep beep. ",
  "Do not pity the dead. Pity the living; most of all",
  "I totally got this Motto/0",
  "Don't overthink it.",
  "I guess we'll find out. ",
  "People have catchphrases in America?",
  "Being kind is always a good idea.",
  "You can practice being right or you can practice being kind. ",
  "The work always gets done.",
  "Meh",
  "Ohmydog",
  "Get along little doggy",
  "I never die.",
  "The best is yet to come!",
  "The thing is",
  "You can lock your heart up",
  "Swing Away",
  "That's Dope!",
  "Don't tell me",
  "She is clothed in strength and dignity and she laughs without fear of the future",
  "Beep beep beep. ",
  "Do not pity the dead. Pity the living; most of all",
  "I totally got this "
];

// 1a. console.log the name of every person who responded to the survey
names.map((name, index) => {
  return console.log(index, name);
});

// 1b. console.log "Hi, my name is _____, and I live in ____." for every person who responded to the survey
for (var i = 0; i < names.length; i++) {
  console.log(
    "Hi, my name is " + names[i] + ", and I live in " + state[i] + "."
  );
}

// 2a. Create an empty array and name it shortBios. Inside of shortBios, create an object that stores each respondents name, nickname, and age. Then, console.log shortBios.
let shortBios = [];
for (let i = 0; i < names.length; i++) {
  const person = { firstname: names[i], nickname: nickname[i], age: age[i] };
  shortBios.push(person);
}
console.log(shortBios);

// 2b. Add the favorite show and favorite band to each person object inside of the shortBios array. Then, console.log shortBios.
for (let i = 0; i < names.length; i++) {
  shortBios[i].favshow = favoriteShow[i];
  shortBios[i].favband = favoriteBand[i];
}
console.log(shortBios);

// 2c. Create a new array called longBios. Inside of longBios, create an object that stores each respondents name, nickname, age, favorite show, favorite band, if they are a programmer, the state they live in, their hair color, and their personal bio. Then, console.log longBios.
let longBios = [];
for (let i = 0; i < names.length; i++) {
  const person = { firstname: names[i], nickname: nickname[i], age: age[i] };
  longBios.push(person);
  longBios[i].favshow = favoriteShow[i];
  longBios[i].favband = favoriteBand[i];
  longBios[i].programmer = isProgrammer[i];
  longBios[i].fromstate = state[i];
  longBios[i].hcolor = hairColor[i];
  longBios[i].bio = motto[i];
}
console.log(longBios);

// 3a. For each person in longBios, console.log a descriptor of where they live.
// It will look something like this: "____ lives in _____."
for (let i = 0; i < longBios.length; i++) {
  console.log(
    longBios[i].firstname + " lives in " + longBios[i].fromstate + "."
  );
}
// 3b. console.log each person's nickname.
// BONUS: Write some control flow that determines whether / how to respond if someone didn't provide a nickname.
for (let i = 0; i < longBios.length; i++) {
  if (longBios[i].nickname !== "")
    console.log(
      longBios[i].firstName + "'s nickname is " + longBios[i].nickname + "."
    );
  else console.log(longBios[i].firstname + " doesn't have a nickname.");
}
// 4. Find the average of the respondents' ages. Console.log this average (please use a loop, don't hard code the answer).
let agetotal = 0;
for (let i = 0; i < longBios.length; i++) {
  agetotal += longBios[i].age;
}
console.log("The average age is " + agetotal / longBios.length + ".");

// 5. Print out the percentage of respondents who have brown hair. Console.log this percentage (please use a loop, don't hard code the answer).
let brownhair = 0;
for (let i = 0; i < longBios.length; i++) {
  let compare = longBios[i].hcolor;
  if (compare === "Brown") brownhair++;
}
console.log(
  "Only " +
    (brownhair / longBios.length) * 100 +
    "% of respondents have brown hair."
);
// 6. Create two new arrays - one for programmers, and one for non programmers.
//    Sort all the people in the contacts array into these two more specific arrays.
let programmers = [];
let ptrue = 0;
let nonprogrammers = [];
let pfalse = 0;
for (let i = 0; i < longBios.length; i++) {
  if (longBios[i].programmer) {
    programmers[ptrue] = longBios[i].firstname;
    ptrue++;
  } else {
    nonprogrammers[pfalse] = longBios[i].firstname;
    pfalse++;
  }
}
console.log(programmers);
console.log(nonprogrammers);

// 7. Create a new array only for people who listed "Game of Thrones" as their one of their favorite shows.
let GameOfThrones = [];
let likesGOT = 0;
for (let i = 0; i < longBios.length; i++) {
  let compare = longBios[i].favshow;
  if (compare === "Game of Thrones") {
    GameOfThrones[likesGOT] = longBios[i].firstname;
    likesGOT++;
  }
}
console.log(GameOfThrones);

// 8. Console.log a list of all the bands that are liked by at least two people.
//    Pro-tip: some respondents capitalized band names and other respondents did not, so for example, if Panic at the Disco isn't listed, your code isn't accurately reporting your results.
let popularBands = [];
let positionB = 0;
for (let i = 0; i < names.length; i++) {
  let org = longBios[i].favband;
  let lc = org.toLowerCase();
  for (let n = i + 1; n < names.length; n++) {
    let org2 = longBios[n].favband;
    let lc2 = org2.toLowerCase();
    if (lc === lc2) {
      popularBands[positionB] = lc;
      positionB++;
    }
  }
}
console.log(popularBands);

// EXTENSIONS //
// 9. Use the `.map()` method on the names array to create a new array called formattedNames which concatenates each name to an opening and closing `<h1>` tag.

// 10. Add each person's name to the webpage inside of the div with the id of "names."

// 11. Create a bio for each person and add it to the webpage inside of the div with the id of "biographies." Please use all the information about each person in this bio. For example: "_____, better know as _____ to friends currently lives in _____. ______'s motto is _______, which they heard on their favorite TV show ________." Be creative in the bio you create.
