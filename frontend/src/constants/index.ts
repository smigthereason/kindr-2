
export const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Donations",
        link: "/donation",
      },
    ],
  },
  {
    title: "Resoures",
    links: [
      {
        name: "Help Center",
        link: "/help-center",
      },
      {
        name: "Policies",
        link: "/policies",
      },
      {
        name: "Terms & Services",
        link: "/terms-and-services",
      },
    ],
  },
];

export const charities = [
  {
    img: "../src/assets/images/char1.png",
    title: "Help Azar to continue his study",
    categeory: "Education",
    color: "text-emerald-200",
    goal: 1500,
    collected: 800,
    remaining: 700,
    progress: calculateProgress(1500, 800),
    href: "",
  },
  {
    img: "../src/assets/images/char2.png",
    title: "Save Peter's life",
    categeory: "Health",
    color: "text-purple-300",
    goal: 2000,
    collected: 1200,
    remaining: 800,
    progress: calculateProgress(2000, 1200),
    href: "",
  },
  {
    img: "../src/assets/images/char3.png",
    title: "Build School for poor students",
    categeory: "School Construction",
    color: "text-yellow-200",
    goal: 3000,
    collected: 2500,
    remaining: 500,
    progress: calculateProgress(3000, 2500),
    href: "",
  },
]

// Function to calculate progress percentage
function calculateProgress(goal: number, collected: number): number {
  return Math.round((collected / goal) * 100);
}
