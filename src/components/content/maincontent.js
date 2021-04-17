import '../../App.css'

function MainContent({ arrayBlock }) {
    return (
        <>
            <div className="main">


                 {
                    arrayBlock.map((item) => (
                        <div className="shop-items">
                             <p className="shop-l">{item.name}</p>
                             <p className="shop-o"> {item.model}</p>

                        </div>
                    ))
                 }
            </div>
        </>
    );
}

export default MainContent;
