import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: '/images/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn','Life on the Mississippi','Roughing It']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: '/images/josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: '/images/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: '/images/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Shining','IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: '/images/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield','A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: '/images/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet','Macbeth','Romeo and Juliet']
    },
];

const getTurnData = (authors) => {
    const allBooks = authors.reduce((p,c,i) => {
        return p.concat(c.books);
    }, []);
    const randomBooks = shuffle(allBooks).slice(0,5);
    const answer = sample(randomBooks);

    return {
        books: randomBooks,
        author: authors.find((author) => author.books.some((title) => title === answer))
    }
}

const resetState = () => {
    return {
        turnData: getTurnData(authors),
        highlight: 'none'
    }
}

let state = resetState();

const onAnswerSelected = (answer) => {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

const App = () => {
    return <AuthorQuiz {...state}
                onAnswerSelected={onAnswerSelected}
                onContinue={() => {
                    state = resetState();
                    render();
                }} />;
}

const AuthorWrapper = withRouter(({history}) =>
    <AddAuthorForm onAddAuthor={(author) => {
        authors.push(author);
        history.push('/');
    }} />
);

function render() {
    ReactDOM.render(<BrowserRouter>
                        <React.Fragment>
                            <Route exact path="/" component={App} />
                            <Route path="/add" component={AuthorWrapper} />
                        </React.Fragment>
                    </BrowserRouter>, document.getElementById('root'));
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
