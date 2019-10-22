// /**
//  * 模糊查询select组件
//  * select组件后端提供的接口是分页接口，因此封装这个模糊查询组件，默认先去请求一次，查询第一页数据。
//  */
// import React from 'react';
// import { Spin, Select } from 'antd';
// import debounce from 'lodash/debounce';
// import request from '../utils/request';


// const Option = Select.Option;

// export default class SearchSelect extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//       // value: props.initialValue,
//       fetching: false,
//     };
//     this.handleSearch = debounce(this.fetchData, 300);
//   }
//   componentDidMount() {
//     this.fetchData();
//   }
//   // componentWillReceiveProps(nextProps) {
//   //   if (this.props.initialValue && nextProps.initialValue !== this.props.initialValue) {
//   //     this.setState({
//   //       value: nextProps.initialValue,
//   //     });
//   //   }
//   // }
//   handleChange = (value) => {
//     const { onChange } = this.props;
//     // this.setState({
//     //   value,
//     // });
//     onChange(value);
//   }
//   fetchData = (value = '') => {
//     const queryUrl = this.props.queryUrl;
//     this.setState({ list: [], fetching: true });
//     request({
//       url: `${queryUrl}${value}`,
//     }).then(res => {
//       if (res && res.success) {
//         this.setState({
//           list: res.dataObject.datas || [],
//           fetching: false,
//         });
//       }
//     });
//   }
//   render() {
//     const { list, fetching } = this.state;
//     const { dataFormat, ...rest } = this.props;
//     const isAllowClear = rest.allowClear === false ? rest.allowClear : true;
//     return (
//       <Select
//         {...rest}
//         showSearch
//         filterOption={false}
//         allowClear={isAllowClear}
//         onChange={this.handleChange}
//         onSearch={this.handleSearch}
//         notFoundContent={fetching ? <Spin size="small" /> : null}
//       >
//         {
//           list.map(ele => {
//             if (dataFormat === undefined) {
//               return <Option key={ele.key} value={ele.key}>{ele.value}</Option>
//             }
//             return <Option key={ele[dataFormat.key]} value={ele[dataFormat.key]}>{ele[dataFormat.value]}</Option>
//           })
//         }
//       </Select>
//     );
//   }
// }
