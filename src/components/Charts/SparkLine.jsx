import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => (
  <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{ color: currentColor, width: 2 }}
    dataSource={data}
    xName="x"
    yName="yval"
    type={type}
    markerSettings={{ visible: ['All'], size: 2.5, fill: 'blue' }}
    tooltipSettings={{
      visible: true,
      format: "${x} : ${yval}",
      trackLineSettings: {
        visible: true,
      },
    }}
  >
    <Inject services={[SparklineTooltip]} />
  </SparklineComponent>
);

export default SparkLine;
