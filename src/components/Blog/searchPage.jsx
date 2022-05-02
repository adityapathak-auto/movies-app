import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Search = ()=>{
    const {title} = useParams();
    const [data,setData] = useState([]);
    const Navigate = useNavigate();
    const [input,setInput] = useState("")
    useEffect(()=>{
       getData();
    },[title])
    console.log(title);

    const getData = ()=>{
        axios.get(`http://www.omdbapi.com/?apikey=87d26bc9&s=${title}`).then((res)=>{
            console.log(res.data.Search);
            setData(res.data.Search);
          });

    }

    return(<div class="bg-dark">

       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Mkv Cinemas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">Contact</a>
        </li>
       
        {/* <li class="nav-item">
          <a class="nav-link">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" onSubmit={(e)=>{
         e.preventDefault();
         Navigate(`/search/${input}`);
        
      }}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
            setInput(e.target.value);
        }}/>
        
        
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
    
  </div>
  
</nav>


<div class="container" style={{"width":"90%","margin":"50px auto"}}>
  <div class="row row-cols-auto">
    {data.map((e)=>{
      return(<div class="col" style={{"margin":"5px"}}>
        <div class="card" style={{"width": "18rem"}}>
  <img src={e.Poster} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{e.Title}</h5>
    <p class="card-text">Year : {e.Year}</p>
   
  </div>
</div>
      </div>)
    })}
  </div>
</div>




    </div>)
}