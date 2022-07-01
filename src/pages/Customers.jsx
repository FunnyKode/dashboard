import { GridComponent, ColumnDirective, ColumnsDirective, Inject, Page, Toolbar, Edit, Sort, Filter, Selection } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { Header } from '../components';
import { customersData, customersGrid } from '../data/dummy';

const Customers = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    <GridComponent
      dataSource={customersData}
      allowPaging
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true }}
      width="auto"
    >
      <ColumnsDirective>
        {
          customersGrid.map((item, index) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ColumnDirective key={index} {...item} />
          ))
        }
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
    </GridComponent>
  </div>
);

export default Customers;
