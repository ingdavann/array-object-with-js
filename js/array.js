const courses = [
    {
      title: "Java Development",
      des: "Java Development",
      img: "https://media.licdn.com/dms/image/D5612AQHGoSQf8vwBpQ/article-cover_image-shrink_600_2000/0/1677657266568?e=2147483647&v=beta&t=7oQQt0jDGv-0Obgbqd3i-k5jqHH49gelI4wh-wQVl40",
    },
    {
      title: "HTML, CSS and JavaScript",
      des: "HTML, CSS and JavaScript",
      img: "https://wp.brytdesigns.com/wp-content/uploads/2019/12/html_css_javascript_infographic.png",
    },
    {
      title: "Java Development",
      des: "Java Development",
      img: "https://media.licdn.com/dms/image/D5612AQHGoSQf8vwBpQ/article-cover_image-shrink_600_2000/0/1677657266568?e=2147483647&v=beta&t=7oQQt0jDGv-0Obgbqd3i-k5jqHH49gelI4wh-wQVl40",
    },
    {
      title: "HTML, CSS and JavaScript",
      des: "HTML, CSS and JavaScript",
      img: "https://wp.brytdesigns.com/wp-content/uploads/2019/12/html_css_javascript_infographic.png",
    },
    {
        title: "HTML, CSS and JavaScript",
        des: "HTML, CSS and JavaScript",
        img: "https://wp.brytdesigns.com/wp-content/uploads/2019/12/html_css_javascript_infographic.png",
      },
  ];
let card = "";
let courseSection = document.querySelector("#course");
courses.map((eachCourse) => {
    card += `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${eachCourse.img}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${eachCourse.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${eachCourse.des}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    </div>
    `;
});
courseSection.innerHTML += card;
