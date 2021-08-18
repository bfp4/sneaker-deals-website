import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase';

const useFirestoreSize = (collection) => {
  const [max, setMax] = useState(0)

  useEffect(() => {
    const unsub = firestore.collection(collection)
      .get()
      .then(snap => {
        setMax(snap.size)
      });

    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return max
}

export default useFirestoreSize