import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactFlow, { Controls } from 'react-flow-renderer';
import { Link, withRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import AppsContext from '../../contexts/AppsContext';
import AppKey from './AppKey';


const nodeTypes = {
  AppContainer,
  AppKey,
};

const appKeyEl = {
  id: 'key',
  position: { x: 0, y: 0 },
  type: 'AppKey',
};

const FlowContainer = () => {
<<<<<<< HEAD
  const { apps, setApps } = useContext(AppsContext);
=======
  const { apps } = useContext(AppsContext);
>>>>>>> main

  const onLoad = useCallback((instance) => {
    instance.fitView({ padding: 0.05 });
  }, []);

  if (apps.length)
    return (
      <div className="FlowContainer">  
        <ReactFlow
          elements={[...apps, appKeyEl]}
          nodeTypes={nodeTypes}
          onLoad={onLoad}
        >
          <Controls />
        </ReactFlow>
      </div>
    );
  return null;
};

export default FlowContainer;
