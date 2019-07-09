import React from 'react';
import '../assets/css/index.css';

class Person extends React.Component {
    //子类必须在构造器中的第一行调用super方法，否则新建实例会报错，因为子类中没有this对象，而是继承父类的this
    constructor(props) {
        //父类的this
        super(props);
        //定义react数据

        this.state = {
            "msg": "Person组件",
            tittle: "这是tittle",
            color: 'red',
            style: {
                color: 'red',
                fontSize: '40px'
            }
        }
    }

    //绑定属性 要注意
    // class--> className
    // for--> htmlFor
    //   style 也是稍有差异             <div style={{"color": 'red'}}>行内样式 写法也与html有所不同</div>
    //其他没变

    render() {
        // return <div> 这是HOME</div>
        return (
            <div>
                <h2>{this.state.msg}</h2>

                <div title={this.state.title}>这是一个DIV</div>

                <hr/>

                <div className='red'>我是一个红色的DIV</div>
                <div className={this.state.color}>我是一个红色的DIV 2222</div>

                <hr/>
                <label htmlFor="name">姓名</label>
                <input id="name"/>

                <hr/>
                <div style={{"color": 'red'}}>行内样式 写法也与html有所不同</div>
                <hr/>
                <div style={this.state.style}>行内样式 写法也与html有所不同 2222</div>

            </div>
        );
    }
}
export default Person;
