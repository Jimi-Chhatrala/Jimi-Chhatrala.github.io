const rowsNav = [
  {
    name: "All",
    category: "All",
  },
  {
    name: "Website",
    category: "Website",
  },
  {
    name: "Web-App",
    category: "Web App",
  },
  {
    name: "Game",
    category: "Game",
  },
  {
    name: "UI-Design",
    category: "UI Design",
  },
];

const DEMO_LINK = "https://jimi-chhatrala.github.io/";
const SOURCE_CODE_LINK = "https://github.com/jimi-chhatrala/";
const GITHUB_REPOSITORY_URL_JOINER = "tree/main";

const rowsData = [
  {
    id: 1,
    image: "expanding-cards",
    title: "Expanding Cards",
    category: "UI-Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maxime rem quod similique molestiae perferendis provident quibusdam, vel eaque quas ex adipisci tempore alias in voluptate illum voluptas ipsum minima illo accusantium commodi. Enim laboriosam dolore blanditiis nesciunt in, delectus animi inventore rerum quisquam aperiam ab nemo voluptas aut. Consectetur. dolore blanditiis nesciunt in, delectus animi inventore rerum quisquam aperiam ab nemo voluptas aut. Consectetur.",
    techstack: ["HTML5", "CSS3", "JAVASCRIPT"],
    demolink:
      "https://jimi-chhatrala.github.io/javascript-projects/Expanding Cards/",
  },
  {
    id: 2,
    image: "hamburger-menu",
    title: "Hamburger Menu",
    category: "UI-Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consectetur dolor, nihil nulla rerum optio veniam esse aperiam laudantium, vel provident incidunt aliquid! Alias distinctio cupiditate est amet laboriosam esse!",
    techstack: ["BOOTSTRAP", "FIREBASE"],
    demolink:
      "https://jimi-chhatrala.github.io/javascript-projects/Hamburger Menu/",
  },
  {
    id: 3,
    image: "progress-steps",
    title: "Progress Steps",
    category: "UI-Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore vero veritatis quisquam temporibus quidem ut deleniti illum neque libero provident, id dolore blanditiis exercitationem doloremque, ipsam dicta rem excepturi tenetur nam laborum sunt ea repellendus natus sit! Vitae, nobis non.",
    techstack: ["TAILWINDCSS", "FIREBASE", "JAVASCRIPT", "BOOTSTRAP"],
    demolink:
      "https://jimi-chhatrala.github.io/javascript-projects/Progress Steps/",
  },
  {
    id: 4,
    image: "movie-seat-booking",
    title: "Movie Seat Booking DOM and Local Storage",
    category: "Web-App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat, voluptatibus porro non nostrum dolores nemo esse molestias molestiae quibusdam quo asperiores quae, reprehenderit impedit.",
    techstack: ["NODEJS", "MONGODB"],
    demolink:
      "https://jimi-chhatrala.github.io/javascript-projects/Movie Seat Booking DOM and Local Storage",
  },
  {
    id: 5,
    image: "guess-the-number",
    title: "Guess The Number",
    category: "Game",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum amet veritatis, blanditiis itaque reiciendis similique temporibus aliquid fugiat nisi dolorem quibusdam eos est tempore architecto praesentium! Numquam, unde itaque!",
    techstack: ["REACTJS", "FIREBASE"],
    demolink:
      "https://jimi-chhatrala.github.io/javascript-projects/Guess the number",
  },
  {
    id: 6,
    image: "modal",
    title: "UI Modal",
    category: "UI-Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusamus soluta sapiente, sunt vel aperiam ullam illo iste qui, suscipit, sed provident quisquam itaque adipisci debitis optio quas vero voluptate!",
    techstack: ["HTML5", "CSS3", "JAVASCRIPT"],
    demolink: "https://jimi-chhatrala.github.io/javascript-projects/UI Modal",
  },
  {
    id: 7,
    image: "pig-game",
    title: "Pig Game",
    category: "Game",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisci, voluptatem vero totam mollitia, expedita voluptas excepturi distinctio sed incidunt nam delectus consequatur. Modi nostrum, adipisci neque sapiente minus quos rerum voluptas. Architecto repudiandae debitis atque ab temporibus, deleniti exercitationem cumque facere libero voluptate voluptas expedita? Sapiente fugit deleniti at.",
    techstack: ["HTML5", "CSS3", "JAVASCRIPT"],
    demolink: "https://jimi-chhatrala.github.io/javascript-projects/Pig Game",
  },
  {
    id: 8,
    image: "filter-category-gallery",
    title: "Filter Category Gallery",
    category: "UI-Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum numquam vel doloribus expedita adipisci dolorem incidunt doloremque excepturi eius iusto! Soluta unde odit consequatur autem.",
    techstack: ["HTML5", "CSS3", "JAVASCRIPT"],
    demolink:
      "https://jimi-chhatrala.github.io/javascript-projects/Filter Category Gallery",
  },
  {
    id: 9,
    image: "portfolio",
    title: "Portfolio",
    category: "Website",
    description:
      "This is a place to showcase about me, my skills, and my work portfolio.",
    techstack: ["HTML5", "CSS3", "JAVASCRIPT", "JQUERY"],
    demolink: "https://jimi-chhatrala.github.io/",
  },
  {
    id: 10,
    image: "input-border-label-animation",
    title: "Input Border Label Animation",
    category: "UI-Design",
    description:
      "Input Field with a beautiful animation where label becomes the part of the border when user clicks on the input field. Not only this, if user types in some text, then it remains retained if click on another input field or another area.",
    techstack: ["HTML5", "CSS3"],
    demolink:
      "https://jimi-chhatrala.github.io/javascript-projects/Input Border Label Animation",
  },
  {
    id: 11,
    image: "cat-photo-app",
    title: "Cat Photo App",
    category: "Website",
    description:
      "A simple website which shows information about the cats, their likes and dislikes, and several images and links to images. [Small Project of freecodecamp.org]",
    techstack: ["HTML5"],
    demolink:
      "https://jimi-chhatrala.github.io/Free-Code-Camp-Works/Responsive Web Design/Learn HTML by Building a Cat Photo App",
  },
  {
    id: 12,
    image: "cafe-menu",
    title: "Cafe Menu",
    category: "Website",
    description:
      "A simple design which shows a menu page for a cafe webpage. It shows coffee flavors and deserts information. [Small Project of freecodecamp.org]",
    techstack: ["HTML5", "CSS3"],
    demolink: `${DEMO_LINK}Free-Code-Camp-Works/Responsive Web Design/Learn Basic CSS by Building a Cafe Menu`,
    sourcecodelink: `${SOURCE_CODE_LINK}Free-Code-Camp-Works/${GITHUB_REPOSITORY_URL_JOINER}/Responsive Web Design/Learn Basic CSS by Building a Cafe Menu`,
  },
  {
    id: 13,
    image: "color-markers",
    title: "Color Markers",
    category: "UI-Design",
    description:
      "A simple design which shows a set of colored markers. It shows different ways to set color values and how to pair colors with each other. [Small Project of freecodecamp.org]",
    techstack: ["HTML5", "CSS3"],
    demolink: `${DEMO_LINK}Free-Code-Camp-Works/Responsive Web Design/Learn CSS Colors by Building a Set of Colored Markers`,
    sourcecodelink: `${SOURCE_CODE_LINK}Free-Code-Camp-Works/${GITHUB_REPOSITORY_URL_JOINER}/Responsive Web Design/Learn CSS Colors by Building a Set of Colored Markers`,
  },
  {
    id: 14,
    image: "mern-auth-app",
    title: "MERN Auth App",
    category: "Web-App",
    description:
      "This is a MERN (MongoDB, Express, React, Node.js) stack application with authentication. It allows users to sign up, log in, and log out, and provides access to protected routes only for authenticated users. This application is designed to demonstrate key aspects of modern web development and secure user management.",
    techstack: [
      "HTML5",
      "TAILWINDCSS",
      "REACTJS",
      "REDUX",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "FIREBASE",
      "RENDER",
    ],
    demolink: `https://mern-auth-vpuy.onrender.com/`,
    sourcecodelink: `${SOURCE_CODE_LINK}mern-auth`,
  },
  {
    id: 15,
    image: "movie-search-app",
    title: "Movie Search App",
    category: "Website",
    description:
      "The application allows users to search for movies and view detailed information.",
    techstack: ["HTML5", "MATERIALUI", "REACTJS", "REDUX", "REDUXSAGA", "API"],
    demolink: `${DEMO_LINK}movie-app/`,
    sourcecodelink: `${SOURCE_CODE_LINK}movie-app/`,
  },
  {
    id: 16,
    image: "blog-app",
    title: "Blog App",
    category: "Web-App",
    description:
      "A blog platform focused on technology topics, allowing tech enthusiasts and experts to share information, insights, news, reviews, and updates about the technology industry.",
    techstack: ["HTML5", "CSS3", "REACTJS", "FIREBASE"],
    demolink: `https://teach-on-tech.web.app/`,
    sourcecodelink: `${SOURCE_CODE_LINK}`,
  },
  {
    id: 17,
    image: "reactjs-projects",
    title: "ReactJS Projects",
    category: "UI-Design",
    description:
      "Made different components with ReactJS used in various pieces of our web applications such as Accordion, Random Color Generator, Star Rating, Image Slider, Load More Data Button, Tree View, QR Code Generator, Light Dark Mode, Scroll Indicator, Custom Modal Popup, GitHub Profile Finder, Search Autocomplete With API, Tic Tac Toe Game, Feature Flag, Use Fetch Custom Hook, Use Outside Click Custom Hook, Use Window Resize Custom Hook, Scroll To Top And Bottom and Scroll To Particular Section.",
    techstack: ["HTML5", "CSS3", "REACTJS", "API"],
    demolink: `${DEMO_LINK}reactjs-25-projects`,
    sourcecodelink: `${SOURCE_CODE_LINK}reactjs-25-projects`,
  },
  {
    id: 18,
    image: "recipe-app",
    title: "Recipe App",
    category: "Website",
    description:
      "This application allows you to search for recipes based on specific search term like apple or banana. You can view detailed recipes, including images and ingredient lists, and manage your favorite recipes.",
    techstack: ["HTML5", "TAILWINDCSS", "REACTJS", "API"],
    demolink: `${DEMO_LINK}react-js-recipe-app/`,
    sourcecodelink: `${SOURCE_CODE_LINK}react-js-recipe-app/`,
  },
  {
    id: 19,
    image: "weather-app",
    title: "Weather App",
    category: "Website",
    description:
      "This application is built using ReactJS and allows users to get current weather information by simply entering a location. Upon searching, the app retrieves and displays detailed weather data including location, country, temperature, climate, wind speed, and humidity.",
    techstack: ["HTML5", "CSS3", "REACTJS", "API"],
    demolink: `${DEMO_LINK}react-js-weather-app/`,
    sourcecodelink: `${SOURCE_CODE_LINK}react-js-weather-app/`,
  },
  {
    id: 20,
    image: "shopping-cart-app",
    title: "Shopping Cart App",
    category: "Web-App",
    description:
      "A modern shopping cart application built with ReactJS, using a third-party API to fetch product data. This app allows users to browse through a variety of products, add them to a shopping cart, and manage their selections seamlessly.",
    techstack: ["HTML5", "TAILWINDCSS", "REACTJS", "REDUX", "API"],
    demolink: `${DEMO_LINK}react-js-shopping-cart-app/`,
    sourcecodelink: `${SOURCE_CODE_LINK}react-js-shopping-cart-app/`,
  },
  {
    id: 21,
    image: "expense-tracker-app",
    title: "Expense Tracker App",
    category: "Web-App",
    description:
      "A simple and intuitive application for tracking your income and expenses. This app provides a clear overview of your financial status, including detailed charts and transaction lists.",
    techstack: [
      "HTML5",
      "TAILWINDCSS",
      "REACTJS",
      "REDUX",
      "API",
      "REACTAPEXCHART",
    ],
    demolink: `${DEMO_LINK}react-js-expense-tracker-app/`,
    sourcecodelink: `${SOURCE_CODE_LINK}react-js-expense-tracker-app/`,
  },
];

