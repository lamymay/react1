import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      message: '',
      uri: null, // 存储音乐文件的URI
      isPlaying: false, // 是否正在播放音乐
      fileList: [], // 存储上传成功的文件对象
    };
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    // 注册 Service Worker，使用相对路径
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js').then((registration) => {
        console.log('Service Worker 注册成功:', registration);
      }).catch((error) => {
        console.error('Service Worker 注册失败:', error);
      });
    }
  }

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const { selectedFile } = this.state;
    if (!selectedFile) {
      this.setState({ message: '请选择要上传的文件' });
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('https://127.0.0.1:9000/zero/file/upload', formData)
      .then((response) => {
        const { uri } = response.data.file;
        if (uri) {
          this.setState({ message: '文件上传成功', uri });

          // 将成功上传的文件对象添加到fileList中
          this.setState((prevState) => ({
            fileList: [...prevState.fileList, response.data.file],
          }));
        } else {
          this.setState({ message: '文件上传成功，但未返回有效的URI' });
        }
      })
      .catch((error) => {
        console.error('文件上传失败:', error);
        this.setState({ message: '文件上传失败' });
      });
  };

  togglePlay = () => {
    const audioElement = this.audioRef.current;

    if (!this.state.isPlaying) {
      // 开始播放
      audioElement.play().then(() => {
        this.setState({ isPlaying: true });
      });
    } else {
      // 暂停播放
      audioElement.pause();
      this.setState({ isPlaying: false });
    }
  };

  startParty = async () => {
    const { fileList } = this.state;
    if (!fileList.length) {
      console.log('没有可用的音乐文件');
      return;
    }

    // 构建发送给接口的数据
    const requestData = {
      offsetTime: null,
      playTimeServer: null,
      displayName: '测试party',
      enableDebug: true,
      fileList: fileList.map((file) => ({
        id: file.id,
        createTime: file.createTime,
        updateTime: file.updateTime,
        code: file.code,
        hash: file.hash,
        displayName: file.displayName,
        suffix: file.suffix,
        type: file.type,
        remark: file.remark,
        name: file.name,
        length: file.length,
        lengthUnit: file.lengthUnit,
        path: file.path,
        host: file.host,
        contextPath: file.contextPath,
        uri: file.uri,
        location: file.location,
        version: file.version,
        status: file.status,
      })),
    };

    try {
      // 发送数据给接口
      const response = await axios.post('https://127.0.0.1:9000/zero/app/party/start/', requestData);
      console.log('Party 启动成功:', response.data);
    } catch (error) {
      console.error('Party 启动失败:', error);
    }
  };

  render() {
    const { uri, isPlaying, fileList } = this.state;
    return (
      <div>
        <h2>文件上传示例</h2>
        <input type="file" onChange={this.onFileChange} />
        <button onClick={this.onFileUpload}>上传文件</button>
        <p>{this.state.message}</p>

        {uri && (
          <div>
            <h2>音乐播放</h2>
            <audio ref={this.audioRef} src={uri}></audio>
            <button onClick={this.togglePlay}>
              {isPlaying ? '暂停' : '播放'}
            </button>
          </div>
        )}

        {fileList.length > 0 && (
          <div>
            <h2>上传成功的文件</h2>
            <ul>
              {fileList.map((file) => (
                <li key={file.id}>{file.displayName}</li>
              ))}
            </ul>
            <button onClick={this.startParty}>启动Party</button>
          </div>
        )}
      </div>
    );
  }
}

export default FileUpload;
