
import React, { useEffect, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import CustomEdge from './CustomEdge'; 
import initialNodes from '../utils/initialNodes';
import initialEdges from '../utils/initialEdges';

const nodeTypes = {
  customNode: CustomNode,
};

const edgeTypes = {
  customEdge: CustomEdge, 
};

const Workflow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [formData, setFormData] = useState({ name: 'Boni', dob: '1900-01-12', gender: 'M', pincode: '301' });
  const [activeNodes, setActiveNodes] = useState(['1', '2']); // Initialize with id 1 and id 2 always active

  useEffect(() => {
    const updatedNodes = nodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        isActive: activeNodes.includes(node.id),
      },
    }));
    setNodes(updatedNodes);
  }, [activeNodes]);

  useEffect(() => {
    const newActiveNodes = ['1', '2'];
    let completed = false;

    if (formData.dob && new Date().getFullYear() - new Date(formData.dob).getFullYear() > 30) {
      newActiveNodes.push('3', '4');
    } else if (formData.dob) {
      newActiveNodes.push('3', '5', '16');
      completed = true;
    }

    if (!completed) {
      if (formData.gender === 'F') {
        newActiveNodes.push('7', '9', '16');
        completed = true;
      } else if (formData.gender === 'M') {
        newActiveNodes.push('7', '8');
      }
    }

    if (!completed) {
      if (formData.pincode.startsWith('40')) {
        newActiveNodes.push('10', '11', '16');
        completed = true;
      } else if (formData.pincode) {
        newActiveNodes.push('10', '12', '16');
      }
    }

    // activate "Update DB status" nodes if their source node is active
    nodes.forEach(node => {
      if (node.data.label.startsWith('Update DB:')) {
        const sourceEdge = initialEdges.find(edge => edge.target === node.id);
        if (sourceEdge && newActiveNodes.includes(sourceEdge.source)) {
          newActiveNodes.push(node.id);
        }
      }
    });

    setActiveNodes(newActiveNodes);

    // Update edges based on active nodes
    const updatedEdges = initialEdges.map(edge => ({
      ...edge,
      data: {
        ...edge.data,
        isActive: newActiveNodes.includes(edge.source) && newActiveNodes.includes(edge.target),
        isSourceActive: newActiveNodes.includes(edge.source), // Check if source node is active
        target: edge.target, // Include target ID in edge data
      },
    }));
    setEdges(updatedEdges);

  }, [formData]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <div style={{ width: '2000px', height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          attributionPosition="bottom-right"
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Workflow;
