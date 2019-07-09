import React from 'react';

class Action extends React.Component {

    constructor(porps) {
        super(porps);

        this.state = {
            msg: '消息来了',
            msg2: '2消息来了',
            msg3: '3消息来了',
            name: "这个是react方法相关的一些测试"
        };

        //方式2
        this.getMsg2 = this.getMsg2.bind(this);

    }


    run() {
        alert('这是一个run方法');
    }

    //方式1
    getMsg() {
        alert(this.state.msg)
    }

    getMsg2() {
        alert(this.state.msg2)
    }

    //方式3
    getMsg3 = () => {
        alert(this.state.msg3)
    };


    //执行方法传值，改变属性中的值--改变this的指向
    setMsg = () => {
        // this.state.msg = "欧司朗";
        this.setState({
            name: '我是改变后的值'
        });

        console.log(this.state.msg);
    };


    //注意这里只是把值改变了

    setName = (name) => {
        console.log('--------------------');
        console.log(name);
        // this.state.name = name;
        this.setState({
            name: name
        });


        console.log(this.state.name);
        console.log('--------------------');
        // this.state.msg = "欧司朗，爱恨";
        // alert(this.state.msg);
    };

    render() {
        return (
            <div>
                <h3>测试事件与方法--{this.state.name}</h3>
                <h3>{this.state.name}</h3>
                <button onClick={this.run}>点击则执行run方法</button>
                <hr/>
                <button onClick={this.getMsg.bind(this)}>点击则执行方法--方式1</button>
                <hr/>
                <button onClick={this.getMsg2}>点击则执行方法--方式2</button>
                <hr/>
                <button onClick={this.getMsg3}>点击则执行方法--方式3</button>
                <hr/>
                <button onClick={this.setMsg}>改变属性中的值--setMsg</button>
                <hr/>
                <button onClick={this.setName.bind(this, "测试1111")}>执行方法传值--改变标题</button>
                <hr/>
                <hr/>

            </div>
        );
    }

}

export default Action;
