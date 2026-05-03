import { useState } from 'react';
import { useEffect} from 'react';
import './App.css';

function App() {
  let [userTask, setUserTask] = useState([]);
  let [task, setTask] = useState({
    name: "",
    tag: "",
    done: false
  });
  let [search, setSearch] = useState();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setUserTask(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(userTask));
  }, [userTask]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setTask(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    if (!task.name || !task.tag) return;

    if (task.id) {
      setUserTask(prev =>
        prev.map(item =>
          item.id === task.id ? task : item
        )
      );
    } else {
      const newTask = { ...task, id: Date.now() };
      setUserTask(prev => [...prev, newTask]);
    }
    setTask({ name: "", tag: "", done: false });
  };

  let handleEdit = (item)=>{
    setTask(item);
  }

  let handleDelete = (id)=>{
    let newList = userTask.filter(val=>{
      return val.id != id;
    })
    setUserTask(newList);
  }

  const toggleDone = (id) => {
    setUserTask(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  const handleSearch = (e) =>{
    setSearch(e.target.value);
  }

  let filterData = userTask.filter(val=>(
    val.name.toLowerCase().includes(search.toLowerCase()) ||
    val.tag.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <>
      <div className="header">
        <h1 className="header-title">to-do</h1>
      </div>
      <div className="content-body">
        <div className="left-nav">
          <input type="text" placeholder="Search" className="search" onChange={handleSearch}/>
        </div>

        <div className="right-pannel">
          <div className="add-section">
            <label htmlFor="task">
              <p>Enter your task: </p>
              <input type="text" id="task" name="name" onChange={handleChange} value={task.name || ""} />
            </label>
            <label htmlFor="task-tag">
              <p>Label the task: </p>
              <input type="text" id="task-tag" name="tag" onChange={handleChange} value={task.tag || ""} />
            </label>
            <button className="submit-btn" onClick={handleSubmit}>{task.id ? "Update" : "Submit"}</button>
          </div>
          <div className="show-userData">
            {
              filterData.map((val, id)=>{
                return (
                  <div key = {id}>
                    <h2 style={{textDecoration: val.done ? "line-through" : "none"}}>{val.name}</h2>
                    <h3>{val.tag}</h3>
                    <button onClick={() => toggleDone(val.id)}>Done</button>
                    <button onClick = {()=>{handleEdit(val)}}>Edit</button>
                    <button onClick = {()=>handleDelete(val.id)}>Delete</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
