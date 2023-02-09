import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { useTheme } from '@material-ui/core/styles';
import '@patternfly/patternfly/patternfly-theme-dark.css';
import { TopologyWorkloadPackage } from '../Topology/TopologyWorkloadPackage';

import './TopologyComponent.css';

const THEME_DARK = 'dark';
const THEME_DARK_CLASS = 'pf-theme-dark';

export const TopologyComponent = () => {
  const htmlTagElement = document.documentElement;
  const {
    palette: { type },
  } = useTheme();
  React.useEffect(() => {
    if (type === THEME_DARK) {
      htmlTagElement.classList.add(THEME_DARK_CLASS);
    } else {
      htmlTagElement.classList.remove(THEME_DARK_CLASS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div className="pf-ri__topology">
      <TopologyWorkloadPackage />
    </div>
  );
};
