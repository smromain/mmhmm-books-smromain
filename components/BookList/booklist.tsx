import React, { FunctionComponent } from 'react';
import BookCard from '../BookCard/bookcard';
import styles from '../../styles/Booklist.module.css'

type BookListProps = {
    books: Array<Book>,
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BookList: FunctionComponent<BookListProps> = ({ books, setFormOpen }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Bookshelf
                </span>
                <div onClick={() => setFormOpen(true)} className={styles.addBookButton}>
                    <span>Add book</span>
                </div>
            </div>
            <div>
                { !books.length && (
                        <div className={styles.emptyShelfWarning}>
                            <span>
                                Add a book to your bookshelf by clicking the 'Add Book' button above!
                            </span>
                        </div>
                    )
                }
                { !!books.length && (
                    books.map(book => <BookCard { ...book} />)
                ) }
            </div>
        </div>
    )
}

export default BookList