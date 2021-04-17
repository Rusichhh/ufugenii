import './App.css';
import { useState,useEffect } from 'react';

import Header from "./components/header/header";
import MainContent from "./components/content/maincontent";

function App() {
    const [ inputValue, setInputValue] = useState('');
    const [ items,setItems] = useState([]);



    const goods = [
        {
            name: "кроссовки",
            model: "адидас"
        },
        {
            name: "кроссовки 1",
            model: "адидас"
        },
        {
            name: "кроссовки 2",
            model: "адидас"
        },
        {
            name: "кроссовки",
            model: "адидас"
        },
        {
            name: "кроссовки 1",
            model: "адидас"
        },
        {
            name: "кроссовки 2",
            model: "адидас"
        }

    ];
    const [inputValueSearch, setValue]=useState('')

    const onItemsSearch=(e)=>{
        const { value } = e.target;
        setValue( value );

        const itemAfterFilter = goods.filter(({name})=>name.toLowerCase().includes(value.toLowerCase()));
        setItems(itemAfterFilter);
        console.log(itemAfterFilter);
    }


  return (

    <div className="App">
        <Header
            onChangeValueUser={onItemsSearch}
            inputValueSearch={inputValueSearch}
        />
        <MainContent arrayBlock={items}/>


    </div>
  );

}

export default App;
