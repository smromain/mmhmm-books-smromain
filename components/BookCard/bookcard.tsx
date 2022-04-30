import React, { FunctionComponent } from 'react';
import styles from '../../styles/Bookcard.module.css'
import { FALLBACK_IMAGE } from '../../constants/constants';



const BookCard: FunctionComponent<Book> = ({ imageUrl, title, author, description }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImage} style={{ backgroundImage: `url(${imageUrl}), url(${FALLBACK_IMAGE})` }}/>
            <div className={styles.bookContent}>
                <span>{title}</span>
                <span>{author}</span>
                <span>{description}</span>               
            </div>
        </div>
    )
}

export default BookCard