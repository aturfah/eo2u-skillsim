import React from 'react';
import masterySkills from './data/mastery_skills';
import prereqData from './data/prereq_data';
import skillData from './data/skill_data';

export const retirementLabels = ['N/A', '30-39', '40-49', '50-59', '60-69', '70-98', '99']

export function parsePX (pxStr) {
    return parseInt(String(pxStr).replace('px', ''));
}

function buildTextSkillTree(datum, hBarStyle, leftBar) {
    const FONT_SIZE = 16;
    const WIDTH = 20;

    var textLeft = null;
    var text = null;
    if (leftBar === true) {
        textLeft = parsePX(hBarStyle.left)
        if (isNumber(datum.preReqLevels[0])) {
            text = 'Lv.' + datum.preReqLevels[0]
        } else {
            text = datum.preReqLevels[0]
        }
    } else {
        textLeft = parsePX(hBarStyle.left) + parsePX(hBarStyle.width)
        if (isNumber(datum.postReqLevels[0])) {
            text = 'Lv.' + datum.postReqLevels[0]
        } else {
            text = datum.postReqLevels[0]
        }
    }
    textLeft -= WIDTH / 1.5

    const textStyle = {
        left: textLeft + 'px',
        top: parsePX(hBarStyle.top) - FONT_SIZE / 1.5 + 'px',
        color: '#FFF',
        fontSize: FONT_SIZE + 'px',
        fontWeight: 'bold',
        zIndex: 1,
        textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    }

    return <div style={textStyle} className='reqLevel'>{text}</div>
}

export function buildBarsBefore(datum, xCoord, yCoord, graphParams) {
    const output = []
    if (datum.numBefore > 0) {
        var barLeftXCoord = xCoord;
        var barLeftYCoord = yCoord + graphParams.BOX_HEIGHT / 2;
        const leftBarStyle = {top: barLeftYCoord + 'px',
                          left: barLeftXCoord - (graphParams.LINE_LENGTH / 2) + 'px',
                          width: (graphParams.LINE_LENGTH)/ 2 + 'px',
                          borderTopColor: graphParams.BORDER_COLOR,
                          borderTopWidth: graphParams.LINE_THICKNESS + 'px',
                          borderTopStyle: 'solid'}
        if (datum.coords.x === 0 || datum.baseBefore) {
            // this line is a bit longer
            leftBarStyle.width = graphParams.BOX_WIDTH / 4
            leftBarStyle.left = barLeftXCoord - leftBarStyle.width
        } else if (datum.beforeSkip > 0) {
            var newOffset = datum.beforeSkip * graphParams.BOX_WIDTH;
            newOffset += 2 * graphParams.BOX_BORDER_WIDTH;
            newOffset += datum.beforeSkip * graphParams.BOX_PADDING + 
                 (datum.coords.x === 1 ? graphParams.BOX_WIDTH / 4 : graphParams.BOX_PADDING)
            leftBarStyle.width = parseInt(leftBarStyle.width.replace('px', '')) + newOffset;
            leftBarStyle.left = parseInt(leftBarStyle.left.replace('px', '')) - newOffset;
            barLeftXCoord -= newOffset;
        }
        output.push(<div className='horizontalBar' style={leftBarStyle}></div>)

        // Add level for skill prerequisites
        if (datum.preReqLevels !== undefined) {
            output.push(buildTextSkillTree(datum, leftBarStyle, true))
        }

        // Draw vertical line before if necessary
        if (datum.numBefore > 1) {
            var preBarXCoord = barLeftXCoord - (graphParams.LINE_LENGTH / 2);
            var preBarYCoord = barLeftYCoord + (graphParams.LINE_THICKNESS / 2);
            var preBarHeight = (datum.numBefore - 1) * (graphParams.BOX_HEIGHT + graphParams.BOX_PADDING) + graphParams.LINE_THICKNESS / 2;
            if (datum.beforeStyle === 'centered') {
                preBarYCoord = preBarYCoord - preBarHeight / 2 - graphParams.LINE_THICKNESS / 4
                preBarHeight += graphParams.LINE_THICKNESS / 2
            }
            const preBarStyle = {top: preBarYCoord + 'px',
                left: preBarXCoord + 'px',
                height: preBarHeight + 'px',
                borderLeftColor: graphParams.BORDER_COLOR,
                borderLeftWidth: graphParams.LINE_THICKNESS + 'px',
                borderLeftStyle: 'solid'}
            output.push(<div className='verticalBar'
                    style={preBarStyle}></div>)
        }
    }
    return output
}

