export default function StudentList(props) {
    const students = props.students;

    // debugging
    // console.log(students);

    return (
        <ul>
            {students.map(student => (
                <li key={student.id}>
                    {student.name} has a grade of {student.grade}. Their ID number is {student.id}.
                </li>
            ))}
        </ul>
    );
}
