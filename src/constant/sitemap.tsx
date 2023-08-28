import { SearchOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";

interface ISitemap {
    title: string;
    path: string;
}

interface IAction {
  title: string;
  icon?: React.ReactElement;
}

export const HEADER_SITEMAP : Array<ISitemap>= [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Menu',
      path: '/menu',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'Pages',
      path: '/pages',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Shop',
      path: '/shop',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
]

export const HEADER_ACTION : Array<IAction> = [
  {
    title: 'Search',
    icon: <UserOutlined />
  },
  {
    title: "Cart",
    icon: <ShoppingOutlined />
  },
  {
    title: "Search",
    icon: <SearchOutlined />
  }
] 

export const FOOTER_SITEMAP : Array<ISitemap>= [
    {
        title: 'About us',
        path: '/about',
    },
    {
        title: 'Contact us',
        path: '/contact',
    },
    {
        title: 'Our Menu',
        path: '/menu',
    },
    {
        title: 'Team',
        path: '/team',
    },
    {
        title: 'FAQ',
        path: '/faq',
    }
]