import React, {Component} from 'react';
import axiosInstance from './axiosConfig'; // 引入全局配置的 axios 实例
import config from './config';
import QRCodeComponent from './QRCode';
import AudioPlayer from "./AudioPlayer"; // 引入二维码组件

class Party extends Component {
    constructor() {
        super();
        this.state = {
            selectedFile: null,
            message: '',
            displayName: '', // 派对名称
            fileList: [], // 上传的文件列表
            currentFileIndex: 0, // 当前播放文件索引
        };
        this.audioRef = React.createRef();
        // 请求 URL 常量
        this.uploadUrl = `/zero/file/upload`; // 后端上传文件接口地址
        this.createPartyUrl = `${config.server_base_uri}/zero/app/party/start`; // 后端创建派对接口地址

        this.joinPartyUrl = `${config.baseUrl}/party/join`; // 前端页面地址 新增的常量
    }

    openNewTab = () => {
        // 使用配置文件中的baseUrl构建完整的URL
        const joinPartyUrl = `${config.baseUrl}/party/join`;

        // 打开一个新的浏览器标签并访问指定页面
        window.open(joinPartyUrl, '_blank');
    };

    onFileChange = (event) => {
        this.setState({selectedFile: event.target.files[0]});
    };

    onFileUpload = () => {
        const {selectedFile, displayName, fileList} = this.state;
        if (!selectedFile) {
            this.setState({message: '请选择要上传的文件'});
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        axiosInstance
            .post(this.uploadUrl, formData)
            .then((response) => {
                const fileData = response.data.file;
                fileList.push(fileData);

                // 创建派对
                this.createParty(fileList, displayName);
            })
            .catch((error) => {
                console.error('文件上传失败:', error);
                this.setState({message: `文件上传失败: ${error.message}`});
            });
    };

    createParty = (fileList, displayName) => {
        if (fileList.length === 0) {
            this.setState({message: '请先上传文件'});
            return;
        }

        const partyData = {
            displayName: displayName || null,
            fileList: fileList.map((file) => ({id: file.id, uri: file.uri})),
        };

        // 调用创建派对接口
        axiosInstance
            .post(this.createPartyUrl, partyData)
            .then((response) => {
                const {fileList: responseFileList} = response.data;

                if (responseFileList && responseFileList.length > 0) {
                    this.playAudio(0);
                } else {
                    this.setState({message: '创建派对成功，但没有文件可播放'});
                }
            })
            .catch((error) => {
                console.error('创建派对失败:', error);
                this.setState({message: `创建派对失败: ${error.message}`});
            });
    };

    playAudio = (index) => {
        const {fileList} = this.state;
        if (index >= fileList.length) {
            // 播放完所有音乐文件
            this.setState({message: '所有音乐文件已播放完毕'});
            return;
        }

        const audioElement = this.audioRef.current;
        const audioUri = fileList[index].uri;
        audioElement.src = audioUri;
        audioElement.play().then(() => {
            this.setState({currentFileIndex: index});
            audioElement.addEventListener('ended', () => {
                // 当前音乐文件播放完毕后，播放下一个文件
                this.playAudio(index + 1);
            });
        });
    };

    render() {
        const {message} = this.state;
        // 构建二维码的内容
        const qrCodeContent = this.joinPartyUrl; // 使用常量

        return (
            <div>
                <h2 style={{textAlign: 'center', color: '#007bff'}}>开启一个派对</h2>
                <div>
                    <input type="file" onChange={this.onFileChange}/>
                    <button onClick={this.onFileUpload}>上传文件</button>
                </div>
                <p>{message}</p>
                <AudioPlayer ref={this.audioRef} audioUri={partyData.fileList[currentAudioIndex]?.uri} controls />


                <div>
                    {/* 新增的按钮 */}
                    <button onClick={this.openNewTab}
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                backgroundColor: 'blue', // 添加背景颜色
                                color: 'white', // 添加文字颜色
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}>打开新标签页
                    </button>
                </div>
                {/* 使用二维码组件 */}
                <QRCodeComponent value={qrCodeContent} size={128}/>
            </div>
        );
    }
}

export default Party;
