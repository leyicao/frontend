import React, {useState} from 'react';
import { MdDashboardCustomize } from "react-icons/md";

const options = [
  {
    value: 'text',
    label: 'Text',
  },
  {
    value: 'file',
    label: 'File',
  },
  {
    value: 'image',
    label: 'Image',
  },
];

export const BasicNode = ({ id, data }) => {
  const [basicHandleType, setBasicHandleType] = useState(data?.selects || []);

  const onChange = (index, val) => {
    const newBasicHandleType = [...basicHandleType];
    newBasicHandleType[index] = val;
    setBasicHandleType(newBasicHandleType)
  }

  return (
    <div className='nodeBody'>
      <div className="nodeHeader">
        <MdDashboardCustomize className="nodeHeaderIcon"/>
        <div className="nodeHeaderTitle">Basic</div>
      </div>
      <div>
        <button onClick={() => setBasicHandleType([...basicHandleType, 'text'])}>+</button>
      </div>
      <div className="nodeDiv">
        {basicHandleType?.map((handleType, index) => (
          <div key={`basic-${index}`}>
          <span>Type:</span>
          <select className="nodrag" onChange={(e) => onChange(index, e.target.value)} value={handleType}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </div>
        ))}
      </div>
    </div>
  );
}
