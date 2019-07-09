import React from 'react';
import axios from 'axios';

/*
通过http与服务器交互


1安装第三方模块
github.com/axios/axios  jsonp不建议使用，这里建议使用的是cors，后端跨域
方法：npm install axios --save /npm install axios --save
2哪里用哪里引入
方法：  import axios from 'axios'


  */
class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "u",
            password: "u",
            host: "https://127.0.0.1:80",
            login: "/login",
            users: []
        }
    }

    //https://www.npmjs.com/package/axios
    loginFun = (e) => {
        // var url = "http://127.0.0.1:80/test/login";
        var url = "http://127.0.0.1:80/test/users";
        // url = url + "/" + this.state.username + "/" + this.state.password;
        console.log(url);
        // let that = this;
        axios.get(url)
            .then((response) => {
                console.log(response);
                console.log(response.code === 1);
                console.log(response.data);
                console.log(response.data.data);
                // console.log(response.data.data.nickname);

                this.setState({
                    users: response.data.data
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                名称 {this.state.username}----<br/>
                <button onClick={this.loginFun}>登录</button>
                <ul>
                    {
                        this.state.users.map((value, key) => {
                            return <li key={key}>{value.id }--{value.nickname}--{value.createDate}</li>
                        })
                    }
                </ul>
                <hr/>
                <br/>


                <br/>


            </div>
        );
    }


}

export default User;
