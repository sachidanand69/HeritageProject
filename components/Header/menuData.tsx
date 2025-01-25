import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      
      {
        id: 35,
        title: "Features",
        newTab: false,
        path: "/#features",
      },
      
    ],
  },
  {
    id: 3,
    title: "Hospitals",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Find Hospitals",
        newTab: false,
        path: "/blog",
      },
      
      {
        id: 35,
        title: "NABH-Pre-Accrediation",
        newTab: false,
        path: "/docs",
      },
      {
        id: 37,
        title: "Rohini Registration",
        newTab: false,
        path: "/docs",
      },
      {
        id: 38,
        title: "Discloser",
        newTab: false,
        path: "/docs",
      },
      {
        id: 39,
        title: "Join Our Networks",
        newTab: false,
        path: "/docs",
      },
      
    ],
  },
  {
    id: 2.3,
    title: "Senior Citizens",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "UB Arogyadaan",
        newTab: false,
        path: "http://223.31.103.204/CorporateECard/?CORPO=ANDHRA",
      },
      {
        id: 34,
        title: "OMP",
        newTab: false,
        path: "http://www.wta-heritage.com/",
      },
      {
        id: 35,
        title: "Cashless Anywhere",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Hospital Portal",
        newTab: false,
        path: "http://www.heritagehealthtpa.in/HospitalPortal/",
      },
      // {
      //   id: 35.1,
      //   title: "Support",
      //   newTab: false,
      //   path: "/support",
      // },
      // {
      //   id: 36,
      //   title: "404",
      //   newTab: false,
      //   path: "/error",
      // },
    ],
  },

  {
    id: 4,
    title: "Careers",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
