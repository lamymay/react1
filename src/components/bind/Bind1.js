import React, {Component} from 'react';

class Bind1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '这个是人名'
        }
    }

    //model 改变影响view 是默认的   view改变影响model
    onInputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    buttonFun = (e) => {
        this.setState({
            name: '你猜'
        })

    };

    render() {
        return (<div>

            <h2>双向数据绑定模拟</h2>
            <input value={this.state.name} onChange={this.onInputChange}/>
            <button onClick={this.buttonFun}>测试 model 改变影响视图</button>
            <p>{this.state.name}</p>
        </div>);
    }
}

export default Bind1;
