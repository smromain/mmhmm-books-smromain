import type { NextApiRequest, NextApiResponse } from 'next'
import { BASE_URL } from '../../constants/constants'

type Data = {
  books: Array<Book>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { id } = req.body

  const updatedBooks = await fetch(
    `${BASE_URL}/books/${id}`,
    {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': 'steveromain'
      })
    }
  )

  const updatedJSON = await updatedBooks.json()

  res.status(200).json({ books: updatedJSON })
  
}