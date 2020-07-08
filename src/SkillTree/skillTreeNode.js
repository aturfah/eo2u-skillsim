import React, {Component} from 'react';
import './skillTree.css';

class SkillTreeNode extends Component {
    constructor(props) {
        super(props)

        this.incrementSkillLevel = this.incrementSkillLevel.bind(this);
        this.increaseSkillLevel = this.increaseSkillLevel.bind(this);
        this.decreaseSkillLevel = this.decreaseSkillLevel.bind(this);
        this.maxSkillLevel = this.maxSkillLevel.bind(this);
        this.minSkillLevel = this.minSkillLevel.bind(this);
    }

    increaseSkillLevel() {
        if (this.props.skillLevel < this.props.skillData.max_level) {
            this.incrementSkillLevel(1)
        }
    }

    incrementSkillLevel(levelDelta) {
            console.log('Modifying Skill Level by', levelDelta)
            this.props.updateMethod('skillsChosen',
                {_id: this.props.skillData._id, level: this.props.skillLevel + levelDelta})
    }

    maxSkillLevel() {
        const delta = this.props.skillData.max_level - this.props.skillLevel;
        if (delta > 0) {
            console.log('Maxing out skill level')
            this.incrementSkillLevel(delta)
        }
    }

    minSkillLevel() {
        console.log('Setting skill level to 0')
        this.incrementSkillLevel(0 - this.props.skillLevel)
    }

    decreaseSkillLevel() {
        if (this.props.skillLevel > 0) {
            console.log('Decreasing Skill Level')
            this.incrementSkillLevel(-1);
        }
    }

    render() {
        let header = <span>{this.props.skillData.name}</span>;
        let nodeColor = '#f5bdc6';
        let textColor = 'black';
        if(this.props.activeFlag) {
            header = <b>{this.props.skillData.name}</b>
            nodeColor = '#cb212c'; 
        }
        const nodeStyle = {
            backgroundColor: nodeColor,
            color: textColor,
        }

        let levelInfo = <span></span>;
        let buttons = <div></div>
        if (this.props.skillData.linked_skill !== null) {
            levelInfo = <span>Lv.{this.props.skillLevel}/{this.props.skillData.max_level}</span>;
        }
        else if (this.props.skillData.no_level === false) {
            levelInfo = <span>Lv.{this.props.skillLevel}/{this.props.skillData.max_level}</span>;
            buttons = <div>
                    <span className="ButtonText" onClick={() => this.increaseSkillLevel()}>(Lv. &uarr;)</span> &nbsp;
                    <span className="ButtonText" onClick={() => this.maxSkillLevel()}>(Lv. &uArr;)</span> &nbsp;
                    <span className="ButtonText" onClick={() => this.decreaseSkillLevel()}>(Lv. &darr;)</span> &nbsp;
                    <span className="ButtonText" onClick={() => this.minSkillLevel()}>(Lv. &dArr;)</span>
            </div>
        }
        else {
            var boostText = "Special Skill";
            if (this.props.skillData.force_boost === true) {
                boostText = "Force Boost"
            } else if (this.props.skillData.force_break === true) {
                boostText = "Force Break"
            }
            header = <span className="forceSkill"> <b>{boostText}:<br /></b> <i>{this.props.skillData.name}</i></span>
        }

        return(<div style={nodeStyle} className="clickableNode NoHighlight" id={this.props.skillData._id}
                onClick={() => {}}>
                    <span  className="skillInfo">{header} {levelInfo}</span> <br/>
                    {buttons}
            </div>)
    }
}

export default SkillTreeNode;