export function buildBarsAfter(datum, xCoord, yCoord, graphParams) {
    const output = []
    if (datum.numAfter > 0) {
        // Draw Horizontal Bar
        var barRightXCoord = xCoord + graphParams.BOX_WIDTH + 2 * graphParams.BOX_BORDER_WIDTH;
        var barRightYCoord = yCoord + graphParams.BOX_HEIGHT / 2;
        var barRightWidth = ( graphParams.LINE_LENGTH / 2);

        if (datum.afterSkip > 0) {
            var newOffset = datum.afterSkip * graphParams.BOX_WIDTH;
            newOffset += 2 * graphParams.BOX_BORDER_WIDTH;
            newOffset += datum.afterSkip * graphParams.BOX_PADDING + 
                 (datum.coords.x === 1 ? graphParams.BOX_WIDTH / 4 : graphParams.BOX_PADDING)
            barRightWidth += newOffset;
        }
        if (datum.baseSkill) {
            barRightXCoord += 10 // I don't know where this 10 comes from
            barRightWidth += graphParams.REG_SKILL_OFFSET - 6
        }

        const rightBarStyle = {top: barRightYCoord + 'px',
                        left: barRightXCoord + 'px',
                        width: barRightWidth + 'px',
                        borderTopColor: graphParams.BORDER_COLOR,
                        borderTopWidth: graphParams.LINE_THICKNESS + 'px',
                        borderTopStyle: 'solid'}

        output.push(<div className='horizontalBar' style={rightBarStyle}></div>)

        // Add level for skill prerequisites
        if (datum.postReqLevels !== undefined) {
            output.push(buildTextSkillTree(datum, rightBarStyle, false))
        }


        // Draw Vertical Bar After if Necessary
        if (datum.numAfter > 1) {
            var postBarXCoord = barRightXCoord + (graphParams.LINE_LENGTH / 2);
            var postBarYCoord = barRightYCoord;
            var postBarHeight = (datum.numAfter - 1) * (graphParams.BOX_HEIGHT + graphParams.BOX_PADDING) + graphParams.LINE_THICKNESS;
            if (datum.afterStyle === 'centered') {
                postBarYCoord = postBarYCoord - postBarHeight / 2
            }
            const postBarStyle = {top: postBarYCoord + 'px',
                left: postBarXCoord + 'px',
                height: postBarHeight + 'px',
                borderLeftColor: graphParams.BORDER_COLOR,
                borderLeftWidth: graphParams.LINE_THICKNESS + 'px',
                borderLeftStyle: 'solid'}
            output.push(<div className='verticalBar'
                    style={postBarStyle}></div>)
        }
    }
    return output
}

export function deepCopy (inObject) {
    // Stolen From
    // https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
    let outObject, value, key
  
    if(typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = (typeof value === "object" && value !== null) ? deepCopy(value) : value
    }
    
    return outObject
  }

export function isNumber(input) {
    const re = /^[0-9\b]*$/;
    return re.test(input) || !input;
}

export function calculateTotalSP(level, retirementIdx) {
    const retirementBonus = [0, 4, 5, 6, 7, 8, 10]
    return level + 2 + retirementBonus[retirementIdx]
  }

export function listSubtract(listA, listB) {
    return listA.filter(x => !listB.includes(x))
}

export function listIntersect(listA, listB) {
    return listA.filter(x => listB.includes(x))
}

