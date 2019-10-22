import React from 'react';
import { Row, Col, Form } from 'antd';
import 'antd/dist/antd.css';

// import isEqual from 'lodash/isEqual';
import InputNumAddon from '../../component/InputNumAddon';

const colSpan = 6;
const style = { textAlign: 'center', lineHeight: '32px' };
// TODO 待优化
export default class FiveClassify extends React.Component {

  handleChange = (value, type) => {
    const getValue = value !== '' ? value + 1 : '';
    this.props.form.setFields({
      [type]: {
        value: getValue,
      },
    });

  }
  render() {
    const { getFieldDecorator, getFieldValue, setFields } = this.props.form;
    // 与较大值比较
    const compareUpperLimit = (rule, value, callback, fieldName) => {
      const upperLimit = getFieldValue(fieldName);
      if (value !== '' && upperLimit && Number(value) > Number(upperLimit)) {
        callback('起始值不能大于结束值');
      } else {
        setFields({
          [fieldName]: {
            value: upperLimit,
            // errors: [],
          },
        });
        callback();
      }
    };
    // 与较小值比较
    const compareFloorLimit = (rule, value, callback, fieldName) => {
      const floorLimit = getFieldValue(fieldName);
      if (value !== '' && floorLimit && Number(value) < Number(floorLimit)) {
        callback('起始值不能大于结束值');
      } else {
        setFields({
          [fieldName]: {
            value: floorLimit,
            // errors: [],
          },
        });
        callback();
      }
    };
    const { initialData = [] } = this.props;

    return (
      <>
        <Row>
          <Col span={colSpan}>
            <Form.Item
              label="正常"
            >
              {getFieldDecorator('minNormal', {
                initialValue: 0,
                rules: [
                  { required: true, message: '请填写正常逾期天数最小值' },
                  { validator: (rule, value, callback) => compareUpperLimit(rule, value, callback, 'maxFollow') },
                ],
              })(
                <InputNumAddon
                  addonAfter="天"
                  disabled
                />
              )}
            </Form.Item>
          </Col>
          <Col span={1} style={style}> ~ </Col>
          <Col span={colSpan}>
            <Form.Item>
              {getFieldDecorator('maxNormal', {
                initialValue: initialData[0] && initialData[0].ovdDays,
                rules: [
                  { required: true, message: '请填写正常逾期天数最大值' },
                  { validator: (rule, value, callback) => compareFloorLimit(rule, value, callback, 'minNormal') },
                ],
              })(
                <InputNumAddon
                  min={0}
                  addonAfter="天"
                  precision={0}
                  onChange={(value) => this.handleChange(value, 'minFollow')}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={colSpan}>
            <Form.Item
              label="关注"
            >
              {getFieldDecorator('minFollow', {
                initialValue: initialData[1] && initialData[1].minDays,
                rules: [
                  { required: true, message: '请填写关注逾期天数最小值' },
                  { validator: (rule, value, callback) => compareUpperLimit(rule, value, callback, 'maxFollow') },
                ],
              })(
                <InputNumAddon
                  disabled
                  addonAfter="天"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={1} style={style}> ~ </Col>
          <Col span={colSpan}>
            <Form.Item>
              {getFieldDecorator('maxFollow', {
                initialValue: initialData[1] && initialData[1].ovdDays,
                rules: [
                  { required: true, message: '请填写关注逾期天数最大值' },
                  { validator: (rule, value, callback) => compareFloorLimit(rule, value, callback, 'minFollow') },
                ],
              })(
                <InputNumAddon
                  min={0}
                  addonAfter="天"
                  precision={0}
                  onChange={(value) => this.handleChange(value, 'minSecondary')}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={colSpan}>
            <Form.Item
              label="次级"
            >
              {getFieldDecorator('minSecondary', {
                initialValue: initialData[2] && initialData[2].minDays,
                rules: [
                  { required: true, message: '请填写次级逾期天数最小值' },
                  { validator: (rule, value, callback) => compareUpperLimit(rule, value, callback, 'maxSecondary') },
                ],
              })(
                <InputNumAddon
                  disabled
                  addonAfter="天"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={1} style={style}> ~ </Col>
          <Col span={colSpan}>
            <Form.Item>
              {getFieldDecorator('maxSecondary', {
                initialValue: initialData[2] && initialData[2].ovdDays,
                rules: [
                  { required: true, message: '请填写次级逾期天数最大值' },
                  { validator: (rule, value, callback) => compareFloorLimit(rule, value, callback, 'minSecondary') },
                ],
              })(
                <InputNumAddon
                  min={0}
                  addonAfter="天"
                  precision={0}
                  onChange={(value) => this.handleChange(value, 'minSuspicious')}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={colSpan}>
            <Form.Item
              label="可疑"
            >
              {getFieldDecorator('minSuspicious', {
                initialValue: initialData[3] && initialData[3].minDays,
                rules: [
                  { required: true, message: '请填写次级逾期天数最小值' },
                  { validator: (rule, value, callback) => compareUpperLimit(rule, value, callback, 'maxSuspicious') },
                ],
              })(
                <InputNumAddon
                  disabled
                  addonAfter="天"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={1} style={style}> ~ </Col>
          <Col span={colSpan}>
            <Form.Item>
              {getFieldDecorator('maxSuspicious', {
                initialValue: initialData[3] && initialData[3].ovdDays,
                rules: [
                  { required: true, message: '请填写次级逾期天数最大值' },
                  { validator: (rule, value, callback) => compareFloorLimit(rule, value, callback, 'minSuspicious') },
                ],
              })(
                <InputNumAddon
                  min={0}
                  addonAfter="天"
                  precision={0}
                  onChange={(value) => this.handleChange(value, 'loss')}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={colSpan}>
            <Form.Item label="损失">
              {getFieldDecorator('loss', {
                initialValue: initialData[4] && initialData[4].minDays,
                rules: [
                  { required: true, message: '请填损失逾期天数' },
                ],
              })(
                <InputNumAddon
                  disabled
                  addonAfter="天以上"
                  style={{ width: 'calc(100% - 66px)' }}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
      </>
    );
  }
}
