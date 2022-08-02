import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // 1. Create any state needed 
  // 2. Fetch data from server 
  // 3. Use the data to make the render dythenanmic

  const [data, setData] = useState([])


  function getDataFromServer(){
    fetch(`http://localhost:3005/images`)
    .then(resp => resp.json())
    .then(data => setData(data))
  }
  useEffect(getDataFromServer, [])

  function updateImage(image){
    return  fetch(`http://localhost:3005/images/${image.id}`,
    {
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(image)
    }).then(resp => resp.json())
  }

  return (
    <div className="App">
    <img className ="logo" src="../public/assets/hoxtagram-logo.png" />

    <section className ="image-container">

      <article className ="image-card">
        <h2 className ="title">{image.title}</h2>
        <img src= {image.image} className ="image" />
        
        <div className ="likes-section">
          <span className ="likes">{image.likes}</span>
          <button className ="like-button"
           onClick={() => {image.likes++}}
           >
            ♥
            </button>
        </div>

        <ul className ="comments">
          {comments.map((comment) => {
            image.id === comment.imageId

          })}

        </ul>
      </article>
    </section>
    </div>
  )
}

export default App
