import { useState } from 'react'
import './App.css'

function App() {
  let [individualData, setIndividualData] = useState({
    username: "",
    email: "",
    gender: "",
    comment: "",
    major: ""
  })

  let handleChange = (e)=>{
    let {name, value} = e.target;
    setIndividualData({
      ...individualData,
      [name] : value
    })

    console.log(individualData)
  }

  let [formData, setFormData] = useState([])

  let handleSubmit = (e)=>{
    e.preventDefault();
    setFormData((formData)=>{return [...formData, individualData]})
    console.log("form submitted.")
    console.log(formData)
  }


  return (
    <>
      {/* this portion is for form input */}

      <form onSubmit = {handleSubmit}>
        <fieldset>
          <legend>Data input form</legend>
          <label>
            <p>Enter your name: </p>
            <input
            type = "text"
            name = "username"
            placeholder = "Enter your name" 
            onChange = {handleChange} />
          </label>

          <label>
            <p>Enter your email: </p>
            <input
            type = "email"
            name = "email"
            placeholder = "Enter your email" 
            onChange = {handleChange}/>
          </label>

          <label>
            <p>Enter your gender</p>
            <input
            type = "radio"
            name = "gender"
            value = "male" 
            onChange = {handleChange}/>
            <p>Male</p>
            <input
            type = "radio"
            name = "gender" 
            value = "female"
            onChange = {handleChange}/>
            <p>Female</p>
          </label>

          <label>
            <p>Enter your comment: </p>
            <textarea
            name = "comment"
            placeholder = "Enter your comment: "
            onChange = {handleChange}></textarea>
          </label>

          <label>
            <p>Select your Major</p>
            <select name="major"
            onChange = {handleChange}
            >
              <option value="CS">CS</option>
              <option value="ML">ML</option>
              <option value="AI">AI</option>
            </select>
          </label>

        </fieldset>
      <button type = "submit">Submit</button>
      </form>

      {formData.length > 0 && formData.map((data, index)=>{
        return (<div key = {index}>
          <h1>Name: {data.username} </h1>
          <h1>Name: {data.email} </h1>
          <h1>Name: {data.gender} </h1>
          <h1>Name: {data.comment} </h1>
          <h1>Name: {data.major} </h1>
        </div>)
      })
      }
    </>
  )
}

export default App
