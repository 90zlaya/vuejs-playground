export default {
  config: {
    images: {
      root: 'images/',
      characters: 'characters/',
      defaultCharacter: 'character',
      defaultExtension: 'jpg',
      loader: {
        dot: 'dot.gif',
        blur: 'blur.gif'
      }
    },
    slider: {
      numberOfSlides: 6
    },
    characters: {
      numberOfCharacters: 3
    },
    locales: {
      default: 'gb'
    },
    api: {
      cacheResponseSeconds: 900
    }
  },
  routerRoutes: {
    home: {
      path: '/',
      name: 'home'
    },
    character: {
      path: '/:pageName',
      name: 'character'
    },
    pageNotFound: {
      path: '/404',
      name: 'page-not-found'
    }
  },
  urls: {
    developer: {
      url: 'https://www.zlatanstajic.com/',
      title: 'Zlatan Stajić'
    },
    phpLibrary: {
      url: 'https://php-library.zlatanstajic.com/',
      title: 'PHP Library'
    },
    social: {
      github: 'https://github.com/90zlaya',
      linkedIn: 'https://www.linkedin.com/in/90zlaya',
      youtube: 'https://www.youtube.com/90zlaya',
      instagram: 'https://instagram.com/90zlaya'
    },
  },
  navbarSections: {
    header: '#header',
    quotes: '#quotes',
    characters: '#characters',
    statistics: '#statistics',
    synopsis: '#synopsis',
    about: '#about'
  },
  ids: {
    loadMoreCharacters: 'load-more-characters'
  },
  quotedAuthors: [
    'Walter White',
    'Skyler White',
    'Jesse Pinkman',
    'Saul Goodman',
    'Hank Schrader',
    'Mike Ehrmantraut',
    'Gus Fring',
    'Hector Salamanca'
  ]
};
