import React, { ReactElement } from 'react';

const AppIcon: React.FC<{Icon: ReactElement<any,any>, onClick?: () => void}> = ({Icon, onClick = () => {}}) => {
  return (
    <div className="appIcon" onClick={onClick.bind(null)}>
      {Icon}
    </div>
  )
};

export default AppIcon;
