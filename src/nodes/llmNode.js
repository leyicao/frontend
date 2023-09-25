// llmNode.js

import { Handle, Position } from 'reactflow';
import { MdTransform } from 'react-icons/md';

export const LLMNode = ({ id, data }) => {

  return (
    <div className='nodeBody'>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      <div className="nodeHeader">
        <MdTransform className="nodeHeaderIcon"/>
        <div className="nodeHeaderTitle">LLM</div>
      </div>
      <div className="nodeDiv">
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
}
