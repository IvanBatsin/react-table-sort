import React from 'react';

interface StartPageProps {
  dataType: (type: string) => void
}

export const StartPage: React.FC<StartPageProps> = ({dataType}: StartPageProps): React.ReactElement => {
  return (
    <>
      <h2>Choose the data size</h2>
      <div className="row">
        <div className="col s6">
          <button onClick={event => dataType(event.currentTarget.dataset.type!)} data-type="small" className="waves-effect waves-light btn-large">Small</button>
        </div>
        <div className="col s6">
          <button onClick={event => dataType(event.currentTarget.dataset.type!)} data-type="large" className="waves-effect  red lighten-1 btn-large">Large</button>
        </div>
      </div>
    </>
  )
}