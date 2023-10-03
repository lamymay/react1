import React, { Component } from 'react';
import axios from 'axios';

class PartyFollower extends Component {
    constructor() {
        super();
        this.state = {
            partyData: null,
            currentAudioIndex: 0,
        };
        this.partyIdOrCode = "64338EC18B6D4955"; // 暂时写死的派对号
        this.partyDetailUrl = `/zero/app/party/detail/${this.partyIdOrCode}`;
    }

    componentDidMount() {
        // 在组件挂载后，调用接口获取派对详情
        this.fetchPartyDetail();
    }

    fetchPartyDetail = () => {
        axios
            .get(this.partyDetailUrl)
            .then((response) => {
                const partyData = response.data;
                if (this.isValidPartyData(partyData)) {
                    this.setState({ partyData }, () => {
                        // 在获取派对详情后自动播放音乐
                        this.playMusic();
                    });
                } else {
                    this.setState({ partyData: null });
                }
            })
            .catch((error) => {
                console.error('无法加入派对:', error);
                this.setState({ partyData: null });
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
        const { partyData, currentAudioIndex } = this.state;
        if (partyData && partyData.fileList && partyData.fileList[currentAudioIndex]?.uri) {
            const audioElement = new Audio(partyData.fileList[currentAudioIndex].uri);
            audioElement.play();
            audioElement.addEventListener('ended', this.playNextMusic);
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
        const { partyData } = this.state;

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
                    </div>
                ) : (
                    <p>暂时无法加入派对</p>
                )}
            </div>
        );
    }
}

export default PartyFollower;
