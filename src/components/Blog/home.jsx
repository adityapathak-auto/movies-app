// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Home = ()=>{

  const [data,setData] = useState([]);
  const [input,setInput] = useState("");

  useEffect(()=>{
    axios.get("http://www.omdbapi.com/?apikey=87d26bc9&s=avengers").then((res)=>{
      console.log(res.data.Search);
      setData(res.data.Search);
    });

  },[]);

  const Navigate = useNavigate();

 
    return (<div className="bg-dark">
       

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
        Navigate(`search/${input}`);
        
      }}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
          setInput(e.target.value);
        }}/>
        
        
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
    
  </div>
  
</nav>

<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel" interval={100}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active" style={{"height":"500px"}}>
      <img src="https://www.koimoi.com/wp-content/new-galleries/2022/03/the-battleground-looks-set-its-going-to-be-intense-trailer-of-kgf-chapter-2-to-be-launched-on-27th-march-at-6-40-pm-001.jpg"  alt="..." class="d-block w-100" style={{"height":"100%"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" style={{"height":"500px"}}>
      <img src="https://m.economictimes.com/thumb/msid-88317664,width-1200,height-900,resizemode-4,imgsize-80252/spider-man-no-way-home-is-also-driving-more-mentions-and-conversations-on-social-media-than-any-other-pandemic-era-release-.jpg" class="d-block w-100" alt="..." style={{"width":"100vw","height":"100%"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" style={{"height":"500px"}}>
      <img src="https://images.thedirect.com/media/article_full/C95EBA33-400E-4B94-A1CA-4D2AB89D0817.jpg" class="d-block w-100" alt="..." style={{"height":"100%"}} />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div class="carousel-item" style={{"height":"500px"}}>
      <img src="https://static.toiimg.com/photo/msid-90532907/90532907.jpg" class="d-block w-100" alt="..." style={{"height":"100%"}} />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* <div class="container-md">100% wide until medium breakpoint

</div> */}

<div class="container bg-dark" style={{"width":"90%","margin":"50px auto"}}>
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