export function firstDegSkills(activeClassIdx) {
    const output = [];
    Object.keys(prereqData[activeClassIdx]).forEach(function (key) {
        const datum = prereqData[activeClassIdx][key];
        let firstDeg = false;

        datum.forEach(function(prereqSkill) {
            if (masterySkills.includes(prereqSkill._id)) {
                firstDeg = true;
            }
        });

        if (firstDeg === true) {
            output.push(key);
        }
    })

    return output
}

export function objCompare(objA, objB) {
    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false
    }

    let outputFlag = true
    // Check B for A's keys
    Object.keys(objA).forEach(function (key) {
        if (!Object.keys(objB).includes(key)) {
            outputFlag = false;
        } else if (objB[key] !== objA[key]) {
            outputFlag = false;
        }
    });

    // Check A for B's keys
    Object.keys(objB).forEach(function (key) {
        if (!Object.keys(objA).includes(key)) {
            outputFlag = false;
        } else if (objB[key] !== objA[key]) {
            outputFlag = false;
        }
    });

    return outputFlag;
}

export function parseSkillBranches(classSkillInfo) {
    const output = {};
    classSkillInfo.branches.forEach(function (branch) {
        branch.skill_data.forEach(function (skillDatum) {
            output[skillDatum._id] = skillDatum;
        });
    });

    return output;
}

export function linkedSkills(activeClassIdx) {
    let parsedSkillData = parseSkillBranches(skillData[activeClassIdx])
    const output = []

    Object.keys(parsedSkillData).forEach(function (skillId) {
        let skillInfo = parsedSkillData[skillId]
        let linkedSkill = skillInfo.linked_skill

        if (linkedSkill !== null) {
            output.push(skillId)
        }
    })

    return output
}

function fixLinkedSkills(chosenSkills, activeClassIdx) {
    let newChosenSkills = deepCopy(chosenSkills);
    let parsedSkillData = parseSkillBranches(skillData[activeClassIdx])

    Object.keys(parsedSkillData).forEach(function (skillId) {
        let skillInfo = parsedSkillData[skillId]
        let linkedSkill = skillInfo.linked_skill

        if (linkedSkill !== null && Object.keys(newChosenSkills).includes(linkedSkill)) {
            newChosenSkills[skillId] = newChosenSkills[linkedSkill]
        } else if (linkedSkill !== null && !Object.keys(newChosenSkills).includes(linkedSkill)) {
            delete newChosenSkills[skillId]
            delete newChosenSkills[linkedSkill]
        }
    })

    if (objCompare(newChosenSkills, chosenSkills)) {
        return -1
    } else {
        return newChosenSkills
    }
}

function verifySkillDependenciesAdd(chosenSkills, activeClassIdx) {
    let newChosenSkills = deepCopy(chosenSkills);

    Object.keys(newChosenSkills).forEach(function (skillId) {
        let preReq = prereqData[activeClassIdx][skillId]
        if (preReq !== undefined) {
            preReq.forEach(function (preReqSkill) {
                if (Object.keys(newChosenSkills).includes(preReqSkill._id)) {
                    if (newChosenSkills[preReqSkill._id] < preReqSkill.level) {
                        newChosenSkills[preReqSkill._id] = preReqSkill.level;
                    }
                } else {
                    newChosenSkills[preReqSkill._id] = preReqSkill.level;
                }
            });
        }
    })

    if (objCompare(newChosenSkills, chosenSkills)) {
        return -1
    } else {
        return newChosenSkills
    }
}

function fixMasterySkills(chosenSkills, activeClassIdx) {
    // Check if Mastery unlocks other skills
    firstDegSkills(activeClassIdx).forEach(function (key) {
        if (Object.keys(chosenSkills).includes(key)) {
            return
        }

        const preReq = prereqData[activeClassIdx][key];
        let validSkill = true;
        preReq.forEach(function (prSkill) {
            if (!Object.keys(chosenSkills).includes(prSkill._id)) {
                validSkill = false;
            } else if (chosenSkills[prSkill._id] < prSkill.level) {
                validSkill = false;
            }
        })
        if (validSkill) {
            chosenSkills[key] = 1;
        }
    })
}

