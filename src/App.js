import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})

    }

    return (<div className="App">
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1>
                {cash}
            </h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={() => addCash(Number(prompt()))} style={{padding: '10px', fontSize: '20px', background: "lightsteelblue"}}>
                Пополнить счет
            </button>
            <button onClick={() => getCash(Number(prompt()))} style={{padding: '10px', fontSize: '20px', background: "lightsteelblue"}}>
                Снять со счета
            </button>
        </div>
    </div>);
}

export default App;
