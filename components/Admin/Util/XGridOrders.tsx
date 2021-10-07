import * as React from 'react';
import { XGrid } from '@material-ui/x-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { DataGrid } from '@material-ui/data-grid';

export default function XGridOrders() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100000,
        editable: true,
    });

    return (
        <div>
            {/* <XGrid
                {...data}
                loading={data.rows.length === 0}
                rowHeight={38}
                checkboxSelection
                disableSelectionOnClick
            />*/}
            <DataGrid
                style={{
                    width: "1600px",
                    height: "800px",
                    backgroundColor: "white",
                }}
                {...data}
                loading={data.rows.length === 0}
                rowHeight={38}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    );
}