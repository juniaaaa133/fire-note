import { useEffect, useState } from "react"
import Nav from "./components/nav/Nav"
import Form from "./components/form/Form";
import Card from './components/card/Card'
import Skeleton from "./components/skeleton/Skeleton";

function App() {

  let [newTask,setNewTask] = useState('');
  let [tasks,setTasks] = useState([]);
  let [isLoading,setIsLoading] = useState(true);
  let [hasError,setHasError] = useState(null)

  //fetch data
  let fetchData = async () => {
    try {
      let taskArrayData = [];
    let res = await fetch('https://firenote-8d5b1-default-rtdb.firebaseio.com/notes.json')
    let data = await res.json();
    for (const key in data) {
      let modifiedObj = {
        id : key,
        ...data[key]
      }
      taskArrayData.push(modifiedObj)
    }
    setTasks(taskArrayData)
    setIsLoading(false);
    }catch(err) {
      setHasError("Oops! You're offline!")
    }
  }

  //post data
  let postData = async (e) => {
    e.preventDefault();
   try {
    if(newTask.length == 0){
      alert('Your input must not be empty')
    }
   await fetch(
    'https://firenote-8d5b1-default-rtdb.firebaseio.com/notes.json',
  {
    method  : "POST",
    body : JSON.stringify({
      task : newTask,
      isCompleted : false
    }),
    headers : {
      "Content-Type" : "application/json"
    }
  })
  setNewTask('')
  fetchData();
   } catch (error) {
    setHasError('Something is wrong.Please check your network.')
   }
  }

  //update data
  let updateData = async (id,type) => {
    try {
    let isCompletedData = type;
    let res =  await fetch(
        `https://firenote-8d5b1-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method : "PATCH",
          headers : {
            "Content-Type" : "application/json",
          },
          body : JSON.stringify({
            isCompleted: isCompletedData
        })
        }
      )
      fetchData();
    } catch (error) {
      setHasError('Something is wrong.Please check your network.')
    }
  }

  //delete data
  let deleteData = async (id) => {
try {
  await fetch(
    `https://firenote-8d5b1-default-rtdb.firebaseio.com/notes/${id}.json`,
    {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json",
      }
    }
  )

  fetchData();
} catch (error) {
  setHasError('Something is getting wrong.Please check your network.')
}
  }

  useEffect(()=>{
    fetchData();
  },[])

return (
  <>
  <Nav />
{
  hasError ? 
<div className="px-[20px] w-[96%] md:w-[520px] h-[60vh] relative sm:w-[470px] mx-auto mt-[50px] gap-[10px]">
<h2 className="text-red-500 main-f text-[20px] absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">{hasError}</h2>
</div>
  :
  <div className=" flex flex-col px-[20px] w-[96%] md:w-[520px] sm:w-[470px] mx-auto mt-[50px] gap-[10px]">
<Form postData={postData} newTask={newTask} setNewTask={setNewTask}/>
{
  tasks.length > 0 && 
  <div className="w-[180px] px-[5px] py-[9px] main-f text-[12px] text-slate-500">Total Notes {tasks.length}</div>
}
{
  isLoading ? 
<>
<Skeleton />
<Skeleton />
<Skeleton />
<Skeleton />
</>

  : tasks.length == 0? 
  <div className="w-full h-fit rounded-[5px] py-[50px] bg-main main-f text-[15px] text-center text-white">Get started by creating some notes & tasks.</div>
  :
  tasks.map((data,index) => (
    <Card data={data} key={index} methods={{updateData,deleteData}}/>
  ))
}
</div>
}
  </>
)

}

export default App
