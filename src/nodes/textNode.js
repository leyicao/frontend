// textNode.js

import { useEffect, useState } from 'react';
import { Handle, Position, useEdges } from 'reactflow';
import TextField from '@mui/material/TextField';
import { MdTextSnippet } from "react-icons/md";

const getHanlderPosition = ({handlerSize, index}) => `${index/handlerSize*100}%`

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handlers, setHandlers] = useState([]);
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    let found = [],curMatch; // an array to collect the strings that are found
    const rxp = /\{{([^}]+)\}}/g;

    while( curMatch = rxp.exec(currText) ) {
        found.push(curMatch[1]);
    }
    setHandlers(found)
  }, [currText])

  return (
    <div className='nodeBody'>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      {/* {handlers && handlers.map((handler, index) => <Handle
        type='target'
        position={Position.Left}
        id={`${id}-system`}
        style={{top: getHanlderPosition({
          handlerSize: handlers.length + 1,
          index: index+1
        })}}
      />)
      } */}
      <div className='nodeHeader'>
        <MdTextSnippet className="nodeHeaderIcon"/>
        <div className="nodeHeaderTitle">Text</div>
      </div>
      <div className='nodeDiv'>
          <TextField
          multiline
          maxRows={4}
          type="text" 
          value={currText}
          onChange={handleTextChange} 
        />
      </div>
    </div>
  );
}
