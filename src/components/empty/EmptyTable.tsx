import React from 'react';
import './emptyTable.css';

export const EmptyTablel: React.FC = (): React.ReactElement => {
  return (
    <div className="empty_table">
      <h3>Users not found</h3>
    </div>
  )
}