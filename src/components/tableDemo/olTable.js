//olTable.js
import React from "react";
import {Table, Divider} from 'antd';
import MapDemo from './olMap';
import styles from './style.less';

export default class extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                },
            ],
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                },
                {
                    key: '4',
                    name: 'Disabled User',
                    age: 99,
                    address: 'Sidney No. 1 Lake Park',
                },
            ],
            title: <h2>地图表格测试</h2>
        }
    }

    componentDidMount() {
        console.log('OlTableDemo\' props', this.props);
    }

    render() {
        const {title, columns, data} = this.state;
        return <div className={styles.mainWrapper}>
            {title}
            <MapDemo/>
            <Divider/>
            <Table columns={columns} dataSource={data} pagination={false} bordered/>
        </div>
    }
}
