'use client'

import React, { Component, useState } from 'react'
import ReactQuill from 'react-quill'

class Note extends Component {
    
    constructor(props:any) {
      super(props);
      this.state = {
        text: "",
      }
    }
  
    modules = {
      toolbar: [
   
        ['link', 'image'],
        ['clean']
      ],
    };
  
    formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];
  
    render() {
      return (
        <div className="text-editor">
          <ReactQuill className='h-full	 w-screen'
                      theme="snow"
                      modules={this.modules}
                      formats={this.formats}>
          </ReactQuill>
        </div>
      );
    }
  }
  
  export default Note;
