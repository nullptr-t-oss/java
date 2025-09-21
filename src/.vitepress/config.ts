import { defineConfig } from 'vitepress'
import head from "./head"
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

import type { ThemeConfig } from 'vitepress-theme-mild';
import { defineConfigWithTheme } from 'vitepress';
import baseConfig from 'vitepress-theme-mild/config';

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  vite: {
    plugins: [
      pagefindPlugin()
    ]
  },
  title: "Java",
  description: "Java Notes",
  //base: '/java/',
  head,
  markdown: {
    math: true
  },
  themeConfig: {

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },    
    docContentSlideEnter: {
      enable: {
        development: true,
        production: true
      },
      delay: 100
    },
    editLink: {
      pattern: 'https://github.com/0x-br0k3n/java/blob/main/src/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribue to this project', link: '/contribute' },
      { text: 'Our Team', link: '/team' }
    ],

    sidebar: [
      {
        text: 'Introduciton',
        collapsed: false,
        items: [
          { text: 'About Java', link: '/intro/About Java' },
          { text: 'OOP', link: '/intro/OOP' }
        ]
      },
      {
        text: 'Variables and Datatypes',
        collapsed: true,
        items: [
          { text: 'Datatypes', link: '/variables-datatypes/Datatypes' },
          { text: 'Typecasting', link: '/variables-datatypes/Typecasting' },
          { text: 'Operators and Expressions', link: '/variables-datatypes/Operators and Expressions' }
        ]
      },
      {
        text: 'Methods',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/Methods/Introduction' },
          { text: 'Method Overloading', link: '/Methods/Method Overloading' }
        ]
      },
      {
        text: 'Encapsulation',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/Encapsulation/Introduction' },
          { text: 'Access Specifier', link: '/Encapsulation/Access Specifier or Visibility Modifiers' }
        ]
      },
      {
        text: 'Constructors',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/Constructors/Introduction' }
        ]
      },
      {
        text: 'Library Functions',
        collapsed: true,
        items: [
          {
            text: 'Math',
            collapsed: true,
            items: [
              { text: 'Basic Math Functions', link: '/Libs/Maths/Basic Math Functions' }
            ]
          },
          {
            text: 'Wrapper Classes',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/Libs/Wrapper Classes/Introduction' },
              { text: 'Utility Methods', link: '/Libs/Wrapper Classes/Utility Methods' }
            ]
          },
        ]
      },
      {
        text: 'String',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/string/Introduction' },
          { text: 'compareTo()', link: '/string/CompareTo()' },
          { text: 'equals() & equalsIgnoreCase()', link: '/string/equals() & equalsIgnoreCase()' },
          { text: 'indexOf() & lastIndexOf()', link: '/string/indexOf() & lastIndexOf()' },
          { text: 'lowerCase() & upperCase()', link: '/string/lowerCase() & upperCase()' },
          { text: 'substring()', link: '/string/substring()' }
        ]
      },
      {
        text: 'Arrays',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/Arrays/Introduction' },
          { text: 'Searching Algorithms', link: '/Arrays/Searching' },
          { text: 'Sorting Algorithms', link: '/Arrays/Sorting' }
        ]
      },
      {
        text: 'Boolean algebra',
        collapsed: true,
        items: [
          { text: 'Laws', link: '/boolean-algebra/Laws' },
          { text: 'K-map', link: '/boolean-algebra/K-map' }
        ]
      },
      {
        text: 'Data Structures & Algorithms',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/Data Structures & Algorithms/Introduction' },
          {
            text: 'Data Structures',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/Data Structures & Algorithms/Data Structures/Introduction' },
              { text: 'Queue', link: '/Data Structures & Algorithms/Data Structures/Queue' },
              { text: 'Deque', link: '/Data Structures & Algorithms/Data Structures/Deque' }
            ]
          },
          {
            text: 'Algorithms',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/Data Structures & Algorithms/Algorithms/Introduction' }
            ]
          },
        ]
      },
      {
        text: 'Hardware',
        collapsed: true,
        items: [
          { text: 'Encoder', link: '/Hardware/Encoder' }
        ]
      },
      {
        text: 'Extra',
        collapsed: true,
        items: [
          { text: 'Memory', link: '/extra/Memory' }
        ]
      },{
        text: 'Programs',
        collapsed: true,
        items: [
          { text: 'Array Programs', link: '/programs/Array Programs' }
        ]
      },
      {
        text: 'Downloads',
        collapsed: true,
        items: [
          { text: 'eBooks', link: '/Downloads/eBooks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0x-br0k3n/java' }
    ]
  }
})
