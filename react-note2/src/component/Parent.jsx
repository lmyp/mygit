
import React, { Component } from 'react';
import {Drawer, Form, Input,InputNumber,Select, Icon, Button, DatePicker,TextArea} from 'antd'
import Detail from './Child'
import './Parent.css'
const { Option } = Select;

class Parent extends Component {
  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      userList: [],
      list: [],
      visible: false,
      isShow: true,
      inputValue: '',
      inputNumber: [],
      totalPrice: 0,
      number: value.number || 0,
      currency: value.currency || 'rmb',
    }
    this.handClick = this.handClick.bind(this);
    this.addList = this.addList.bind(this)
  }
//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
// }
onClose = () => {
    this.setState({
      visible: false,
    });
}
handClick() {
    // this.props.history.push('/Detail')
    this.setState({
      visible: true,
    })
 }
 inputChange(e) {
    //  console.log(this)
    this.setState({
        // inputValue: e.target.inputValue
        inputValue: this.input.value
    })
 }
 
 addList(v) {
    // console.log('v:', v)
    let total = this.state.totalPrice
    const lists = [...this.state.list,this.state.inputValue,this.state.inputNumber]
    const a = lists.map(book => (book.userName * 1))
    // console.log('a:',a)
    var b = () => {
    for(var i=0;i<a.length;i++){
      if(isNaN(a[i])){
        a.splice(i, 1)
      }
      
    }
    return a
   }
   console.log('b',b())
    // .reduce((prev, cur) => prev + cur)
    total = a.reduce((prev, cur) => prev + cur)
    // console.log('total:', total)
    // console.log('lit:',lists)
    this.setState({
        // list: [...this.state.list,this.state.inputValue,this.state.inputNumber],
        list: lists,
        totalPrice: total,
        inputValue: '',
        visible: false,
    })
      //  console.log(this.ul.querySelectorAll('li').length)
      console.log('this:',this.state.list)
    
}
 componentWillMount(){
    console.log('prosp:',this.props)
    // if(this.props.location.state){
    //     this.setState({
    //       userList: this.props.location.state.data
    //       })
    // }
  
    // var lis = document.querySelectorAll('#deleteLi')
    // console.log('lis',lis.length)
    // function a() {
    //   var lis = document.querySelectorAll('li')
    //   console.log('lis',lis)
    //   for( var i = 0; i< lis.length; i++) {
    //   if( i % 2 === 0) 
    //       lis[i].remove()
    //     i++;
    //   }
    // }
    // a()

  
}
// onChange(value) {
//     console.log('changed', value);
//     this.setState({
//         inputNumber: value
//     })
//   }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        // select,
        'dateTime': fieldsValue['dateTime'].format('MM-DD HH:mm:ss'),
      };
      
      this.setState({
        inputNumber: values,
        // list: [...this.state.list,this.state.inputNumber],
    })
      console.log('Received values of form: ', values);
    });
    
  };
    // onChange(date, dateString) {
    //   console.log(date, dateString)
    // }
    render() {
      const {getFieldDecorator} = this.props.form  //使用数据绑定方法
      const {select} = this.props.form
      const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      };
      const { state } = this;
      const { TextArea } = Input;
     
      return (
        <div className="homePage">
                <div className="header">我的支出</div>
                <div className="today">
                    <div className="left">
                        <p className="total">今日累计</p>
                        <p className="price">{this.state.totalPrice}元</p>
                    </div> 
                </div>

          <div className="LookMore">
              <div className="title">查看月度报告</div>
          </div>
          <ul ref={(ul)=> {this.ul = ul}} id="deleteUl">
                    {
                        this.state.list.map((item, index) => {
                            return(                           
                                <li key={index + item} id="deleteLi">
                                    < Detail content={item}  key={index + item} index={index}
                                    // list={this.state.list
                                    />
                                </li>
                                ) 
                        })
                    }
                </ul>  
                <div className="footer">
                  <Icon type="plus" id="icon" />
                  <div className="add" onClick={this.handClick}>添加</div>
                </div>
                
                        {/* <Button type="primary" onClick={this.showDrawer}>Open</Button> */}
                <Drawer
                title="账单详情"
                placement="bottom"
                closable={false}
                onClose={this.onClose}
                height={500}
                visible={this.state.visible}

                >
          <Form layout="vertical" onClick={this.handleSubmit}>
            <Form.Item>
              {
                getFieldDecorator('userName', {
                  initialValue: '',//初始化数据
                  rules: [//验证规则
                {
                  required: true,
                  message: '金额不能为空'
                }
                ]
                })(
                  <Input placeholder="请输入金额"/>
                )
                }
            </Form.Item>
            <Form.Item>
              {
                 
                 getFieldDecorator('select', select)(
  
                <Select style={{ width: '32%' }}>
                  
                  <Option value="现金">现金</Option>
                  <Option value="支付宝">支付宝</Option>
                  <Option value="微信">微信</Option>
                  <Option value="其他">其他</Option>
                </Select>
                  )
              }
			      </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('textarea')(
                  <TextArea rows={4} placeholder="备注" />
                )
              }
            </Form.Item>
            <Form.Item >
              {
                getFieldDecorator('dateTime', config)(
                <DatePicker showTime format="MM-DD HH:mm:ss" />,
                )
              }
            </Form.Item>

            <Form.Item>
              {
                // <Button type="primary" onClick={this.handleSubmit}>保存修改</Button>
                
              }
			      </Form.Item>
          </Form>
          {/* <button onClick={this.addList}>保存修改</button> */}
          <Button type="primary" onClick={this.addList} block>保存修改</Button>
          </Drawer>   
        
      </div>
        )
    }
}


export default Form.create()(Parent);
