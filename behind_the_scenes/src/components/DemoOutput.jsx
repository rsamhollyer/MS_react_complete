import React, { memo } from 'react';
import MyParagraph from './MyParagraph';

/*
 Memo method comes at a cost. React has to store previous values and compares them. Trade perforance cost of reevaluating. Lots of components and huge tree would be a good use case for memo
*/

export default memo(function DemoOutput({ show }) {
  console.log('DEMO RUNNING');
  return (
    <div>
      <MyParagraph>{show ? 'This is new' : ''}</MyParagraph>
    </div>
  );
});
