/* eslint-disable eqeqeq */
import React, { useEffect, useRef, useState } from "react";
import style from './index.less';
import { Tabs, Form, Input, Button, NumberKeyboard, VirtualInput, Checkbox, Space, Mask, Toast, Modal } from 'antd-mobile'
import { SmileFilled, SmileOutlined, CheckCircleFilled } from "@ant-design/icons";
import { history } from "@umijs/max";

export default function Page() {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [yzm, setYzm] = useState(0)
  const [tel, setTel] = useState("")
  const [newYzm, setNewYzm] = useState("")
  const [box, setBox] = useState(false)
  let getYzm = () => {
    setYzm(Math.floor(Math.random() * 8999 + 1000))
  }
  console.log(box)
  useEffect(() => {
    if (yzm != 0) {
      Toast.show({
        content: "验证码：" + yzm.toString(),
      })
    }
  }, [yzm])

  // console.log(yzm, newYzm)
  let Login = () => {
    if (newYzm == "" || tel.length == 0) {
      Toast.show({
        content: '手机号或验证码为空！',
      })
      // console.log("验证码不能为空！")
    } else if (newYzm == yzm.toString() && tel.length == 11) {
      if (box) {
        Toast.show({
          content: '登录成功',
        })
        history.push("/")
      } else {
        Toast.show({
          content: '请勾选用户协议',
        })
      }
      // console.log("登录成功")
    } else {
      Toast.show({
        content: '手机号或验证码错误！',
      })
      // console.log("手机号或验证码错误！")
    }
  }

  return <div>
    <div className={style.topBox}></div>
    <div>
      <Tabs>
        <Tabs.Tab title='快速注册-登录' key='fruits'>

          {/* 输入手机号 */}
          <Form>
            <Form.Item
              rules={[{ message: '手机号不能为空' }]}
            >
              <VirtualInput placeholder='输入手机号/邮箱' keyboard={<NumberKeyboard />} onChange={(value) => { setTel(value) }} />
            </Form.Item>
          </Form>
          {/* 输入验证码 */}
          <Form>
            <Form.Item label='' extra={<a onClick={() => { getYzm() }}>获取验证码</a>}>
              <VirtualInput placeholder='输入验证码' keyboard={<NumberKeyboard />} onChange={(value) => { setNewYzm(value) }} />
            </Form.Item>
          </Form>
          {/* 勾选 */}
          <div style={{ padding: ' 15px 0 15px 10px' }}>
            <Checkbox
              style={{
                '--icon-size': '18px',
                '--font-size': '14px',
                '--gap': '6px',
              }}
              onChange={(value) => { setBox(value) }}>
            </Checkbox>    同意壹心理《用户协议》与《隐私政策》
          </div>


          <Button block color='warning' size='large' onClick={() => { Login() }}>登录</Button>
          {/* 遮罩层 */}
          <Mask visible={visible} onMaskClick={() => setVisible(false)}>
            <div className={style.overlayContent}>
              <h3 style={{ margin: '0 30px' }}>   收不到验证码，下面哪个符合你的情况呢:</h3>
              <div style={{ padding: ' 15px 0 15px 30px' }}>
                <Checkbox
                  style={{
                    '--icon-size': '18px',
                    '--font-size': '14px',
                    '--gap': '6px',
                  }}
                >
                </Checkbox>   点击了很多次，前面有收到，后面收不到了
              </div>

              <div style={{ padding: ' 15px 0 15px 30px' }}>
                <Checkbox
                  style={{
                    '--icon-size': '18px',
                    '--font-size': '14px',
                    '--gap': '6px',
                  }}
                >
                </Checkbox>
                点击获取后，一条都收不到了
              </div>

              <div style={{ padding: ' 15px 0 15px 30px' }}>
                <Checkbox
                  style={{
                    '--icon-size': '18px',
                    '--font-size': '14px',
                    '--gap': '6px',
                  }}
                >
                </Checkbox>
                点击不了或者提示错误
              </div>
              <p></p>
              <h5 style={{ margin: ' 9px 0 16px 80px', color: 'gray' }}>感谢您的反馈，我们会尽快处理</h5>
              <p></p>
              <Space wrap align='center' style={{ margin: '0 100px' }}>
                <button onClick={() => setVisible(false)} style={{ backgroundColor: 'lightgray', color: 'white', border: '0px', width: '54px', height: '25px', borderRadius: '4px' }}>
                  取消
                </button>
                <Button size='mini' color='primary' onClick={() => {
                  setVisible(false)
                  Modal.alert({
                    content: '提交成功',
                    closeOnMaskClick: true,
                  })
                }}>
                  提交
                </Button>
              </Space>
            </div>
          </Mask>
          <a onClick={() => setVisible(true)} style={{ color: 'gray', padding: '0 0 0 270px', margin: '50px 0' }}>收不到验证码</a>
        </Tabs.Tab>





        <Tabs.Tab title='输入手机号' key='vegetables'>
          {/* 输入手机号 */}
          <Form>
            <Form.Item
              rules={[{ message: '手机号不能为空' }]}
            >
              <VirtualInput placeholder='输入手机号' keyboard={<NumberKeyboard />} />
            </Form.Item>
          </Form>
          {/* 输入验证码 */}
          <Form>
            <Form.Item label='' extra={<a>获取验证码</a>}>
              <VirtualInput placeholder='输入验证码' keyboard={<NumberKeyboard />} />
            </Form.Item>
          </Form>
          {/* 勾选 */}
          <div style={{ padding: ' 15px 0 15px 10px' }}>
            <Checkbox
              style={{
                '--icon-size': '18px',
                '--font-size': '14px',
                '--gap': '6px',
              }}
            >
            </Checkbox>    同意壹心理《用户协议》与《隐私政策》
          </div>
          <Button block color='warning' size='large'>登录</Button>
          <div className="wangjimima"><a href="./wangjimima" style={{ color: 'gray', padding: '0 0 0 270px', margin: '50px 0' }}>忘记密码？</a></div>
        </Tabs.Tab>
      </Tabs>
    </div>

  </div>
}