// AudioPlayer.jsx
import React, { Component } from 'react';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAudioIndex: 0,
            isPlaying: false,
        };
        this.audioRef = React.createRef();
    }

    componentDidMount() {
        // 在组件挂载后，初始化音频播放
        this.playMusic();
    }

    componentDidUpdate(prevProps) {
        // 监听派对详情对象的变化，以更新音频源
        if (prevProps.partyData !== this.props.partyData) {
            this.playMusic();
        }
    }

    playMusic = () => {
        const { partyData } = this.props;
        const { currentAudioIndex, isPlaying } = this.state;
        const audioElement = this.audioRef.current;

        if (
            partyData &&
            partyData.fileList &&
            partyData.fileList.length > 0 &&
            partyData.fileList[currentAudioIndex]?.uri &&
            audioElement
        ) {
            if (!isPlaying) {
                // 创建新的音频元素
                audioElement.src = partyData.fileList[currentAudioIndex].uri;

                // 监听音频结束事件，以便播放下一首
                audioElement.addEventListener('ended', this.playNextMusic);

                // 播放音频
                audioElement.play();
                this.setState({ isPlaying: true });
            }
        }
    };

    playNextMusic = () => {
        this.setState(
            (prevState) => ({
                currentAudioIndex: prevState.currentAudioIndex + 1,
                isPlaying: false, // 重置播放状态
            }),
            () => {
                this.playMusic();
            }
        );
    };

    render() {
        const { partyData } = this.props;
        const { currentAudioIndex, isPlaying } = this.state;

        return (
            <div>
                <h3>音乐播放</h3>
                {partyData && (
                    <div>
                        <p>当前播放: {partyData.fileList[currentAudioIndex]?.uri}</p>
                        <p>状态: {isPlaying ? '播放中' : '暂停'}</p>
                    </div>
                )}
                <audio ref={this.audioRef} controls />
            </div>
        );
    }
}

export default AudioPlayer;
