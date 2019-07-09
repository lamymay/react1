import React from 'react';

import '../../../assets/css/index.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tittle: '',
            list: []
        }
    }


    //获取表单的值
    addFun = (e) => {
        //获取到值后用list数据渲染到这个位置
        console.log(e.keyCode);

        if (13===e.keyCode ) {
            console.log(e.target.value);


            var txt = this.refs.tittle.value;
            if (txt !== null && '' !== txt.trim()) {
                var tempList = this.state.list;
                tempList.push(txt);//push方法返回的索引值
                console.log(tempList);
                this.setState({
                    list: tempList
                });
            }
            this.refs.tittle.value = '';
        }

    };

    delFun = (key) => {
        console.log('del' + key);
        let tem = this.state.list;
        //index:数组开始下标        len: 替换/删除的长度       item:替换的值，删除操作的话 item为空  http://www.mamicode.com/info-detail-1870613.html
         tem.splice(key,1);
        this.setState({
            list: tem
        })

    };

    keyUpFun = (e) => {
        this.addFun(e);
    };


    // handleTittle = (e) => {
    //     //把输入的内容作为list的新元素
    //
    //     //对于list进行赋值，
    //     let tempList = this.state.list;
    //     tempList = tempList.push(this.refs.tittle.value);
    //     console.log(tempList);
    //
    //     this.setState({
    //         // tittle: e.target.value
    //         list: tempList
    //
    //     })
    // };
    render() {
        return (<div>
            <h3> TodoList</h3>

            <input type='text' ref='tittle' onKeyUp={this.keyUpFun}/>
            <button onClick={this.addFun}>增加</button>
            <hr/>
            <ul className='list' >

                {
                    this.state.list.map((value, key) => {
                        return (
                            <li key={key}>{value}---
                                <button onClick={this.delFun.bind(this,key)}>删除</button>
                            </li>
                        )
                    })
                }

                {/*{this.state.list.map(function (value, key) {*/}
                {/*return (*/}
                {/*<li key={key}>{value}--- <button onClick={this.delFun}>删除</button></li>*/}
                {/*)*/}
                {/*})}*/}
            </ul>

            <br/>

            <hr/>
            {this.state.tittle}

        </div>);
    }

}

export default TodoList;
