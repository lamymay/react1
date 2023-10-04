// PartyFollower.jsx
import React, { Component } from 'react';
import axios from 'axios';
import QRCodeComponent from './QRCode';
import AudioPlayer from './AudioPlayer';
import './styles.css';

class PartyFollower extends Component {
    constructor() {
        super();
        this.state = {
            partyData: null,
        };
        this.partyIdOrCode = "64338EC18B6D4955";
        this.partyDetailUrl = `/zero/app/party/detail/${this.partyIdOrCode}`;
    }

    componentDidMount() {
        this.fetchPartyDetail();
    }

    fetchPartyDetail = () => {
        axios
            .get(this.partyDetailUrl)
            .then((response) => {
                const partyData = response.data;
                if (this.isValidPartyData(partyData)) {
                    this.setState({ partyData });
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
        return partyData && partyData.fileList && partyData.fileList.length > 0;
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
                        {/* 将partyData传递给AudioPlayer */}
                        <AudioPlayer partyData={partyData} />
                    </div>
                ) : (
                    <p>暂时无法加入派对</p>
                )}
                <div>
                    <QRCodeComponent value={this.partyDetailUrl} size={128} />
                </div>
            </div>
        );
    }
}

export default PartyFollower;
