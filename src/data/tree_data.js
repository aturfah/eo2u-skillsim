const treeData = [
    [ // Alchemist
        {
            skillID: 'analysis',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'eschaton',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'formula_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 7
        },
        {
            skillID: 'fire_formula',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'ice_formula',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'volt_formula',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'flame_formula',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3],
            preReqLevels: [5]
        },        
        {
            skillID: 'freeze_formula',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3],
            preReqLevels: [5]
        },
        {
            skillID: 'spark_formula',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3],
            preReqLevels: [5]
        },
        {
            skillID: 'riot_formula',
            baseSkill: false,
            coords: {x: 2, y: 3},
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'inferno_formula',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3],
            preReqLevels: [5]
        },        
        {
            skillID: 'cocytus_formula',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3],
            preReqLevels: [5]
        },
        {
            skillID: 'thor_formula',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3],
            preReqLevels: [5]
        },
        {
            skillID: 'compression',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 3,
            beforeStyle: 'centered'
        },        
        {
            skillID: 'nuclear_formula',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'palm_mastery',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 5
        },
        {
            skillID: 'fire_palm',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'ice_palm',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'volt_palm',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'splash_palm',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'additional_palm',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            numAfter: 1,
            numBefore: 0,
            barSize: 1
        },
        {
            skillID: 'sight_formula',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numAfter: 0,
            numBefore: 0,
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 15},
            numBefore: 0,
            numAfter: 0
        },
        {
            skillID: 'elem_atk_up',
            baseSkill: false,
            coords: {x: 1, y: 16},
            numBefore: 0,
            numAfter: 0
        },
        {
            skillID: 'elem_def_up',
            baseSkill: false,
            coords: {x: 2, y: 16},
            numBefore: 0,
            numAfter: 0
        }
    ],
    [ // Beast
        {
            skillID: 'desperation',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'true_endurance',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'loyalty_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 6
        },
        {
            skillID: 'lick_wounds',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [1],
            postReqLevels: [5]
        },
        {
            skillID: 'auto-lick',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
        },
        {
            skillID: 'protect',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
            postReqLevels: [3]
        },
        {
            skillID: 'hit-taker',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
            postReqLevels: [3]
        },
        {
            skillID: 'protection_vow',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 2,
        },
        {
            skillID: 'self-defense',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'beast_roar',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [7],
            postReqLevels: [5]
        },
        {
            skillID: 'preemptive_roar',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            afterSkip: 1,
            preReqLevels: [10],
            numBefore: 1
        },
        {
            skillID: 'endurance',
            baseSkill: false,
            coords: {x: 2, y: 10},
            numAfter: 0,
            numBefore: 7, // really only 2 but need to make line longer
            beforeStyle: 'centered',
        },
        {
            skillID: 'claw_mastery',
            baseSkill: true,
            coords: {x: 0, y: 8},
            barSize: 5
        },
        {
            skillID: 'tiger_blow',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [1],
            postReqLevels: [5]
        },
        {
            skillID: 'wolf_fang',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
        },
        {
            skillID: 'comet_drop',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
            postReqLevels: [5]
        },
        {
            skillID: 'wildblow',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
        },
        {
            skillID: 'beast_dance',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [5],
            postReqLevels: [3]
        },
        {
            skillID: 'savage_rush',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [7],
            postReqLevels: [3]
        },
        {
            skillID: 'berserk',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 2
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            afterSkip: 1,
            preReqLevels: [10],
            numBefore: 1
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 14},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'deadly_resolve',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 2, y: 14}
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'phys_def_up',
            baseSkill: true,
            coords: {x: 0, y: 16},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'bull_charge',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 2
        },
        {
            skillID: 'natural_instinct',
            baseSkill: false,
            coords: {x: 2, y: 15}
        },
    ],
    [ // Dark Hunter
        {
            skillID: 'trance',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'rose_prison',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'whip_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 5
        },
        {
            skillID: 'gag',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [7]
        },
        {
            skillID: 'cuffs',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [7]
        },
        {
            skillID: 'shackles',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [7]
        },
        {
            skillID: 'ecstasy',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'viper',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },        
        {
            skillID: 'crimson_rouge',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'sword_mastery',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 5
        },
        {
            skillID: 'hypno_bite',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [7]
        },
        {
            skillID: 'nerve_bite',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [7]
        },
        {
            skillID: 'mirage_bite',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [7]
        },
        {
            skillID: 'soul_liberator',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'drain_bite',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [5]
        },        
        {
            skillID: 'scorpion',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 0,
            barSize: 0
        },
        {
            skillID: 'temptation',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [4],
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 14},
            numAfter: 1,
            numBefore: 0
        },
        {
            skillID: 'bind_heart',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [4],
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            numAfter: 2,
            numBefore: 0,
            barSize: 2
        },
        {
            skillID: 'attack_bait',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'elemental_bait',
            baseSkill: false,
            coords: {x: 0, y: 17},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'curb_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 18},
            numAfter: 1,
            numBefore: 0,
        },
        {
            skillID: 'snake_eyes',
            baseSkill: false,
            coords: {x: 1, y: 18},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'perseverance',
            baseSkill: false,
            coords: {x: 2, y: 18},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numAfter: 0
        },
    ],
    [ // Fafnir
        {
            skillID: 'transform',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'ignition_ray',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'akashic_nova',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'meteor_smash',
            baseSkill: true,
            coords: {x: 0, y: 1}
        },
        {
            skillID: 'power_cell',
            baseSkill: true,
            coords: {x: 1, y: 1}
        },
        {
            skillID: 'extend',
            baseSkill: true,
            coords: {x: 2, y: 1}
        },
        {
            skillID: 'self-regenerate',
            baseSkill: true,
            coords: {x: 3, y: 1}
        },
        {
            skillID: 'accelerate',
            baseSkill: true,
            coords: {x: 4, y: 1},
            displayPosn: "left"
        },
        {
            skillID: 'blade_mastery',
            baseSkill: true,
            coords: {x: 0, y: 2},
            barSize: 7
        },
        {
            skillID: 'sonic_raid',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [5]
        },
        {
            skillID: 'gale_rush',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
        },
        {
            skillID: 'flame_sabre',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'fire_wave',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: ['Force']
        },
        {
            skillID: 'freeze_sabre',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'ice_wave',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: ['Force']
        },
        {
            skillID: 'shock_sabre',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'thunder_wave',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: ['Force']
        },
        {
            skillID: 'delayed_chase',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'blade_recoil',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: ['Force']
        },
        {
            skillID: 'overkiller',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [7],
            postReqLevels: [3]
        },
        {
            skillID: 'full_slash',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1
        },
        {
            skillID: 'resonance',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'force_mastery',
            baseSkill: true,
            coords: {x: 0, y: 10},
            barSize: 5
        },
        {
            skillID: 'vital_shut',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'mind_shut',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'absorb',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5]
        },
        {
            skillID: 'force_charge',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1,
        },
        {
            skillID: 'force_shield',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
            postReqLevels: [5]
        },
        {
            skillID: 'force_energy',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
        },
        {
            skillID: 'force_reset',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [10],
            postReqLevels: [5]
        },
        {
            skillID: 'limit_break',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 1,
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 16},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'elem_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 17},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'weapon_free',
            baseSkill: false,
            coords: {x: 1, y: 16},
            numBefore: 2,
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 18},
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 1, y: 18},
        },
        {
            skillID: 'mine',
            baseSkill: true,
            coords: {x: 2, y: 18},
        },
    ],
    [ // Gunner
        {
            skillID: 'action_boost',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'supreme_bolt',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'gun_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 9
        },
        {
            skillID: 'medic_bullet',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'fire_rounds',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5]
        },
        {
            skillID: 'ice_rounds',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5]
        },
        {
            skillID: 'volt_rounds',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5]
        },
        {
            skillID: 'charged_fire',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'charged_ice',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'charged_volt',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'burst_shot',
            baseSkill: false,
            coords: {x: 2, y: 4},
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'head_snipe',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'arm_snipe',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'leg_snipe',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'charged_shot',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: 'ricochet',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 11},
            barSize: 2
        },
        {
            skillID: 'cover_fire',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'shell_shock',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [5],
            preReqLevels: [10],
        },
        {
            skillID: 'preemptive_shell',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 0,
            numBefore: 1
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 14},
            barSize: 2
        },
        {
            skillID: 'penetrator',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'point_blank',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 17},
            barSize: 2
        },
        {
            skillID: 'act_quick',
            baseSkill: false,
            coords: {x: 0, y: 18},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'double_action',
            baseSkill: false,
            coords: {x: 0, y: 19},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 1, y: 17},
        },
        
    ],
    [ // Hexer
        {
            skillID: 'creeping_curse',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'black_mist',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'curse_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 9
        },
        {
            skillID: 'sapping_curse',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [1],
            postReqLevels: [5]
        },
        {
            skillID: 'frailty_curse',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [1],
            postReqLevels: [5]
        },
        {
            skillID: 'weakening_curse',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 2,
        },
        {
            skillID: 'blinding_curse',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            numAfter: 3,
            preReqLevels: [3],
            postReqLevels: [2]
        },
        {
            skillID: 'venom_curse',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
            postReqLevels: [2]
        },
        {
            skillID: 'madness_curse',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
            postReqLevels: [2]
        },
        {
            skillID: 'torpor_curse',
            baseSkill: false,
            coords: {x: 1, y: 4.5},
            numBefore: 1,
        },
        {
            skillID: 'corrupt_curse',
            baseSkill: false,
            coords: {x: 1, y: 5.5},
            numBefore: 1,
        },
        {
            skillID: 'cranial_curse',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'abdomen_curse',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'immobile_curse',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'evil_eye',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 3
        },
        {
            skillID: 'shielding_word',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'conflict_word',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'suicide_word',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 13},
            barSize: 2
        },
        {
            skillID: 'sacrifice',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5],
            preReqLevels: [5]
        },
        {
            skillID: 'reincarnate',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
        },
        {
            skillID: 'life_trade',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'curb_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 16},
            numAfter: 1
        },
        {
            skillID: 'chained_benefit',
            baseSkill: false,
            coords: {x: 1, y: 16},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 17},
        },
        {
            skillID: 'curb_def_up',
            baseSkill: true,
            coords: {x: 1, y: 17},
        },
        {
            skillID: 'chop',
            baseSkill: true,
            coords: {x: 2, y: 17},
        },

    ],
    [ // Highlander
        {
            skillID: 'hero_battle',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'gae_bolg',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'spear_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 6
        },
        {
            skillID: 'long_thrust',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'draining_thrust',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [2],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'draining_burst',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
        },
        {
            skillID: 'legion_thrust',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [2],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'legion_burst',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
        },
        {
            skillID: 'head_pierce',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'spear_assist',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'delayed_charge',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'cross_charge',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 8},
            barSize: 3
        },
        {
            skillID: 'turning_tide',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'bloody_offense',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'bloodlust',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 2
        },
        {
            skillID: 'stigmata',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'phys_def_up',
            baseSkill: true,
            coords: {x: 0, y: 12},
            barSize: 3
        },
        {
            skillID: 'battle_instinct',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'blood_fortune',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'allied_bonds',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 2
        },
        {
            skillID: 'spirit_shield',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 16},
            barSize: 2
        },
        {
            skillID: 'limitless',
            baseSkill: false,
            coords: {x: 0, y: 17},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'black_sabbath',
            baseSkill: false,
            coords: {x: 0, y: 18},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 1, y: 16},
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 1, y: 17},
        },

    ],
    [ // Landsknecht
        {
            skillID: 'full_charge',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'full_gain',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'sword_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 4
        },
        {
            skillID: 'raging_edge',
            baseSkill: false,
            coords: {x: 0, y: 2},
            preReqLevels: [1],
            numBefore: 1
        },
        {
            skillID: 'tornado',
            baseSkill: false,
            coords: {x: 0, y: 3},
            preReqLevels: [3],
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'blinding_slash',
            baseSkill: false,
            coords: {x: 0, y: 4},
            preReqLevels: [5],
            numBefore: 1
        },
        {
            skillID: 'falcon_slash',
            baseSkill: false,
            coords: {x: 0, y: 5},
            preReqLevels: [10],
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'hurricane',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'axe_mastery',
            baseSkill: true,
            coords: {x: 0, y: 6},
            barSize: 4
        },
        {
            skillID: 'boomerang_axe',
            baseSkill: false,
            coords: {x: 0, y: 7},
            preReqLevels: [1],
            numBefore: 1
        },
        {
            skillID: 'head_bash',
            baseSkill: false,
            coords: {x: 0, y: 8},
            preReqLevels: [3],
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'stunning_smash',
            baseSkill: false,
            coords: {x: 0, y: 9},
            preReqLevels: [5],
            numBefore: 1
        },
        {
            skillID: 'charge_smash',
            baseSkill: false,
            coords: {x: 0, y: 10},
            preReqLevels: [10],
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'heavy_smash',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 11},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'war_cry',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 12},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'triple_charge',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numAfter: 1,
            numBefore: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'fire_chaser',
            baseSkill: false,
            coords: {x: 2, y: 10.5},
            numBefore: 3,
        },
        {
            skillID: 'ice_chaser',
            baseSkill: false,
            coords: {x: 2, y: 11.5},
            numBefore: 1,
        },
        {
            skillID: 'volt_chaser',
            baseSkill: false,
            coords: {x: 2, y: 12.5},
            numBefore: 1,
        },
        {
            skillID: 'phys_def_up',
            baseSkill: true,
            coords: {x: 0, y: 13},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'swordbreaker',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1,
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 14},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'fencer',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'double_attack',
            baseSkill: false,
            coords: {x: 2, y: 14},
            numBefore: 1,
        },
        {
            skillID: 'mine',
            baseSkill: true,
            coords: {x: 0, y: 15},
        },
    ],
    [ // Medic
        {
            skillID: 'steady_hands',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'medical_miracle',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'heal_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 6
        },
        {
            skillID: 'cure',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'salve',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
        },
        {
            skillID: 'unbind',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'refresh',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'revive',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 2,
            numAfter: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'high_regen',
            baseSkill: false,
            coords: {x: 2, y: 3},
            numBefore: 1
        },
        {
            skillID: 'healing',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'line_heal',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'salve_2',
            baseSkill: false,
            coords: {x: 2, y: 5},
            numBefore: 1,
        },
        {
            skillID: 'chase_heal',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'delayed_heal',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
        },
        {
            skillID: 'overheal',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'staff_mastery',
            baseSkill: true,
            coords: {x: 0, y: 8},
            barSize: 3
        },
        {
            skillID: 'heavy_strike',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'medical_rod',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'vital_hit',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numAfter: 1,
            postReqLevels: [3],
        },
        {
            skillID: 'final_gift',
            baseSkill: false,
            coords: {x: 2, y: 8},
            numBefore: 1
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 1,
            postReqLevels: [3],
        },
        {
            skillID: 'scavenge',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numBefore: 1
        },
        {
            skillID: 'elem_def_up',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numAfter: 1,
            postReqLevels: [3],
        },
        {
            skillID: 'safe_passage',
            baseSkill: false,
            coords: {x: 2, y: 10},
            numBefore: 1
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 1, y: 11},
        }
    ],
    [ // Protector
        {
            skillID: 'shield_protect',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'perfect_defense',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'shield_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 8
        },
        {
            skillID: 'front_guard',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'rear_guard',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'keep_guard',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 2,
        },
        {
            skillID: 'fire_wall',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'ice_wall',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'volt_wall',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'heal_guard',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'shield_smite',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'shield_rush',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
        },
        {
            skillID: 'sentinel_guard',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'phys_def_up',
            baseSkill: true,
            coords: {x: 0, y: 10},
            barSize: 3
        },
        {
            skillID: 'provoke',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'pre-provoke',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
        },
        {
            skillID: 'fortify',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'parry',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'elem_def_up',
            baseSkill: true,
            coords: {x: 0, y: 14},
            barSize: 3
        },
        {
            skillID: 'line_cure',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'line_heal',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 1,
        },
        {
            skillID: 'aegis',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'armor_of_light',
            baseSkill: false,
            coords: {x: 0, y: 17},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 18},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'flee',
            baseSkill: false,
            coords: {x: 1, y: 18},
            numBefore: 1,
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 19},
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 1, y: 19},
        },
    ],
    [ // Ronin
        {
            skillID: 'immovable',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'issen',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'katana_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 11
        },
        {
            skillID: 'upper_stance',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 3,
        },
        {
            skillID: 'upward_slash',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'horse_slash',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'flame_grater',
            baseSkill: false,
            coords: {x: 2, y: 3},
            numBefore: 1,
        },
        {
            skillID: 'swallow_strike',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [1],
            afterSkip: 1,
        },
        {
            skillID: 'clear_stance',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 3,
        },
        {
            skillID: 'charging_thrust',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'arm_strike',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'lightning_stab',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numBefore: 1,
        },
        {
            skillID: 'moon_shadow',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [1],
            afterSkip: 1,
        },
        {
            skillID: 'drawing_stance',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 3,
        },
        {
            skillID: 'sheath_strike',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'beheading_cut',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'frigid_slash',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numBefore: 1,
        },
        {
            skillID: 'ground_strike',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [1],
            afterSkip: 1,
        },
        {
            skillID: 'peerless_stance',
            baseSkill: false,
            coords: {x: 3, y: 7},
            numBefore: 7,
            beforeStyle: 'centered',
            numAfter: 1,
            postReqLevels: [3],
        },
        {
            skillID: 'peerless_combo',
            baseSkill: false,
            coords: {x: 4, y: 7},
            numBefore: 1,
            displayPosn: "left"
        },
        {
            skillID: 'post-initiative',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'perfect_chaser',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            postReqLevels: [8]
        },
        {
            skillID: 'pre-initiative',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 14},
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 1, y: 14},
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 2, y: 14},
        },
    ],
    [ // Sovereign
        {
            skillID: 'victory_vow',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'proof_of_nobility',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'order_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 7
        },
        {
            skillID: 'attack_order',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'guard_order',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'dauntless_order',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 2,
        },
        {
            skillID: 'holy_crown',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'protect_order',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
        },
        {
            skillID: 'ad_nihilo',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [2],
            afterSkip: 1
        },
        {
            skillID: 'clearance',
            baseSkill: false,
            coords: {x: 2, y: 5},
            numBefore: 2,
        },
        {
            skillID: 'negotiation',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'white_noble',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'prevent_order',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [7],
        },
        {
            skillID: 'morale_boost',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 5
        },
        {
            skillID: 'link_order',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'link_order_ii',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
        },
        {
            skillID: 'fire_circle',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'freeze_circle',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'shock_circle',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'cheer',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            barSize: 2
        },
        {
            skillID: 'royal_veil',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'monarch_march',
            baseSkill: false,
            coords: {x: 1, y: 16},
            numBefore: 2,
        },
        {
            skillID: 'triumphant_cry',
            baseSkill: false,
            coords: {x: 0, y: 17},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'curb_def_up',
            baseSkill: true,
            coords: {x: 0, y: 18},
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 1, y: 18},
        },
    ],
    [ // Survivalist
        {
            skillID: 'illusion_step',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'summer_rain',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'bow_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 7
        },
        {
            skillID: 'flank_shot',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'blind_arrow',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'sleep_arrow',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'paralysis_arrow',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'drop_shot',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'sagittarius_shot',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'multi-shot',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [2]
        },
        {
            skillID: 'disabling_shot',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'speed_up',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 4
        },
        {
            skillID: 'trick_step',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'chain_dance',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [4]
        },
        {
            skillID: 'scapegoat',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: 'swap_step',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'hazy_arrow',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 5,
            beforeStyle: 'centered'
        },
        {
            skillID: 'risk_perception',
            baseSkill: true,
            coords: {x: 0, y: 14},
            barSize: 3
        },
        {
            skillID: 'owl-eye',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'sneak_attack',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'stalker',
            baseSkill: false,
            coords: {x: 0, y: 17},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 18},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'resuscitate',
            baseSkill: false,
            coords: {x: 1, y: 18},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'efficiency',
            baseSkill: false,
            coords: {x: 2, y: 18},
            numBefore: 1,
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 19},
        },
        {
            skillID: 'curb_atk_up',
            baseSkill: false,
            coords: {x: 1, y: 19},
        },
        {
            skillID: 'natural_instinct',
            baseSkill: false,
            coords: {x: 2, y: 19},
        },
    ],
    [ // Troubadour
        {
            skillID: 'war_song',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'crusade',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'song_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 9
        },
        {
            skillID: 'warrior_song',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'shelter_song',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'energy_ensemble',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 2,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'lightfoot_melody',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'insight_melody',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'skanda_ensemble',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 2,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'fire_prelude',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'flame_fantasia',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
        },
        {
            skillID: 'ice_prelude',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'frost_fantasia',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
        },
        {
            skillID: 'volt_prelude',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'shock_fantasia',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
        },
        {
            skillID: 'barbaric_march',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'life_ensemble',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'health_requiem',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'reverb',
            baseSkill: false,
            coords: {x: 2, y: 5.5},
            numBefore: 8,
            beforeStyle: 'centered'
        },
        {
            skillID: 'speed_up',
            baseSkill: true,
            coords: {x: 0, y: 11},
            barSize: 2
        },
        {
            skillID: 'alluring_ballad',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'jovial_march',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [7],
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 14},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'healing_rhythm',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 2, y: 14},
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            numAfter: 1,
            postReqLevels: [10]
        },
        {
            skillID: 'holy_gift',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 1,
        },
    ],
    [ // War Magus
        {
            skillID: 'war_edge_power',
            baseSkill: true,
            forceBoost: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'fairy_robe',
            baseSkill: true,
            forceBreak: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'war_lore_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 7
        },
        {
            skillID: 'war_heal',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'war_heal_line',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'war_heal_all',
            baseSkill: false,
            coords: {x: 2, y: 2},
            numBefore: 1,
        },
        {
            skillID: 'warmight',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'rockskin',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'artery',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'war_response',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
        },
        {
            skillID: 'random_disease',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'barrier',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 2,
        },
        {
            skillID: 'displace',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'war_revive',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'war_edge_mastery',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 6
        },
        {
            skillID: 'strength_slash',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'guard_slash',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'headcut',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'armcut',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'legcut',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'ailing_slash',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [10],
            postReqLevels: [5]
        },
        {
            skillID: 'vampire',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 16},
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 1, y: 16},
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: false,
            coords: {x: 0, y: 17},
        },
        {
            skillID: 'curb_def_up',
            baseSkill: false,
            coords: {x: 1, y: 17},
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 16},
        },

    ]
]

export default treeData;