import React, { useState } from "react";


const UseState = () => {
  const [isHidden, setIsHidden] = useState(false);
  const {repos, setRepos} = useState(null);

  // const clickHandler = () => {
  //   // console.log("test")
  //   setIsHidden(true);
  // } ;

  return (
    <>
    <h2>useState()</h2>
    <br />
    {/* <button className='btn' onClick={clickHandler}> */}
    {/* <button className='btn' onClick={() => setIsHidden(true)}> */}
    <button className='btn' onClick={() => setIsHidden(!isHidden)}>
      toggle Practice hook comp
      </button>
      <br />
      {
        isHidden ? 'Im visble' : "I'm not visible"
      }
    </>
  );
};

export default UseState;