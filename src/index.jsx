/* I declare that the lab work here submitted is original
except for source material explicitly acknowledged,
and that the same or closely related material has not been
previously submitted for another course.
I also acknowledge that I am aware of University policy and
regulations on honesty in academic work, and of the disciplinary
guidelines and procedures applicable to breaches of such
policy and regulations, as contained in the website.
University Guideline on Academic Honesty:
https://www.cuhk.edu.hk/policy/academichonesty/
Student Name : HO Kwong Wa
Student ID : 1155147738
Class/Section : CSC2720 T04
Date : 13/10/2023
*/
import ReactDOM from "react-dom/client";
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


const data = [
  {filename: "cuhk-2013.jpg", year:2013, remarks: "Sunset over CUHK"}, 
  {filename: "cuhk-2017.jpg", year:2017, remarks: "Bird's-eye view of CUHK"},
  {filename: "sci-2013.jpg", year:2013, remarks: "The CUHK Emblem"}, 
  {filename: "shb-2013.jpg", year:2013, remarks: "The Engineering Buildings"},
  {filename: "stream-2009.jpg", year:2009, remarks: "Nature hidden in the campus"},
  ];

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li> <Link to="/home">Home</Link> </li>
            <li> <Link to="/gallery">Gallery</Link> </li>
            <li> <Link to="/slideshow">Slideshow</Link> </li>
          </ul>
        </div>

        <hr />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/slideshow" element={<Slideshow />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return <h2>Home</h2>;
  }
}

class Gallery extends React.Component {
  render() {
    return (
        <main className="container">
            {data.map((file,index) => <FileCard i={index} key={index}/>)}
        </main>
    );
  }
}

class FileCard extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = { selected: -1 };
      }
  
  handleOnMouseEnter(index, e) {
    this.setState({ selected: index });
  }

  handleOnMouseLeave(index, e) {
    this.setState({ selected: -1 });
  }

  render() {
      let i = this.props.i;
      return (
              <div className="card d-inline-block m-2" style={{width:this.state.selected == i ? 400 : 200}} onMouseEnter={(e) => this.handleOnMouseEnter(i, e)} onMouseLeave={(e) => this.handleOnMouseLeave(i, e)}>
                  <img src={"images/"+data[i].filename} className="w-100" />
                  <div className="card-body">
                      <h6 className="card-title">{data[i].filename}</h6>
                      <p className="card-text">{data[i].year}</p>
                  </div>
              </div>
      );
  }
}

class Slideshow extends React.Component {
  
  render() {
    return (
      <div>
        <h2>Slideshow</h2>
        <button type="button" class="btn btn-primary">Test</button>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);
