function Greeting() {
// JSX example
// use curlies to pass dynamic content
    const name = "Anastassia";
    const space = " ";
    const lastName = "Tarassova"
    const message = <h1>Hello {name + space + lastName}</h1>

    return <div>Hello {message}</div>
}



export default Greeting;

