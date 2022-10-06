
async function posts(req:any,res:any){
const body = req.body
const courseData = await fetch("http://localhost:4000/api/alldata")
const data  = await courseData.json().then((result)=>{
    for (const ob of result) {
        return ob
    }
       
})


console.log(data)

// fetch("http://localhost:4000/api/alldata")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
 console.log("body: ", body)
 if(!body.name || !body.course){
    return res.status(400).json({
        data: "Name and Course not found"
    })
 }
// if (body.name !== data.name && body.course !== data.course){
//     return res.status(400).json({
//         data: "Name and Course not found"
//     })
// }
 res.status(200).json({
    data : `${body.name}
            ${body.course}
            ${data}`
 })
}

export default posts



// //manage the state
// let [fullName, setName] = useState('')
// let [courseName, setCourseName] = useState('')


// useEffect(() => {
//     // setLoading(true)
//     fetch('/api/content')
//       .then((res) => res.json())
//       .then((data) => {
//         // setData(data)
//         // setLoading(false)
//         console.log(data);
        
//       })
//   }, [])
// //handles the click event
// const handleClick = (event:any) =>{
//     setName(fullName)
//     setCourseName(courseName)
//     name=fullName
//     course=courseName
//     // console.log({message});
//     console.log(name, course);
// }
