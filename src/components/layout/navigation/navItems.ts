type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const navItems: NavItem[] = [
  {
    link: "/",
    name: "Home"
  },
  {
    link: "/expenses",
    name: "Wydatki"
  },
  {
    link: "/incomes",
    name: "Przychody"
  },
  {
    link: "/statistics",
    name: "Statystyki"
  },
  {
    link: "/profile",
    name: "Profil"
  }
];

export { type NavItem, navItems };