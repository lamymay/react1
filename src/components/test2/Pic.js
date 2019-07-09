import React from 'react';
import img1 from '../assets/images/1.jpg'

class Pic extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            msg: '测试',
            name: "第2种方式",
            age: 11
        };

        //第2种改变this指向--->获取数据
        this.getName = this.getName.bind(this);
    }


    run() {
        alert("run fun")
    }

    getMsg() {
        alert(this.state.msg);
    }

    getName() {
        alert(this.state.name);
    }

    getAge = () => {
        alert(this.state.age)
    };

    setAge = () => {
        this.setState({
            age: 18
        })
    };

    //传值
    setName = (p,msg) => {
        this.setState({
            name: p,
            msg: msg
        })
    };

    render() {
        return (
            <div>
                <h2> 名字：  {this.state.name}  年龄 {this.state.age}  MSG {this.state.msg}</h2>
                <button onClick={this.run}>执行run 方法</button>
                <br/>
                <button onClick={this.getMsg.bind(this)}>第1种改变this指向--->获取数据</button>
                <br/>
                <button onClick={this.getName}>第2种改变this指向--->获取数据</button>
                <br/>
                <button onClick={this.getAge}>第3种改变this指向--->获取数据</button>
                <br/>
                <button onClick={this.setAge}>改变数据</button>
                <button onClick={this.setName.bind(this, "照葫芦画瓢")}>改变名字</button>
                <button onClick={this.setName.bind(this, "照葫芦画瓢","第三讲结束")}>改变名字和msg</button>
                <hr/>
                <br/>
                <br/>
                <br/>
                <img src={img1}/>
                <img
                    src='https://imgazure.microsoftstore.com.cn/medias/MIC2407-593Wx390H-1.png?context=bWFzdGVyfGltYWdlc3wxMDU5NTJ8aW1hZ2UvcG5nfGltYWdlcy9oOTEvaGFkLzk5NTU3NjIwNDQ5NTgucG5nfDM1YzBjYTU5MGM5NTMwYjFhNTYxNGRiZGFiYTAwMGMwYTQxZTIxMTJmYzRkZWM2NmQxNDkwNDc0OGVmZmU3OWM'/>
                <hr/>
                <img src={require('../assets/images/1.jpg')}/>
            </div>
        );
    }
}
export default Pic;
