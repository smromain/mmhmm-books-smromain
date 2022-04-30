import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/Bookform.module.css'

type BookFormProps = {
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setBookData: React.Dispatch<React.SetStateAction<Array<Book>>>,
}

type UpdateResponseJSONType = {
    books: Array<Book>
}

const BookForm: FunctionComponent<BookFormProps> = ({ setFormOpen, setBookData }) => {
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ image, setImage ] = useState('')

    const updateBooks = async () => {
        const updatedBooks = await fetch('/api/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({
                title,
                author,
                description,
                image
            })
        })

        const responseJSON: UpdateResponseJSONType = await updatedBooks.json()

        if (responseJSON && responseJSON.books) {
            setBookData(responseJSON.books)
        }

        setFormOpen(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Add a new book
                </span>
                <Image
                    width={28} 
                    height={28}
                    src='/x.svg'
                    onClick={() => setFormOpen(false)} 
                    className={styles.closeButton}
                />
            </div>
            <div className={styles.form}>
                <div className={styles.formInput}>
                    <label htmlFor="Title">Title</label>
                    <input 
                        type="text" 
                        name="Title"
                        value={title}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>):void => setTitle(ev.target.value)}
                    />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="Author">Author</label>
                    <input
                        type="text"
                        name="Author"
                        value={author}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>):void => setAuthor(ev.target.value)}
                    />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="Description">Description</label>
                    <textarea
                        name="Description"
                        value={description}
                        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>):void => setDescription(ev.target.value)}
                    />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="Image">Image URL</label>
                    <input
                        type="text"
                        name="Image"
                        value={image}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>):void => setImage(ev.target.value)}
                    />
                </div>

                <div>
                    <button className={styles.submitButton} onClick={() => updateBooks()}>
                        <span>Save</span>
                    </button>  
                </div>
            </div>
        </div>
    )
}

export default BookForm