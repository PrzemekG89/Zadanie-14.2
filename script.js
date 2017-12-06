var movies = [{
        id: 1,
        title: 'Harry Potter',
        img: 'images/Harry.jpg',
        desc: 'film o czarodzieju'
    },
    {
        id: 2,
        title: 'Hulk',
        img: 'images/Hulk.jpg',
        desc: 'film o zielonym stworze'
    },
    {
        id: 3,
        title: 'SpiderMan',
        img: 'images/Spiderman.jpg',
        desc: 'film o człowieku pająku'
    },
    {
        id: 4,
        title: 'Shrek',
        img: 'images/Shrek.jpg',
        desc: 'animowany film o ogrze mieszkającym na bagnach'
    },
    {
        id: 5,
        title: 'Rocky Balboa',
        img: 'images/Rocky.jpg',
        desc: 'film o bokserze'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('img', { src: movie.img }),
        React.createElement('p', {}, movie.desc)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));