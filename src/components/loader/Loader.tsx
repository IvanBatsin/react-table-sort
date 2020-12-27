import React from 'react';

export const Loader: React.FC = (): React.ReactElement => {
  return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  )
}