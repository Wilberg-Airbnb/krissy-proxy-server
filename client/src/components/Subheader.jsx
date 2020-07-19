import React from 'react';


const subheaderContainer = {
  color: 'rgb(113, 113, 113) !important',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'wrap'
};

const star = {
  alignItems: 'center',
  display: 'inline-flex',
  minWidth: '0px',
  marginTop: '8px'
};

const reviews = {

  fontWeight: '400 !important',
  fontSize: '14px !important',
  lineHeight: '20px !important',
  position: 'relative !important',
  textOverflow: 'ellipsis !important',
  whiteSpace: 'nowrap !important',
  overflow: 'hidden !important'
};

const space = {
  fontWeight: '400 !important',
  margin: '0px 8px !important'
};

const Subheader = (props) => {

  return(
    <div style={subheaderContainer}>
      <span>
        <div style={star}>
        <span >star</span>
        </div>
        <div style={reviews}>
        <span>4.93 (361)</span>
        </div>
      </span>
      <div style={space}>
      <span >.</span>
      </div>
      <span>
        <span>superhost icon</span>
        <span>Superhost</span>
      </span>
      <div style={space}>
      <span>.</span>
      </div>
      <span>
        <span>Los Angeles, California, United States</span>
      </span>
    </div>
  )

}

export default Subheader;