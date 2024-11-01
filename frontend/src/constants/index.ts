
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
    title: "Resources",
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
    img: "https://images.unsplash.com/photo-1617056239820-8ce90ba48193?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Help Azar to continue his study",
    category: "Education",
    color: "text-emerald-200",
    goal: 1500,
    collected: 800,
    remaining: 700,
    progress: calculateProgress(1500, 800),
    href: "",
  },
  {
    img: "https://images.unsplash.com/photo-1578496781985-452d4a934d50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Save Diana's life",
    category: "Health",
    color: "text-purple-300",
    goal: 2000,
    collected: 1200,
    remaining: 800,
    progress: calculateProgress(2000, 1200),
    href: "",
  },
  {
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Build School for poor students",
    category: "School Construction",
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
