import React, { FunctionComponent } from 'react';
import Image from 'next/image'
import styles from '../../styles/BookCard.module.css'
import { FALLBACK_IMAGE } from '../../constants/constants';

type BookCardProps = {
    imageUrl: String,
    title: String,
    description: String,
    author: String,
    id: String,
    deleteBook: (id: String) => void 
}


const BookCard: FunctionComponent<BookCardProps> = ({ id, imageUrl, title, author, description, deleteBook }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImage} style={{ backgroundImage: `url(${imageUrl}), url(${FALLBACK_IMAGE})` }}/>
            <div className={styles.bookContent}>
                <span className={styles.bookTitle}>{title}</span>
                <span className={styles.bookAuthor}>{author}</span>
                <span className={styles.bookDescription}>{description}</span>               
            </div>
            <div>
                <Image
                    width={28} 
                    height={28}
                    alt="Delete Book"
                    src='/trash.svg'
                    className={styles.trashButton}
                    onClick={() => deleteBook(id)} 
                />
            </div>
        </div>
    )
}

export default BookCard