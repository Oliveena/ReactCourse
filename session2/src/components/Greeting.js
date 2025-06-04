export default function Greeting({ isAdmin }) {  // not a prop
    return (
        <div>
            {isAdmin && (
                <p style={{ color: 'red' }}>You have admin privileges</p>
            )}
        </div>
    );
}

//I would like to see if you are an admin or not
//if you are admin write a message in red color that you have
//admin priviliages