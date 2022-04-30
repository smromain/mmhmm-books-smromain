import React, { FunctionComponent } from 'react';
import Image from 'next/image'
import BookCard from '../BookCard/bookcard';
import styles from '../../styles/Booklist.module.css'

type BookListProps = {
    books: Array<Book>,
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BookList: FunctionComponent<BookListProps> = (books, setFormOpen) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Bookshelf
                </span>
                <div className={styles.addBookButton}>
                    <span>Add book</span>
                </div>
            </div>
        </div>
    )
}

export default BookList