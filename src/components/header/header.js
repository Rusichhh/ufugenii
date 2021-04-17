import '../../App.css';


function Header({onChangeValueUser,inputValueSearch}) {


    const changeUserValue = (e) => {
        const {value} = e.target;
        onChangeValueUser(value);
    }

    return (
        <div className="App">
            <header className="header">
                <div className="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <input type="text"
                       onChange={onChangeValueUser}
                       className="search-input"
                       value={inputValueSearch}
                />
                <div className="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        </div>
    )

};

export default Header;
