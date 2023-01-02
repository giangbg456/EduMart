import {MdOutlineArticle} from 'react-icons/md'
import {InputFormV2} from '../../component'
import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import { convertToHTML } from 'draft-convert';

function CreateBlog() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  // const [convertedContent, setConvertedContent] = useState(null);

  // useEffect(() => {
  //   let html = convertToHTML(editorState.getCurrentContent());
  //   setConvertedContent(html);
  // }, [editorState]);

  // console.log(convertedContent);
  return ( 
    <>
      <h2 className="text-2xl md:text-3xl mb-5 flex items-center gap-2"> <MdOutlineArticle className="w-8 h-8"/>Create Blog</h2>
      <div className="bg-white p-8 rounded-lg">
        <InputFormV2 label='Name Blog'/>
        <label className='pt-4'>Content</label>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </div>
      <button className='flex items-center justify-center bg-blue text-white px-2 py-5 rounded-xl overflow-hidden mt-3 w-[150px]'>Add Blog</button>
    </> 
  );
}

export default CreateBlog;