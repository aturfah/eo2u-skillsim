import React, {Component} from 'react';
import './skillInfo.css'

import skillData from '../data/skill_data';
import {parsePX, parseSkillBranches} from '../helpers';

function oldBuildSkillText(skillDatum) {
    if (skillDatum === undefined) {
        return 'doot'
    }

    const header = <b className='SkillHeader'>{skillDatum.name}</b>
    var descr = skillDatum.description
    var specialText = ""

    // Build Text for Skill Info
    const growthOrder = skillDatum.growth_order;
    var levelGrowth = []

    // First initialize levelGrowth with 'Level #:' strings
    skillDatum.levels.forEach(function (level) {
        if (level.label !== 'Level') {
            levelGrowth.push('Lv. ' + level.label + ': ');
        }
    })


    // Clean up skills to get 15-length vectors
    growthOrder.forEach(function (growthID) {
        const rawInfo = skillDatum.growth[growthID];
        if (rawInfo.length === 1) {
            if (levelGrowth.length > 1) {
                descr += ' Has a ' + growthID.toLowerCase() + ' of ' + rawInfo[0].value + ' at all levels.'
            } else {
                descr += ' Has a ' + growthID.toLowerCase() + ' of ' + rawInfo[0].value + '.'
            }
        } else {
            const trueInfo = []
            rawInfo.forEach(function (pew) {
                const levelSpan = parseInt(pew.levelspan);
                for (var i = 0; i < levelSpan; i++) {
                    if (growthID.includes('(turns)')) {
                        trueInfo.push(pew.value + ' turns');
                    } else {
                        trueInfo.push(pew.value);
                    }
                }
            });
            growthID = growthID.replace(' (turns)', '');

            trueInfo.forEach(function (skillGrowthDatum, idx) {
                levelGrowth[idx] += growthID + ' of ' + skillGrowthDatum + ', '
            })
        }
    });

    // Add line breaks at the end
    levelGrowth.forEach(function (val, idx) {
        const repVal = val.substring(0, val.length - 2);
        if (idx + 1 <= skillDatum.max_level || skillDatum.force_boost === true || skillDatum.force_break === true) {
            levelGrowth[idx] = <span className='levelGrowthElt'>{repVal}<br/></span>;
        } else {
            levelGrowth[idx] = <i className='levelGrowthElt'>{repVal}<br/></i>;
        }
    })

    // Special Text for skill breaks
    if (skillDatum.force_boost === true) {
        specialText = "(FORCE BOOST)"
        levelGrowth = []
    } else if (skillDatum.force_break === true) {
        specialText = "(FORCE BREAK)"
    } else if (skillDatum.transform_only === true) {
        specialText = "(TRANSFORM ONLY)"
    }

    if (levelGrowth.length <= 1) {
        levelGrowth = [];
    }

    return <div> {header} {specialText} <br/> ---- <br/>
                <span className='SkillDescr'>{descr}</span>
                <br/> <br/>
                {levelGrowth}
            </div>
}

