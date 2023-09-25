// textNode.js

import { useEffect, useState, memo } from 'react';
import { Handle, Position } from 'reactflow';
import TextField from '@mui/material/TextField';
import { MdTextSnippet } from "react-icons/md";
import { useUpdateNodeInternals } from 'reactflow';

const getHanlderPosition = ({ handlerSize, index }) => `${index / handlerSize * 100}%`

export const TextNode = ({ id, data }) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handlers, setHandlers] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    let found = [], curMatch; // an array to collect the strings that are found
    const rxp = /\{{([^}]+)\}}/g; // REGEX find value between double curly braces

    while (curMatch = rxp.exec(currText)) {
      found.push(curMatch[1]);
    }
    if (found.length !== handlers.length) {
      setHandlers(found);
      setTimeout(() => updateNodeInternals(id), 0);
    }

  }, [currText])

  return (
    <div className='nodeBody' >
      {handlers && handlers.map((_, index) => <Handle
      key={`text-${index}`}
        type='target'
        position={Position.Left}
        id={`${id}-text-${index}`}
        style={{
          top: getHanlderPosition({
            handlerSize: handlers.length + 1,
            index: index + 1
          })
        }}
      />)
      }

      <div className='nodeHeader'>
        <MdTextSnippet className="nodeHeaderIcon" />
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

export default memo(TextNode)