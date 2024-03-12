const Menu = [
  {
    label: "home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/profile/details",
      },
      {
        label: "Location",
        to: "/profile/location",
        children:[
           { label:"city",
            to:".city"
        }
        ]
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "/settings/account",
      },
      {
        label: "Security",
        to: "/settings/security",
        children: [
          {
            label: "Login",
            to: "/settings/security/login",
          },
          {
            label: "Register",
            to: "/settings/security/register",
          },
        ],
      },
    ],
  },
];
export default Menu;