function buildSkillText(skillDatum) {
    if (skillDatum === undefined) {
        return 'doot'
    }

    if (skillDatum.force_boost === true || skillDatum.force_break === true) {
        return oldBuildSkillText(skillDatum)
    }

    let skillDescr = skillDatum.description;

    // Build the table rows
    const regSkillData = {};
    const grimSkillData = {};
    const maxLevel = skillDatum.max_level;
    const rowOrder = skillDatum.growth_order;
    skillDatum.levels.forEach(function (val, idx) {
        if (idx === 0) {
            return
        }
        idx = idx - 1
        
        if (!Object.keys(regSkillData).includes("Level")) {
            regSkillData["Level"] = []
            grimSkillData["Level"] = []
        }
        if (idx < maxLevel) {
            regSkillData["Level"].push(<th>{skillDatum.levels[idx+1].label}</th>)
        } else {
            grimSkillData["Level"].push(<th>{skillDatum.levels[idx+1].label}</th>)
        }

        rowOrder.forEach(function (val) {
            if (!Object.keys(regSkillData).includes(val)) {
                regSkillData[val] = []
                grimSkillData[val] = []
            }
        });
    });
    rowOrder.forEach(function(label) {
        let curLevel = 0;
        if (skillDatum.growth[label].length === 2 && skillDatum.growth[label][0].value === skillDatum.growth[label][1].value) {
            if (skillDescr.includes("\n")) {
                skillDescr += ' Has a ' + label.toLowerCase() + ' of ' + skillDatum.growth[label][0].value + ' at all levels.'
            } else {
                skillDescr += '\n Has a ' + label.toLowerCase() + ' of ' + skillDatum.growth[label][0].value + ' at all levels.'
            }
            return
        }

        skillDatum.growth[label].forEach(function(val) {
            curLevel += parseInt(val.levelspan);
            if (curLevel > maxLevel) {
                grimSkillData[label].push(<td colSpan={val.levelspan}>{val.value}</td>)
            } else {
                regSkillData[label].push(<td colSpan={val.levelspan}>{val.value}</td>)
            }
        })
    }) 

    // Get stuff in format to be used by table
    const regSkillRows = []
    rowOrder.forEach(function(val) {
        if (regSkillData[val].length === 0) {
            return
        }
        regSkillRows.push(<tr>
            <td>{val}</td>
            {regSkillData[val]}
        </tr>)
    })

    const grimSkillRows = []
    rowOrder.forEach(function(val) {
        if (regSkillData[val].length === 0) {
            return
        }
        grimSkillRows.push(<tr>
            <td>{val}</td>
            {grimSkillData[val]}
        </tr>)
    })

    // Give us the table
    return <div><table>
        <thead className='SkillHeader'>
            <tr>
                <th>{skillDatum.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{skillDescr.split("\n").map(str => <p className='SkillDescription'>{str}</p>)}</td>
            </tr>
            <tr>
                <td className='SkillInfoTable'>
                    <br/>
                <table>
                    <tbody>
                    <tr>
                        <th>Level</th>{regSkillData["Level"]}
                    </tr>
                    {regSkillRows}
                    <tr>
                        <th>Level</th>{grimSkillData["Level"]}
                    </tr>
                    {grimSkillRows}
                    </tbody>
                </table>

                </td>
            </tr>
        </tbody>

    </table></div>
}

class SkillInfoPanel extends Component {

    constructor(props) {
        super(props);
        this.activeClassIdx = props.activeClassIdx;
        this.parsedSkillData = parseSkillBranches(skillData[this.activeClassIdx])
        this.maxWidth = 800;
    }

    render() {
        const activeClassIdx = this.props.activeClassIdx;
        if (activeClassIdx !== this.activeClassIdx) {
            this.parsedSkillData = parseSkillBranches(skillData[activeClassIdx])
        }

        const activeSkillID = this.props.activeInfo.activeSkillID;
        const activeSkillBox = this.props.activeInfo.activeSkillBox;
        const graphParams = this.props.activeInfo.graphParams;
        const skillDatum = this.parsedSkillData[activeSkillID];
        const skillText = buildSkillText(skillDatum);
        const displayPosn = this.props.activeInfo.displayPosn;

        var visibility = 'hidden';
        var left = -1;
        var top = -1;
        if (activeSkillID !== null) {
            visibility = 'visible'
            if (displayPosn === 'right') {
                left = parsePX(activeSkillBox.left) +
                (parsePX(graphParams.BOX_WIDTH) +
                2 * parsePX(graphParams.BOX_BORDER_WIDTH) +
                parsePX(graphParams.BOX_PADDING)) * 0.9 + 15;
            } else {
                left = parsePX(activeSkillBox.left) -
                this.maxWidth / 2 -
                2 * parsePX(graphParams.BOX_BORDER_WIDTH) -
                parsePX(graphParams.BOX_PADDING);
            }

            top = parsePX(activeSkillBox.top);

            if (top + 400 > this.props.parentHeight) {
                top = this.props.parentHeight - 400;
            }
        }

        const divStyle = {
            visibility: visibility,
            left: left,
            top: top,
            maxWidth: this.maxWidth + 'px',
        }

        return <div className="SkillInfoPanel" style={divStyle}>
            {skillText}
        </div>
    }
}

export default SkillInfoPanel;