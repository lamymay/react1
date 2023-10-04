import React, {Component} from 'react';
import axios from 'axios';
import QRCodeComponent from './QRCode';
import config from './config';
import AudioPlayer from './AudioPlayer'; // 引入音频播放器组件
import './styles.css'; // 导入您的CSS文件
class PartyFollower extends Component {
    constructor() {
        super();
        this.state = {
            partyData: null,
            currentAudioIndex: 0,
        };
        this.partyIdOrCode = "64338EC18B6D4955"; // 暂时写死的派对号
        this.partyDetailUrl = `/zero/app/party/detail/${this.partyIdOrCode}`;
        this.audioRef = React.createRef();
        this.joinPartyUrl = `${config.baseUrl}/party/join`; // 前端页面地址 新增的常量
    }
    componentDidMount() {
        // 在组件挂载后，调用接口获取派对详情
        this.fetchPartyDetail();

        // 在组件挂载后，确保音频元素已经渲染到 DOM 中，然后再调用 playMusic
        const audioElement = this.audioRef.current;
        if (audioElement) {
            audioElement.addEventListener('canplaythrough', () => {
                this.playMusic();
            });
            audioElement.addEventListener('error', (error) => {
                console.error('音频播放错误:', error);
            });
        }



    }


    fetchPartyDetail = () => {
        axios
            .get(this.partyDetailUrl)
            .then((response) => {
                const partyData = response.data;
                if (this.isValidPartyData(partyData)) {
                    this.setState({partyData});
                } else {
                    this.setState({partyData: null});
                }
            })
            .catch((error) => {
                console.error('无法加入派对:', error);
                this.setState({partyData: null});
            });
    };

    isValidPartyData = (partyData) => {
        return (
            partyData &&
            partyData.fileList &&
            partyData.fileList.length > 0 &&
            partyData.fileList[this.state.currentAudioIndex]?.uri
        );
    };


    playMusic = () => {
        console.log("call playMusic方法 ")
        try {

            const {currentAudioIndex} = this.state;
            const audioElement = this.audioRef.current;


            console.log(this.state.partyData)
            console.log(this.state.partyData.fileList)
            console.log(this.state.partyData.fileList[currentAudioIndex])
            console.log(this.state.partyData.fileList[currentAudioIndex]?.uri)
            console.log(audioElement)

            if (
                this.state.partyData &&
                this.state.partyData.fileList &&
                this.state.partyData.fileList[currentAudioIndex]?.uri &&
                audioElement
            ) {
                audioElement.src = this.state.partyData.fileList[currentAudioIndex].uri;
                console.log(this.state.partyData.fileList);
                console.log("audioElement.src=" + audioElement.src);
                audioElement.playAudio();
                audioElement.addEventListener('ended', this.playNextMusic);
            } else {
                console.log("else");
            }
        } catch (error) {
            console.error("playMusic error:", error);
        }
    };


    playNextMusic = () => {
        this.setState((prevState) => ({
            currentAudioIndex: prevState.currentAudioIndex + 1,
        }), () => {
            this.playMusic();
        });
    };

    render() {
        const {partyData, currentAudioIndex} = this.state;
        // 构建二维码的内容
        const qrCodeContent = this.joinPartyUrl; // 使用常量

        return (
            <div>
                <h2>加入派对</h2>
                {partyData ? (
                    <div>
                        <h3>派对信息</h3>
                        <p>派对名称: {partyData.displayName}</p>
                        <h3>派对音乐列表</h3>
                        <ul>
                            {partyData.fileList.map((file, index) => (
                                <li key={index}>{file.uri}</li>
                            ))}
                        </ul>
                        <h3>音乐播放</h3>
                        <AudioPlayer ref={this.audioRef} audioUri={partyData.fileList[currentAudioIndex]?.uri} controls />

                        <button onClick={this.playMusic}>播放音乐</button>
                    </div>
                ) : (
                    <p>暂时无法加入派对</p>
                )}

                <div>
                    {/* 使用二维码组件 */}
                    <QRCodeComponent value={qrCodeContent} size={128}/>
                </div>
            </div>
        );
    }
}

export default PartyFollower;
