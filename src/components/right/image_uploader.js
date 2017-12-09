import React, { Component } from 'react';

//making things easier by doing this outside the react component
const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     //FileReader.onerror is not needed in this case, since localstorage quota is
     //already shown on screen in case of large image
     reader.readAsDataURL(file);
  });
}

export default class ImageUploader extends Component {
  state = {
    image: ''
  }

  imageUpload = (event) => {
      var newArray = this.props.questionsArray.slice(0);
      const file = event.target.files[0];

      //get base64 image and then store it in localStorage
      getBase64(file).then(image => {
        JSON.parse(localStorage.getItem('questionsArray'))[this.props.index].image = image;
        //storing it in state ensures that the image is rendered instantly
        newArray[this.props.index].image = image;
        this.setState({ image });
        this.props.sendBackArray(newArray);
      });
  };

  render() {
    return (
      <div className="image-uploader">
        <img
          //if image from parent is not passed on yet, show the current state image
          src={ (this.props.questionsArray[this.props.index].image) ?
                  this.props.questionsArray[this.props.index].image
                    :
                  this.state.image
              }
          alt="Question Image"
        />
        <p>
          <label className="uploader-label">
            <span>
              ADD IMAGE
            </span>
          <input
             type="file"
             className="input-image"
             onChange={ this.imageUpload }
             size="200"
           />
         </label>
        </p>
      </div>
    );
  }
}
