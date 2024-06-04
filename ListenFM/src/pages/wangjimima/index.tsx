import React, { useState } from "react";
import style from './index.less';
import { Tabs, Form, Input, Button, NumberKeyboard, VirtualInput, Checkbox, Space, Mask } from 'antd-mobile'
import { SmileFilled, SmileOutlined, CheckCircleFilled } from "@ant-design/icons";


export default function Page() {
    const forms = Form.useForm()
    console.log(forms,"xx");
    
    const [visible, setVisible] = useState(false)
    return <div>
        <div className={style.topBox}></div>
        <div>
            <Tabs>
                <Tabs.Tab title='手机账号密码' key='fruits'>

                    {/* 输入手机号 */}
                    <Form>
                        <Form.Item
                            rules={[{ message: '手机号不能为空' }]}
                        >
                            <VirtualInput placeholder='输入手机号账号' keyboard={<NumberKeyboard />} />
                        </Form.Item>
                    </Form>
                    {/* 输入验证码 */}
                    <Form>
                        <Form.Item label='' extra={<a>获取验证码</a>}>
                            <VirtualInput placeholder='输入验证码' keyboard={<NumberKeyboard />} />
                        </Form.Item>
                    </Form>
                   


                    <Button block color='warning' size='large'>下一步</Button>
                    <div className="wangjimima">
                        <a href="./jingwai" style={{ color: 'grey' }}>境外用户</a>
                        {/* 遮罩层 */}
                        <Mask visible={visible} onMaskClick={() => setVisible(false)}>
                            <div className={style.overlayContent}>
                                <h3 style={{margin:'0 30px'}}>   收不到验证码，下面哪个符合你的情况呢:</h3>
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
                                <h5 style={{ margin: ' 9px 0 16px 80px' ,color:'gray'}}>感谢您的反馈，我们会尽快处理</h5>
                                <p></p>
                                <Space wrap align='center' style={{ margin: '0 100px' }}>
                                    <button onClick={() => setVisible(false)}  style={{backgroundColor:'lightgray', color:'white',border:'0px',width:'54px',height:'25px',borderRadius:'4px'}}>
                                    取消
                                    </button>
                                    <Button size='mini' color='primary'>
                                    提交
                                    </Button>
                                </Space>
                            </div>
                        </Mask>
                        <a onClick={() => setVisible(true)} style={{ color: 'gray', padding: '0 0 0 220px' }}>收不到验证码</a>

                    </div>
                </Tabs.Tab>





                <Tabs.Tab title='邮箱账号密码' key='vegetables'>
                    {/* 输入手机号 */}
                    <Form>
                        <Form.Item
                            rules={[{ message: '手机号不能为空' }]}
                        >
                            <VirtualInput placeholder='输入邮箱账号' keyboard={<NumberKeyboard />} />
                        </Form.Item>
                    </Form>
                    {/* 输入验证码 */}
                    <Form>
                        <Form.Item label='' extra={<a>获取验证码</a>}>
                            <VirtualInput placeholder='输入验证码' keyboard={<NumberKeyboard />} />
                        </Form.Item>
                    </Form>
                    <Button block color='warning' size='large'>下一步</Button>
                </Tabs.Tab>
            </Tabs>
        </div>

    </div>
}