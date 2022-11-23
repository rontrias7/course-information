

const Course = ({courses}) => {

  return (

   <ul>

    {courses.map( (course) => (

      <li className='course-card' key={course.id}>
        <h4 ><span>{course.id} </span>{course.name}</h4>
        <ul>
          {course.parts.map( part =>(

              <li key={part.id}>
                <p>{part.name}</p>
                <p className='exercises'>Exercises: {part.exercises}</p>


              </li>


          ) )}
          <ShowTheTotal quantity={course} />
        </ul>
      </li>


    )


    )}
   </ul>
);

}


const ShowTheTotal = ({quantity}) =>  {

  let count = 0
  quantity.parts.map( part => count += part.exercises);


  return (

    <p className="course-card total">There are <span className="remarkable">{count}</span> exercises in total.</p>

  );
}


export default Course;