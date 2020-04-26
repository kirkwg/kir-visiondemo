/* filename: Dropzone.js
*  Author:   Kirk Wong 
*/
import React from 'react';
//import "./styles.css";
//- import the useDropzone hooks
import { useDropzone} from "react-dropzone";

//- Function Dropzone as a component
const Dropzone = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept
  });

  return(
      <div {...getRootProps({
          onClick: event => console.log(event) 
      })}>
        <input  className="dropzone-input" {...getInputProps()} />
        <div>
          {isDragActive ? (
            <p className="dropzone-content">Right! Drop image here..</p>
          ) : (
            <p className="dropzone-content">
                Drag image here to upload or click to select file </p>
          )}
        </div>
      </div>
  );

};

export default Dropzone;

