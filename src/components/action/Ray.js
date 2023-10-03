import React from 'react';

//react 获取表单元素的值  也可以用ref 直接操作DOM
class Ray extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "react的表单",
            name: "",
            sex: "2",
            info: '',
            city: "",
            cities: [
                'beijing', 'shanghai', 'nanjing'
            ],
            hobby: [
                {
                    tittle: '睡觉',
                    checked: true
                },
                {
                    tittle: '吃饭',
                    checked: true
                }, {
                    tittle: 'dadoudou',
                    checked: false
                }
            ]
        }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value

        });
    };

    //阻止表单提交
    stopSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.sex);
        console.log(this.state.city);
        console.log(this.state.hobby);
        console.log(this.state.info);
    };

    render() {
        return (<div>
            <h3>{this.state.msg}</h3><br/>
            <form onSubmit={this.stopSubmit}>
                名称: <input type='text' value={this.state.name} onChange={this.handleName}/><br/>
                性别：<input type='radio' value='1' checked={this.state.sex == 1} onChange={this.handleSex}/>男
                <input type='radio' value='2' checked={this.state.sex == 2} onChange={this.handleSex}/>女 <br/>
                <hr/>

                {/* 下拉框*/}
                居住地：<select value={this.state.city} onChange={this.handleCity}>
                {
                    this.state.cities.map(function (value, key) {
                        return <option key={key}>{value}</option>

                    })
                }
            </select><br/>
                {/*checkbox*/}
                爱好：{
                //注意this指向
                this.state.hobby.map((value, key) => {
                    return (
                        <span key={key}>
                            {value.tittle}<input type='checkbox' checked={value.checked}
                                                 onChange={this.handleHobby.bind(this, key)}/>
                        </span>
                    )
                })
            }
                <hr/>
                <textarea value={this.state.info} onChange={this.handleInfo}/>


                <br/> <input type='submit' defaultValue='提交'/><br/>

            </form>
            <hr/>
            {this.state.name}


        </div>);

    }

    handleSex = (e) => {
        this.setState({
            sex: e.target.value

        })
    };

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    };


    handleHobby(key) {
        let hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;


        this.setState({
            hobby: hobby
        })
    }

    handleInfo = (e) => {
        this.setState({
            info: e.target.value
        })
    }
}

export default Ray;
