function CountClickChild(props) {
    const style = { 'background-color': 'blue', color: 'white', 'font-weight': 'bold', padding: '8px', border: '2px solid black', borderRadius: '5px' };
    return <button style={style} onClick={props.clickHandler}>Click Me</button>