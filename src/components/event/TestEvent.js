import React from 'react';

//事件对象、键盘事件、表单事件、ref获取DOM节点、react实现类类似VUE的双向数据绑定
//事件对象是在出发DOM上的某个事件时，产生一个event对象，这个对象邦汉这所有与事件有关的信息

class TestEvent extends React.Component {

    //构造器
    constructor(props) {
        super(props);
        this.state = {
            name: '00',
            age: 17

        }
    }

    //获取表单的值
    //1、监听表单改变事件                event事件
    //2、获取表单的值                       event.target.value
    //3、赋值给相应的变量                用json格式来赋值
    //4、在某个地方拿到这个变量--间接的就获取了刚刚输入的值了
    setName = (e) => {
        console.log("---------------------");
        console.log(this.state.name);
        console.log(new Date());
        console.log(e);
        console.log(e.target.value);
        //赋值给变量
        console.log('赋值给变量 this.state.name');
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);
        console.log("---------------------");
    };

    getName = () => {
        console.log(this.state.name);
        alert(this.state.name);
    };

    render() {
        return (
            <div>
                <h3>NAME: {this.state.name}</h3>
                <h2>表单事件</h2>
                <input onChange={this.setName}/>
                <button onClick={this.getName}>点我试试</button>
            </div>
        )
    }
}
export default TestEvent;
