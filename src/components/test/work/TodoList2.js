import React from 'react';

import '../../../assets/css/index.css';

class TodoList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            list: [
                {
                    name: '大雄',
                    checked: true
                },
                {
                    name: '胖虎',
                    checked: true
                },
                {
                    name: '喵喵',
                    checked: true
                },
                {
                    name: '静香',
                    checked: true
                }
            ]
        }
    }


    //获取表单的值
    addFun = (e) => {

    };

    delFun = (key) => {

    };

    checkboxChange = (key, checked) => {
        console.log(key);
        console.log(checked);
    };

    keyUpFun = (e) => {
        this.addFun(e);
    };


    render() {
        return (<div>
            <h3> TodoList2 </h3>
            <h2>待办事情</h2><br/>
            <input ref='name' onKeyUp={this.keyUpFun}/>
            <button onClick={this.addFun}>添加</button>
            <br/>
            <ul>
                {
                    this.state.list.map((value, key) => {
                        if (value.checked) {
                            return (
                                <li key={key}>{value.name}
                                    <input type='checkbox' checked={value.checked}
                                           onChange={this.checkboxChange.bind(this, key, value.checked)}/>---
                                    <button onClick={this.delFun.bind(this, key)}>删除</button>

                                </li>
                            )
                        }

                    })
                }

            </ul>
            <br/>

            <hr/>
            <h2>已完成事情</h2>

            <br/>

            <hr/>
        </div>);
    }

}

export default TodoList2;
