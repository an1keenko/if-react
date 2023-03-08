import React from 'react';
import './Items.css';

export const Items = ({data}) => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className='items'>
        <button className={`button button-back ${value === 0 ? "hidden" : ""}`} disabled={value === 0} onClick={() => setValue(value - 1)}/>
        {data.slice(value, value + 4).map((obj)=>(
          <div>
            <img className='img' src={obj.imageUrl} alt="hotel-image"/>
            <h3 className='title'>{obj.name}</h3>
            <h4 className='subtitle'> {obj.city}, <br /> {obj.country}</h4>
          </div>
        ))}
      <button className={`button button-forward ${value === 4 ? "hidden" : ""}`} disabled={value === 4} onClick={() => setValue(value + 1)}/>
      </div>
    </>);
};
