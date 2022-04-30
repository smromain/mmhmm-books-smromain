import type { NextApiRequest, NextApiResponse } from 'next'
import { BASE_URL } from '../../constants/constants'

type Data = {
  books: Array<Book>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { title = '', author = '', description = '', image = 'https://picsum.photos/125/200'} = req.body

  const updatedBooks = await fetch(
    `${BASE_URL}/books`,
    {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'steveromain',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        title,
        author,
        description,
        imageUrl: image
      })
    }
  )

  const updatedJSON = await updatedBooks.json()

  res.status(200).json({ books: updatedJSON })
  
}
