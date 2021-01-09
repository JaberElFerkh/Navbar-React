import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDropDownFill />,
    iconOpened: <RiIcons.RiArrowDropUpFill />,
    subNav: [
      {
        title: 'Users',
        path: '/home/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/home/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Blogs',
    path: '/blogs',
    icon: <FaIcons.FaBloggerB />,
    iconClosed: <RiIcons.RiArrowDropDownFill />,
    iconOpened: <RiIcons.RiArrowDropUpFill />,
    subNav: [
      {
        title: 'Blog 1',
        path: '/home/blog1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Blog 2',
        path: '/home/blog2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Blog 3',
        path: '/home/blog3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
