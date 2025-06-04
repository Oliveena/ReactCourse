function Greeting() {
// JSX example
// use curlies to pass dynamic content
    const name = "Anastassia";
    const space = " ";
    const lastName = "Tarassova"
    const age = 29;
    // booleans are useful for conditional rendering
    const isStudent = true;
    // expressions
    const a = 3;
    const b = 5;
    let value = 1;

    // objects
    // keys and maps
    let user = {username: "Elena", city: "Montreal"};

    // Template String: backtick ``

    let config = {color: "red", border: "10px dotted green"};


    const message = 
    <div>
        <h1>Hello {name + space + lastName}</h1>
        <h2>You are {age * a - b} years old.</h2>
        <h3>Are you a student? {isStudent ? "yes" : "no"}</h3>
        <h4>{`Hello, ${name} \u00A0\u00A0\u00A0\u00A0 ${lastName} `}</h4>
        <p>{user.username} is a user. They live in {user.city}.</p>
        {JSON.stringify(user)}
        <p>{new Date().toLocaleDateString()}{" "}</p>
        <p>{value}</p>
        <input id="input1" type=""></input>

        
    </div>

    return message;
}
export default Greeting;

