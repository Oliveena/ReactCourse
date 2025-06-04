export default function Counter() {
    // == non-functional implementation ==
    // let count = 0;
    // return (
    // <div>
    //     <p>Count: {count}</p>
    //     <button onClick={() => count +1}>Click me</button>
    // </div>
    // );

    // this above us durect injection. it's a no-no in React. we never change values directly. 

    const [count, setState]= useState(0);
    
    return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => count +1}>Click me</button>
    </div>
    );
    
}