import React, {Component} from 'react';
import './App.css';

// Component Import
import Header from './Header/header'
import SkillTree from './SkillTree/skillTree'

// Function Import
import {fixSkillDependencyAdd,
  fixSkillDependencyDelete,
  exportSkillList,
  firstDegSkills,
  calculateTotalSP,
  linkedSkills,
  listIntersect, deepCopy} from './helpers'

function defaultState() {
  return {
    level: 1,
    retirementIdx: 0,
    skillsChosen: {},
    activeClassIdx: 0,
    maxLevel: 70
  };
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState()
    this.firstDegSkills = firstDegSkills(this.state.activeClassIdx);
    this.calculateSpRemaining = this.calculateSpRemaining.bind(this)
  }

  calculateSpRemaining(skillState) {
    const sp = calculateTotalSP(skillState.level, skillState.retirementIdx)
    const activeFDegSkills = listIntersect(Object.keys(skillState.skillsChosen), this.firstDegSkills);
    const skillsChosen = skillState.skillsChosen;
    const activeLinkedSkills = listIntersect(Object.keys(skillState.skillsChosen), linkedSkills(skillState.activeClassIdx))

    let totalSpSpent = 0;
    Object.keys(skillsChosen).forEach(function (key) {
      if (activeLinkedSkills.includes(key)) {
        return
      }
      totalSpSpent += skillsChosen[key];
    });

    return sp - totalSpSpent + activeFDegSkills.length
  }

  copySkillsClipboard() {
    const remainingSP = this.calculateSpRemaining(this.state);
    const output = exportSkillList(this.state, remainingSP);

    navigator.clipboard.writeText(output);
    alert("Copied build to clipboard");
  }

  updateState(key, value=undefined) {
    // Reset Everything
    if (key === undefined) {
      console.log('Resetting State...')
        this.firstDegSkills = firstDegSkills(defaultState().activeClassIdx)
        this.setState(defaultState());
      return;
    }
    //Set a specific part of state
    let oldState = deepCopy(this.state);
    if (value === undefined) {
      value = defaultState()[key]
    }
    // Changing class resets everything
    if (key === 'activeClassIdx') { 
      console.log('Class change -> resetting state...')
      oldState = defaultState();
      this.firstDegSkills = firstDegSkills(value)
    }

    // Change parameters
    if (key === 'skillsChosen') {
      const skillId = value._id;
      const skillLevel = value.level;
      if (Object.keys(value).length === 0) {
        console.log('Resetting Skills')
        oldState.skillsChosen = {};
      } else if (skillLevel === 0) {
        console.log('Removing', skillId)
        delete oldState.skillsChosen[skillId];
        oldState.skillsChosen = fixSkillDependencyDelete(oldState.skillsChosen, oldState.activeClassIdx);
      } else if (!Object.keys(oldState.skillsChosen).includes(skillId) ||
          oldState.skillsChosen[skillId] < skillLevel) {
        console.log('Increasing level of', skillId, 'to', skillLevel)
        oldState.skillsChosen[skillId] = skillLevel;
        oldState.skillsChosen = fixSkillDependencyAdd(oldState.skillsChosen, oldState.activeClassIdx);
      } else if (oldState.skillsChosen[skillId] > skillLevel) {
        console.log('Decreasing level of', skillId, 'to', skillLevel);
        oldState.skillsChosen[skillId] = skillLevel;
        oldState.skillsChosen = fixSkillDependencyDelete(oldState.skillsChosen, oldState.activeClassIdx);
      }
    } else {
      console.log('Setting', key, 'to', value)
      oldState[key] = value;
    }

    const spRemaining = this.calculateSpRemaining(oldState)
    if (spRemaining < 0) {
        console.log('Increasing level by', -1*spRemaining, 'to meet SP needs');
        oldState['level'] -= spRemaining;
    }

    // After everything, we are within valid level range
    if (oldState.level > oldState.maxLevel) {
      console.log('ERROR: Exceeding maxLevel')
      alert('This change would exceed the set maximum level.')
    } else {
      this.setState(oldState);
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          updateMethod={this.updateState.bind(this)}
          copySkillsClipboard={this.copySkillsClipboard.bind(this)}
          level={this.state.level}
          retirementIdx={this.state.retirementIdx}
          skillsChosen={this.state.skillsChosen}
          skillPointsTotal={calculateTotalSP(this.state.level, this.state.retirementIdx)}
          skillPointsRemaining={this.calculateSpRemaining(this.state)}
          activeClassIdx={this.state.activeClassIdx}
          maxLevel={this.state.maxLevel}
        ></Header>
        <SkillTree
          updateMethod={this.updateState.bind(this)}
          skillsChosen={this.state.skillsChosen}
          activeClassIdx={this.state.activeClassIdx}
        ></SkillTree>
      </div>
    );
  }
}

export default App;
