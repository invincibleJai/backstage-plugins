import * as React from 'react';
import {
  GraphElement,
  ComponentFactory,
  withDragNode,
  withSelection,
  ModelKind,
  withPanZoom,
  GraphComponent,
  withDndDrop,
  nodeDragSourceSpec,
  graphDropTargetSpec,
  NODE_DRAG_TYPE,
} from '@patternfly/react-topology';
import GroupNode from './GroupNode';
import EdgeConnect from './EdgeConnect';
import { WorkloadNode } from './WorkloadNode';
import { TYPE_APPLICATION_GROUP, TYPE_CONNECTS_TO } from '../const';

const TopologyComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string,
): React.ComponentType<{ element: GraphElement }> | undefined => {
  if (kind === ModelKind.graph) {
    return withDndDrop(graphDropTargetSpec([NODE_DRAG_TYPE]))(
      withPanZoom()(GraphComponent),
    );
  }
  switch (type) {
    case 'workload':
      return withDragNode(nodeDragSourceSpec('workload', true, true))(
        withSelection()(WorkloadNode),
      );
    case TYPE_APPLICATION_GROUP:
      return withSelection()(GroupNode);
    case TYPE_CONNECTS_TO:
      return withSelection()(EdgeConnect);
    default:
      return undefined;
  }
};

export default TopologyComponentFactory;
