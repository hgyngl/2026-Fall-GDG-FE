import WordCard from './WordCard'
import { WORDS } from '../data/words'
import { useState } from 'react'


export default function WordList(){
    const [words, setWords] = useState(WORDS)

    function handleDelete(id) {
        setWords(words.filter((w) => w.id !== id))

    }

    return (
        <div className="card-list">
            {words.map((item) => (
                <WordCard 
                key={item.id} 
                word={item.word} 
                meaning={item.meaning}
                onDelete={() => handleDelete(item.id)} />
        ))}
        </div>
    )

}