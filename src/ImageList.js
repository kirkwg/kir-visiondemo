import React from "react";

//- Function Image - to render an image
const Image = ({ image }) => {
  console.log("Rendering image.. id=" + image.id);
  return (
    <div className="file-item">
      <img alt={`img - ${image.id}`} 
            src={image.src}
            className="file-img"/>
    </div>
  );
};   //-arrow func Image

//-ImageList Component
//-parameters passed in: image data, image id
const ImageList = ({ images }) => {
  const renderImage = (image, index) => {
    
    return (
      <Image image={image} index={index}  //-calling Image func
             key={`${image.id}-image`} />
    )
  };
  //-return the list of images
  
  return <section className="file-list">
            {images.map(renderImage)}
         </section>;
};  //-end ImageList Component

export default ImageList;
