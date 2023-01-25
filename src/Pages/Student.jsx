import Scores from "../Components/Scores";

const Student = (props) => {
  return ( 
    <div>
      <h1>Students</h1>
      {props.students.map(student =>
        <div id="students" key={student.name}>
          <h1>{student.name}</h1>
          <p><b>Bio:</b> {student.bio}</p>
          <Scores scores={student.scores}/>
        </div>
      )}
    </div>
  );
}
 
export default Student;