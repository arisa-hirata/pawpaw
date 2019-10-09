const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://awesomestuff365.com/wp-content/uploads/2017/07/Handmade-Dog-Hats-7.jpg?x90917',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/01/11/10/18/dog-1133316_1280.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'shoes',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41c-pijK6ML._SX425_.jpg',
      id: 3,
      linkUrl: 'shop/shoes'
    },
    {
      title: 'dogs',
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/12/19/07/14/animal-3883568_1280.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/dogs'
    },
    {
      title: 'cats',
      imageUrl:
        'https://www.poponeko.jp/feature/wp-content/uploads/2019/04/1-99-1.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/cats'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
