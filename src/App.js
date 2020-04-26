import  React, { useState, useCallback } from "react";
import Dropzone from "./Dropzone.js";
import ImageList from "./ImageList.js";
import cuid from "cuid";
import logo from './logo.svg';
import "./App.css";

export default function App() {
  //- set up a state for images, initialized empty array
  const [images, setImages] = useState([]);

  //- onDrop function setup
  const onDrop = useCallback(selectedFiles => {
      console.log(selectedFiles);

      selectedFiles.map(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
           //-add the loaded image into the state
            setImages(prevState => [
                ...prevState, {id: cuid(), src: e.target.result }
            ]);
          };
        //console.log("image onload: id=" + images[0].id);
        console.log("image filename: " + file.path);

        reader.readAsDataURL(file);
        return file;
      });   //- end map  
  }, []);

  //- passing onDrop function/component for useDropzone hook

  return (
    <div className="App">
	<header className="App-header">
	  <img src={logo} className="App-logo" alt="logo"/> 
		Demonstrator: Kirk H. WONG - 2020 April, HKG			
	</header>
      <h1>Vision Demo</h1>
      <h2>Upload:</h2>
      <section className="dropzone">
        <Dropzone onDrop={onDrop} accept={"image/*"} />
      </section>
      <h2>URL: <input type="text" size="30" 
                  className="textField"
                  defaultValue="http://"/>
                  <button className="roundBtn">Run</button>
      </h2>
      <h2>Click One:</h2>
      <ImageList images={images} />
      <h2>Left: Original image ---------->> 
            Right: Processed image</h2>
    </div>
  );
}
