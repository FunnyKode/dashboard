import { GridComponent, Page, ColumnDirective, ColumnsDirective, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { Header } from '../components';
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
    <Header category="Page" title="Employees" />
    <GridComponent
      dataSource={employeesData}
      allowPaging
      toolbar={['Search']}
      width="auto"
    >
      <ColumnsDirective>
        {
          employeesGrid.map((item, index) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ColumnDirective key={index} {...item} />
          ))
        }
      </ColumnsDirective>
      <Inject services={[Page, Search, Toolbar]} />
    </GridComponent>
  </div>
);

export default Employees;
