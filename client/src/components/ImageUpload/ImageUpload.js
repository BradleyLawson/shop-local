import React, { Component } from "react";
import Dropzone from 'react-dropzone'

class ImageUpload extends Component {
    constructor() {
      super()
      this.state = {
        preview: null
        // accepted: [],
        // rejected: []
      }
    }
    
    handleDrop([{ preview }]) {
        this.setState({ preview })
    }
  
    render() {
        const { preview } = this.state
      return (
        <section>
          <div className="dropzone">
            <Dropzone
              accept="image/jpeg, image/png"
              onDrop={this.handleDrop}
              multiple ={false}
            >
              <p>Drop  Your Profile Picture Here</p>
              
            </Dropzone>
            {preview &&
              <img src={ preview } alt ="img preview"/>
              }
          </div>
          {/* <aside>
            <h2>Accepted files</h2>
            <ul>
              {
                this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
            <h2>Rejected files</h2>
            <ul>
              {
                this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside> */}
        </section>
      );
    }
  }

export default ImageUpload;
  