import React from 'react';
/*
约束性非约束性组件：
    1.非约束性组件：<input type='text' defaultValue={this.state.username}/> 这个defaultValue 就是原生DOM中的value属性
        这样写出来的组件，其value值就是用户输入的内容，react完全不管用户输入的过程
    2.约束性组件             <input type='text' value={this.state.username} onChange={this.handleUsername}/>
        这里value属性不再是一个写死的值，他是this.sate.username， this.state.username是有this.handleUsername负责管理的
        这个时候实际上的input的value根本不是用户输入的内容，而是OnChange事件触发后，有this.setState 导致了一次重新渲染，不过react会优化这个

 */
class Bind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "N"
        };
    }


    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })

    };

    //双向绑定又叫做MVVM--用事件配合set函数触发重新渲染
    //MV--用defaultValue即可
    render() {
        return (<div>
            <h4>Bind方法一--onChange事件</h4>
            <h4>Bind方法一--defaultValue</h4>
            <br/>
            <input type='text' value={this.state.username} onChange={this.handleUsername}/>--{this.state.username}
            <br/>
            <input type='text' defaultValue={this.state.username}/>
        </div>);
    }
}

export default Bind;
