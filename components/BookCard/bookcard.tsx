import React, { FunctionComponent } from 'react';
import Image from 'next/image'

const BookCard: FunctionComponent<Book> = ( book ) => {
    return (
        <>
            { JSON.stringify(book)}
        </>
    )
}

export default BookCard