import React, { memo, useEffect } from "react";

const MemoChild = (props) => {
  console.log("Rendered Child")

  useEffect(() => {
    props.fetchData("denilo");
  }, [])

  return (
  <>
    <h1>Child</h1>
  </>
  );
}

// export default MemoChild;
export default memo(MemoChild);