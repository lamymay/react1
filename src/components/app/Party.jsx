import React, { Component } from 'react';
import axios from 'axios';

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
        this.uploadUrl = 'https://127.0.0.1:9000/zero/file/upload';
        this.createPartyUrl = 'https://127.0.0.1:9000/zero/app/party/start';
    }

    onFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const { selectedFile, displayName, fileList } = this.state;
        if (!selectedFile) {
            this.setState({ message: '请选择要上传的文件' });
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        // 上传文件
        axios
            .post(this.uploadUrl, formData)
            .then((response) => {
                const fileData = response.data.file;
                fileList.push(fileData);

                // 创建派对
                this.createParty(fileList, displayName);
            })
            .catch((error) => {
                console.error('文件上传失败:', error);
                this.setState({ message: `文件上传失败: ${error.message}` });
            });
    };

    createParty = (fileList, displayName) => {
        if (fileList.length === 0) {
            this.setState({ message: '请先上传文件' });
            return;
        }

        const partyData = {
            displayName: displayName || null,
            fileList: fileList.map((file) => ({ id: file.id, uri: file.uri })),
        };

        // 调用创建派对接口
        axios
            .post(this.createPartyUrl, partyData)
            .then((response) => {
                const { fileList: responseFileList } = response.data;

                if (responseFileList && responseFileList.length > 0) {
                    this.playAudio(0);
                } else {
                    this.setState({ message: '创建派对成功，但没有文件可播放' });
                }
            })
            .catch((error) => {
                console.error('创建派对失败:', error);
                this.setState({ message: `创建派对失败: ${error.message}` });
            });
    };

    playAudio = (index) => {
        const { fileList } = this.state;
        if (index >= fileList.length) {
            // 播放完所有音乐文件
            this.setState({ message: '所有音乐文件已播放完毕' });
            return;
        }

        const audioElement = this.audioRef.current;
        const audioUri = fileList[index].uri;
        audioElement.src = audioUri;
        audioElement.play().then(() => {
            this.setState({ currentFileIndex: index });
            audioElement.addEventListener('ended', () => {
                // 当前音乐文件播放完毕后，播放下一个文件
                this.playAudio(index + 1);
            });
        });
    };

    render() {
        const { message } = this.state;
        return (
            <div>
                <h2 style={{ textAlign: 'center', color: '#007bff' }}>开启一个派对</h2>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>上传文件</button>
                </div>
                <p>{message}</p>
                <audio ref={this.audioRef} controls />
            </div>
        );
    }
}

export default Party;
