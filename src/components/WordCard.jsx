import {useState} from 'react'

export default function WordCard({word, meaning, onDelete}) {      //c언어 int num;같은 변수 선언 느낌쓰
    const [revealed, setRevealed] = useState(false)      //하지만 바로 변수 대입은 의미 없음. setRevealed라는 함수를 통해서 대입해야함

    return (
        <article className="card" onClick={() => setRevealed(!revealed)}>
            <h2> {word}</h2>
            {revealed ? <p> {meaning}</p> : <p>클릭해서 뜻 보기</p>}   
            <button 
            onClick={(e) => {
                e.stopPropagation()
                onDelete()
            }}>
            삭제
            </button>
        </article>
    )
}
