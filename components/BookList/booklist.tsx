import React, { FunctionComponent } from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.css'

type BookListProps = {
    books: Array<Book>,
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setBookData: React.Dispatch<React.SetStateAction<Array<Book>>>,
}

type UpdateResponseJSONType = {
    books: Array<Book>
}

const BookList: FunctionComponent<BookListProps> = ({ books, setFormOpen, setBookData }) => {

    const deleteBook = async (id: String) => {
        const updatedBooks = await fetch('/api/deleteBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({
                id
            })
        })

        const responseJSON: UpdateResponseJSONType = await updatedBooks.json()

        if (responseJSON && responseJSON.books) {
            setBookData(responseJSON.books)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Bookshelf
                </span>
                <button onClick={() => setFormOpen(true)} className={styles.addBookButton}>
                    <span>Add book</span>
                </button>
            </div>
            <div>
                { !!books.length ? (
                    books.map((book, i) => <BookCard { ...book} key={i} deleteBook={deleteBook} />)
                ) : (
                    <div className={styles.emptyShelfWarning}>
                        <span>
                            Add a book to your bookshelf by clicking the &apos;Add Book&apos; button above!
                        </span>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default BookList