import React from 'react';

class User extends React.Component {

    constructor(porps) {
        super(porps);
        this.state = {
            username: ''
        }
    }


    //改变this指向，第一种 onClick={this.run.bind}
    //第二种
    //第三种更好 箭头函数
    run = (event) => {
        //事件对象， 包含所有的事件相关的信息
        console.log(event);
        //获取DOM节点
        alert(event.target);
        event.target.style.background = 'red';
        //获取DOM的属性
        alert(event.target.getAttribute("aId"));
    };


    //----------------------------------------------------------
    //获取表单input值
    //1 监听表单改变的事件                       onChange
    //2 在改变事件中获取输入,                 通过事件对象来获取的
    //3 吧表单输入的值赋值给成员变量            this.setState({username: e.target.value  });
    //4 点击按钮的时候获取成员变量的值
    setUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    };
    getUsername = () => {
        console.log(this.state.username);
    };

    //  render  v.	给予; 使成为; 递交; 表达
    render() {
        return (<div>
            <div onClick={this.run}>事件对象打印</div>


            <h2>表单事件</h2>
            <input onChange={this.setUsername}></input>
            <button onClick={this.getUsername}> 获取INPUT的值</button>

        </div>);
    }

}

export default User;


/*
事件对象
键盘事件、表单事件、ref获取dom节点、react实现类似vue双向绑定

事件对象在出发DOM上的某个事件时会产生一个事件对象event，这个对象包含着所有余事件有关的信息
*/
