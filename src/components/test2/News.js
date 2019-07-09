import React from 'react';

//注意JSX 语法
class News extends React.Component {

    constructor(props) {
        // props 用于父子组件传值
        super(props);
        //定义react数据
        this.test={
            "msg": "MM"
        }
    }

    render() {
        // return <div> 这是HOME</div>
        return (
            <div>
                <h2>{this.test.msg}</h2>
                <ul>
                    <li>这是个列表</li>
                    <li>这是个列表</li>
                    <li>这是个列表</li>
                </ul>
            </div>
        );
    }
}
export default News;
