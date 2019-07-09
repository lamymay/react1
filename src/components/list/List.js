import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '00',
            age: 17
        }
    }

    //获取表单的值
    //0、给元素定义ref属性
    //1、监听表单改变事件                onChange事件
    //2、获取表单的值                       refs方式，相当于id
    //3、赋值给相应的变量                用json格式来赋值
    //4、在某个地方拿到这个变量--间接的就获取了刚刚输入的值了
    refFun = () => {
        let value = this.refs.name.value;
        this.setState({
            name: value
        })
    };

    getName = () => {
        console.log(new Date());
        console.log(this.state.name);
    };

    keyUpFun = (e) => {
        console.log(e);
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            alert(e.target.value);
        }
    };

    render() {
        return (
            <div>
                <h2>test List</h2>
                <h3>NAME: {this.state.name}</h3>
                <h2>表单事件</h2>
                <input ref='name' onChange={this.refFun}/>
                <button onClick={this.getName}>获取名称</button>
                <br/>
                键盘事件
                <input onKeyUp={this.keyUpFun}/>
            </div>
        );
    }
}

export default List;

