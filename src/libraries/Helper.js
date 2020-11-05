import pages from './../mixins/pages.js';
import data from './../mixins/data.js';

export default {
  characters: {
    imagePath(characterDetails='', imageName='') {
      let imagePath = '';
      const {
        root,
        characters,
        defaultCharacter,
        defaultExtension
      } = data.config.images;

      imagePath += root;
      imagePath += characters;
      imagePath += characterDetails ? imageName : defaultCharacter;
      imagePath += '.';
      imagePath += defaultExtension;

      return imagePath;
    },
    addPageNameItem(charactersList) {
      charactersList.forEach((character, id) => {
        charactersList[id].page_name = character.name
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[á]/g, 'a')
          .replace(/[&]/g, 'and')
          .replace(/[^\w-]+/g, '');
      });

      return charactersList;
    },
    idFromPageName(pageName) {
      return pages
        .filter(page => Object.is(page.page_name, pageName))
        .map(pageItem => pageItem.char_id)[0];
    }
  },
  images: {
    dotLoader() {
      const {
        root,
        loader
      } = data.config.images;
      return root + loader.dot;
    },
    blurLoader() {
      const {
        root,
        loader
      } = data.config.images;
      return root + loader.blur;
    }
  }
};
