import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Home",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "category",
        path: "/new-business",
      },
      {
        title: "supplier",
        path: "/businesses",
      },
    ],
  },
  {
    title: "Add drug",
    icon: <FaCommentAlt />,
    path: "/add drug",
  },
  {
    title: "Add stock",
    icon: <FaCommentAlt />,
    path: "/add drug",
  },
 
  {
    title: "All drugs",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
  {
    title: "Sale reversal",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "category",
        path: "/new-business",
      },
      {
        title: "supplier",
        path: "/businesses",
      },
    ],
  },
  {
    title: "Reports",
    icon: <BiImageAdd />,
    childrens: [
      {
        title: "Basic reports",
        path: "/my-profile",
      },
      {
        title: "Advanced",
        path: "/edit-profile",
      },
    ],
  },
];

export default menu;
