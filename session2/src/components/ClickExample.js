export default function ClickExample() {

    function handleClick() {
        alert("Button clicked!");
    }

    return <button onClick={handleClick}>Click here</button>
}

export function ImportExample() {

    function handleChange(e) {
        console.log(e);
        e.target.value
    }

    return <>
        <input type="text" onChange={handleChange}></input>
        <p>You typed: </p>
    </>
}