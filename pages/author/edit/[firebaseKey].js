import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BookForm from '../../../components/forms/BookForm';
import { getSingleBook } from '../../../api/bookData';

export default function EditBook() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleBook(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<BookForm obj={editItem} />);
}
