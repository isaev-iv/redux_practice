import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";


function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer));
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
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
            <button onClick={() => addCustomer(prompt())} style={{padding: '10px', fontSize: '20px', background: "lightsteelblue"}}>
                Добавить клиента
            </button>
            <button onClick={() => getCash(Number(prompt()))} style={{padding: '10px', fontSize: '20px', background: "lightsteelblue"}}>
                Удалить клиента
            </button>
        </div>
            {customers.length > 0 ?
                <div style={{position: 'absolute', width: '92vh', left: '21%', padding: '10px', fontSize: '20px', background: "lightsteelblue"}}>
                    {customers.map(customer =>
                            <div onClick={() => removeCustomer(customer)} style={{display: 'flex', justifyContent: 'center', border: '1px solid black', margin: '10px', cursor: 'pointer'}} key={customer.id}>
                                {customer.name }
                            </div>
                    )}
                </div>
                :
                <div style={{display: 'flex', justifyContent: 'center', padding: '10px', fontSize: '20px', background: "lightsteelblue"}}>
                    Список клиентов пуст!
                </div>
            }
    </div>);
}

export default App;
