import React, { memo } from 'react';
import { Row, Col, Button, List } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import ReactEcharts from 'echarts-for-react';
import Card from 'components/Card';
import { TEAMS } from './consts';
import { visitData } from './chart';
import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

const User: React.FC<BrowserRouterProps> = () => (
  <div className={styles.user}>
    <Row gutter={[16, 16]}>
      <Col xs={12} lg={12} xl={9}>
        <Card className={styles.welcome}>
          <Row justify='space-between'>
            <Col className={styles.name}>
              Hi，Image <span className={styles.regular}>下午好，今天是你加入鹅厂的第 100 天～</span>
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/starter/assets-tencent-logo.png' className={styles.logo} />
            </Col>
          </Row>
        </Card>
        <Card
          className={styles.userinfo}
          title='个人信息'
          operation={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <Row gutter={[16, 16]}>
            <Col span={3}>
              <div className={styles.label}>手机</div>
              <div className={styles.value}>+86 13923734567</div>
            </Col>
            <Col span={3}>
              <div className={styles.label}>座机</div>
              <div className={styles.value}>734567</div>
            </Col>
            <Col span={3}>
              <div className={styles.label}>办公室邮箱</div>
              <div className={styles.value}>Account@qq.com</div>
            </Col>
            <Col span={3}>
              <div className={styles.label}>座位</div>
              <div className={styles.value}>T32F 012</div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={3}>
              <div className={styles.label}>管理主体</div>
              <div className={styles.value}>腾讯集团</div>
            </Col>
            <Col span={3}>
              <div className={styles.label}>直属上级</div>
              <div className={styles.value}>Account@qq.com</div>
            </Col>
            <Col span={3}>
              <div className={styles.label}>职称</div>
              <div className={styles.value}>高级 UI 设计师</div>
            </Col>
            <Col span={3}>
              <div className={styles.label}>入职时间</div>
              <div className={styles.value}>2021-07-01</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className={styles.label}>所属团队</div>
              <div className={styles.value}>腾讯/腾讯公司/某事业群/某产品部/某运营中心/商户服务组</div>
            </Col>
          </Row>
        </Card>
        <Card className={styles.statistics}>
          <div className={styles.title}>
            主页访问数据
            <span className={styles.unit}>（次）</span>
          </div>
          <ReactEcharts option={visitData} notMerge={true} lazyUpdate={true} style={{ height: 360, marginTop: 16 }} />
        </Card>
      </Col>
      <Col xs={12} lg={12} xl={3}>
        <Card className={styles.postmsg}>
          <div className={styles.avatar}>
            <span>T</span>
          </div>
          <div className={styles.name}>My Account</div>
          <div className={styles.position}>XXG 港澳业务拓展组员工 直客销售</div>
        </Card>
        <Card
          className={styles.teams}
          title='团队成员'
          operation={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <List split={false}>
            {TEAMS.map((item) => (
              <ListItem key={item.id}>
                <ListItemMeta title={item.name} description={item.position} />
              </ListItem>
            ))}
          </List>
        </Card>
        <Card
          title='服务产品'
          className={styles.product}
          operation={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <Row gutter={32}>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon1.png' className={styles.logo} />
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon2.png' className={styles.logo} />
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon3.png' className={styles.logo} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

export default memo(User);
