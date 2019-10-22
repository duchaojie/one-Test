import React from 'react';
import { InputNumber } from 'antd';
import styles from './index.less';
import 'antd/dist/antd.css';


// 使用 class component 是因为避免antd 获取refs 报警问题
export default class InputNumAddon extends React.Component {
  render() {
    const { addonBefore, addonAfter, style = { width: 'calc(100% - 37px)' }, baseTop, ...restPops } = this.props;
    const addonBeforeNode = addonBefore ? <span className={`${styles.inputAddon} ${styles.addonBefore}`}>{addonBefore}</span> : null;
    const topStyle = {};
    if (baseTop) {
      topStyle.verticalAlign = 'top';
    }
    const addonAfterNode = addonAfter ? <span className={`${styles.inputAddon} ${styles.addonAfter}`} style={topStyle}>{addonAfter}</span> : null;

    const styleAddon = {};
    if (addonBefore) {
      styleAddon.beforeAddon = {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      };
    }
    if (addonAfter) {
      styleAddon.afterAddon = {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      };
    }
    return (
      <span className={styles.addonWrapper}>
        {addonBeforeNode}
        <InputNumber
          {...restPops}
          style={{ ...styleAddon.beforeAddon, ...styleAddon.afterAddon, ...style }}
        />
        {addonAfterNode}
      </span>
    );
  }
}