export function fixSkillDependencyAdd(chosenSkills, activeClassIdx) {
    // Check if Prerequisites needed
    let temp = verifySkillDependenciesAdd(chosenSkills, activeClassIdx);
    while (temp !== -1) {
        chosenSkills = temp;
        temp = verifySkillDependenciesAdd(temp, activeClassIdx);
    }

    fixMasterySkills(chosenSkills, activeClassIdx)

    temp = fixLinkedSkills(chosenSkills, activeClassIdx);
    while (temp !== -1) {
        chosenSkills = temp;
        temp = fixLinkedSkills(chosenSkills, activeClassIdx)
    }

    fixMasterySkills(chosenSkills, activeClassIdx)

    return chosenSkills
}

function verifySkillDependenciesDel(chosenSkills, activeClassIdx) {
    let validSkills = {};
    Object.keys(chosenSkills).forEach(function (skillId) {
        let validSkill = true;
        let preReq = prereqData[activeClassIdx][skillId];
        if (preReq !== undefined) {
            preReq.forEach(function (prSkill) {
                if (!Object.keys(chosenSkills).includes(prSkill._id)) {
                    validSkill = false;
                } else if(chosenSkills[prSkill._id] < prSkill.level) {
                    validSkill = false;
                }
            })
        }

        if (validSkill === true) {
            validSkills[skillId] = chosenSkills[skillId];
        }
    });

    if (objCompare(validSkills, chosenSkills)) {
        return -1
    } else {
        return validSkills;
    }
}

export function fixSkillDependencyDelete(chosenSkills, activeClassIdx) {
    let temp = verifySkillDependenciesDel(chosenSkills, activeClassIdx);
    while (temp !== -1) {
        chosenSkills = temp;
        temp = verifySkillDependenciesDel(chosenSkills, activeClassIdx);
    }

    fixMasterySkills(chosenSkills, activeClassIdx)

    temp = fixLinkedSkills(chosenSkills, activeClassIdx);
    while (temp !== -1) {
        chosenSkills = temp;
        temp = fixLinkedSkills(chosenSkills, activeClassIdx)
    }

    fixMasterySkills(chosenSkills, activeClassIdx)
    return chosenSkills
}


export function exportSkillList(classState, remainingSP) {
    const chosenSkills = classState.skillsChosen
    const activeClassIdx = classState.activeClassIdx

    const skillTextList = []
    const classSkillInfo = skillData[activeClassIdx]

    // Get the Info on the class
    skillTextList.push("Class: " + classSkillInfo.class)
    skillTextList.push("Level: " + classState.level)
    skillTextList.push("Retire Level: " + retirementLabels[classState.retirementIdx])
    skillTextList.push("SP Remaining: " + remainingSP + "/" + calculateTotalSP(classState.level, classState.retirementIdx))
    skillTextList.push("")

    // Get the info on the skills
    classSkillInfo.branches.forEach(function (skillBranch) {
        if (skillBranch.name !== "Force skills" & skillBranch.name !== "References") {
            const chosenBranchSkills = []
            skillBranch.skill_data.forEach(function (skillDatum) {
                if (Object.keys(chosenSkills).includes(skillDatum._id)) {
                    chosenBranchSkills.push(skillDatum.name + " Lv. " + chosenSkills[skillDatum._id])
                }
            })

            if (chosenBranchSkills.length > 0) {
                chosenBranchSkills.push("")
            }

            chosenBranchSkills.forEach(function (skillStr) {
                skillTextList.push(skillStr)
            })
        }
    });

    skillTextList.push("Generated by EO2U Skill Simulator")
    skillTextList.push("https://aturfah.github.io/eo2u-skillsim")

    return skillTextList.join("\n")
}