const skillsData = [
  {
    image: "html5",
    title: "HTML",
  },
  {
    image: "css3",
    title: "CSS",
  },
  {
    image: "sass",
    title: "Sass",
  },
  {
    image: "bootstrap",
    title: "Bootstrap",
  },
  {
    image: "tailwindcss",
    title: "Tailwind CSS",
  },
  {
    image: "javascript",
    title: "JavaScript",
  },
  {
    image: "typescript",
    title: "TypeScript",
  },
  // {
  //   image: "jquery",
  //   title: "jQuery",
  // },
  {
    image: "reactjs",
    title: "React JS",
  },
  {
    image: "redux",
    title: "Redux",
  },
  {
    image: "reduxsaga",
    title: "Redux Saga",
  },
  {
    image: "nextjs",
    title: "Next JS",
  },
  {
    image: "vuejs",
    title: "Vue JS",
  },
  {
    image: "expressjs",
    title: "Express Js",
  },
  {
    image: "graphql",
    title: "GraphQL",
  },
  {
    image: "nodejs",
    title: "Node Js",
  },
  {
    image: "firebase",
    title: "Firebase",
  },
  // {
  //   image: "php",
  //   title: "PHP",
  // },
  {
    image: "mysql",
    title: "MySQL",
  },
  {
    image: "mongodb",
    title: "MongoDB",
  },
  {
    image: "git",
    title: "Git",
  },
  {
    image: "github",
    title: "GitHub",
  },
  {
    image: "npm",
    title: "NPM",
  },
  {
    image: "vite",
    title: "Vite",
  },
  // {
  //   image: "reactnative",
  //   title: "React Native",
  // },
  {
    image: "md365fo",
    title: "MS Dynamics 365 F&O",
  },
  {
    image: "xpp",
    title: "X++",
  },
  {
    image: "webpack",
    title: "Webpack",
  },
  {
    image: "sql",
    title: "SQL",
  },
  {
    image: "api",
    title: "API",
  },
  {
    image: "postman",
    title: "Postman",
  },
  {
    image: "apollo",
    title: "Apollo",
  },
  {
    image: "python",
    title: "Python",
  },
  {
    image: "cpp",
    title: "C++",
  },
  {
    image: "gulp",
    title: "Gulp",
  },
  {
    image: "chakraui",
    title: "Chakra UI",
  },
  {
    image: "vercel",
    title: "Vercel",
  },
  {
    image: "netlify",
    title: "Netlify",
  },
  {
    image: "prettier",
    title: "Prettier",
  },
  {
    image: "restapi",
    title: "REST API",
  },
  {
    image: "render",
    title: "Render",
  },
  {
    image: "reactapexchart",
    title: "React ApexChart",
  },
];

const pythonStarCount = 1,
  cplusplusLanguageStarCount = 2,
  sqlStarCount = 3,
  problemSolvingStarCount = 4;

socialsData = [
  {
    image: "linkedin",
    url: "https://www.linkedin.com/in/jimichhatrala",
  },
  {
    image: "youtube",
    url: "https://www.youtube.com/channel/UCROId6dBeFxJCQAycqDNZ_g",
  },
  {
    image: "github",
    url: "https://github.com/jimi-chhatrala/",
  },
  {
    image: "stackoverflow",
    url: "https://stackoverflow.com/users/26219038/jimi-chhatrala",
  },
];
