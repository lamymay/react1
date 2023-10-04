import React, { Component } from 'react';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        // 当父组件传递的音频 URI 发生变化时，更新音频源并播放
        if (prevProps.audioUri !== this.props.audioUri) {
            this.playAudio();
        }
    }

    playAudio = () => {
        const { audioUri } = this.props;
        console.log("音频 URI:", audioUri); // 打印音频 URI 到控制台
        const audioElement = this.audioRef.current;
        audioElement.src = audioUri;
        audioElement.play();
    };

    render() {
        return (
            <audio ref={this.audioRef} controls />
        );
    }
}

export default AudioPlayer;
