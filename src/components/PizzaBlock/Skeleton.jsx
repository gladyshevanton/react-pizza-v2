import React from 'react';
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="124" r="125" /> 
    <rect x="0" y="268" rx="10" ry="10" width="280" height="22" /> 
    <rect x="1" y="316" rx="10" ry="10" width="280" height="88" /> 
    <rect x="3" y="429" rx="10" ry="10" width="95" height="30" /> 
    <rect x="124" y="422" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;