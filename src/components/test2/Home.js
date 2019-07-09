import React, {Component} from 'react';

class Home extends Component {

    constructor() {
        super();
        //定义react数据
        this.state = {
            "name": "zhangsan",
            "age": "zhangsan",
            userInfo: {
                username: 'TOM',
                pwd: 123
            }
        }
    }

    run = (event) => {
        console.log(event);
        //当前事件的DOM节点
        console.log(event.target);
        event.target.style.background = 'yellow';
        //不要驼峰表示！ index.js：1446警告：React无法识别DOM元素上的`aId`道具。 如果您故意希望它作为自定义属性出现在DOM中，请将其拼写为小写的`aid`。 如果您不小心从父组件传递了它，请将其从DOM元素中删除。
        alert(event.target.getAttribute('aid'));
    };

    render() {
        // return <div> 这是HOME</div>
        return (
            <div>
                <br/>
                <button onClick={this.run} aid="123">事件对象</button>
                <br/>
                <br/>
                <br/>
                <hr/>
                <h2>React组件中的所有结点要被根节点包含</h2>
                <p>测试P标签</p>
                <p>名称--{this.state.name}</p>
                <p>年龄--{this.state.age}</p>
                <p>对象--{this.state.userInfo.username}</p>
                <p>对象的名字--{this.state.userInfo.username}</p>
                <p>对象的密码--{this.state.userInfo.pwd}</p>
            </div>
        );
    }
}
export default Home;
