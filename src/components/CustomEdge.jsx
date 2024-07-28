// src/components/CustomEdge.js

import React from 'react';
import { getSmoothStepPath } from 'reactflow';

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  let edgeColor;
  if (data.target === '16' && !data.isActive) {
    edgeColor = 'transparent'; // No color if target is 16 and source is not active
  } else {
    edgeColor = data.isActive ? 'green' : 'red';
  }
  return (
    <g>
      <path
        id={id}
        style={{ ...style, stroke: edgeColor, strokeWidth: 5 }} // set strokeWidth to make edges thicker
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </g>
  );
};

export default CustomEdge;
