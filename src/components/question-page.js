import { useState } from 'react';
import data from '../data.json';
import "../style/main.css";

const QuestionPage = ({ match }) => {

    const [a, setA] = useState([1, 2, 3, 4]);
    const [selected, setSelected] = useState(-1);

    const id = match.params.number;
    const selectedQuestions = data.pages[id - 1].questions;

    const onchangehandler = e => {
        const val = Number(e.target.value);
        setSelected(val);
        setA(a.filter(x => x !== val));
    }

    return (
        <div>
            <h1>Question {id} Page</h1>
            <div id="Questions" style={{display:"inline-flex"}} >
            {
                
                selectedQuestions && selectedQuestions.length > 0
                    ? selectedQuestions.map((item, idx) => {
                        return <div key={idx} id="Question" style={{marginRight:"15px"}} className="asdf">
                            {item.id} - {item.q}
                            <select value={selected} defaultValue={-1} onChange={onchangehandler}>
                                {selected === -1 ? <option>Puanla</option> : selected}
                                {
                                    a.map(item => {
                                        return <option key={item} value={item}>{item}</option>
                                    })
                                }
                            </select>

                        </div>
                    })
                    
                    : 'SORU YOK'
            }
            </div>
        </div>
    );
}

export default QuestionPage;