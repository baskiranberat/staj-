// eslint-disable-next-line
import { useEffect, useState } from 'react';
// eslint-disable-next-line
import data from './data.json';
import Header from './components/header';
// eslint-disable-next-line
import QuestionCard from './components/question-card';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionPage from './components/question-page';

const App = () => {
    const [columns, setColumns] = useState([]);
    // eslint-disable-next-line
    const [selectedQuestionPage, setSelectedQuestionPage] = useState(-1);

    let sutun1Toplam = 0;
    let sutun2Toplam = 0;
    let sutun3Toplam = 0;
    let sutun4Toplam = 0;

    for (let i = 0; i < columns.length; i++) {
        sutun1Toplam = sutun1Toplam + columns[i][1];
        sutun2Toplam = sutun2Toplam + columns[i][2];
        sutun3Toplam = sutun3Toplam + columns[i][3];
        sutun4Toplam = sutun4Toplam + columns[i][4];
    }

    const setSelectedPage = i => {
        setSelectedQuestionPage(i);
    }
    // eslint-disable-next-line
    const pushToColumns = answer => {
        setColumns([...columns, answer]);
    }
    console.log(sutun4Toplam);
    return (
        <BrowserRouter>
            <Header setSelectedPage={setSelectedPage} />
            <Switch>
                <Route component={QuestionPage} path="/question/:number" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;