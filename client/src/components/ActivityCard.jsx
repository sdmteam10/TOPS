import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { Card } from 'antd';

  // state = {
  //     activeDrags: 0,
  //     deltaPosition: {
  //       x: 0, y: 0
  //     },
  //     controlledPosition: {
  //       x: -400, y: 200
  //     }
  // }

  

const ActivityCard = ({loadingValue, actName, pos}) => {
const[deltaPosition, setDeltaPosition] = useState(0)
// const handleDrag = (e, ui) => {
//     const {x, y} = this.state.deltaPosition;
//     setDeltaPosition({
//       deltaPosition: {
//         x: x + ui.deltaX,
//         y: y + ui.deltaY,
//       }
//     });
//   };
// onDrag={this.handleDrag}
    return( 
      <Draggable bounds="body">
        <Card hoverable= "true" className="text-center" style={{ width: 200,  marginTop: 16 }} bodyStyle={{  backgroundColor: "#DFFFDF"}} loading={loadingValue}>
         {actName}
        </Card>
        {/* <div>x: {this.state.deltaPosition.x.toFixed(0)}, y: {this.state.deltaPosition.y.toFixed(0)}</div> */}
      </Draggable>
    ) 
}

export default ActivityCard