import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase';

const useAllFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = firestore.collection(collection)
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection]);

  return { docs };
}

export default useAllFirestore;