// src/components/CustomNode.js

import React from 'react';
import { Handle } from 'reactflow';

const CustomNode = ({ data }) => {
  const nodeColor = data.isActive ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`px-4 py-2 rounded ${nodeColor} text-white`}>
      {data.label}
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default CustomNode;
