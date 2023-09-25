// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { MdInput } from "react-icons/md";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className='nodeBody'>
      <div className="nodeHeader">
        <MdInput className="nodeHeaderIcon"/>
        <div className="nodeHeaderTitle">Input</div>
      </div>
      <div className="nodeDiv">
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        </div>
        <div className="nodeDiv">
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </div>
  );
}
