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
            preReqLevels: [5],
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
            preReqLevels: [5],
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
            preReqLevels: [1]
        },
        {
            skillID: 'additional_palm',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [1]
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
            preReqLevels: [3],
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
            skillID: 'blade_mastery',
            baseSkill: true,
            coords: {x: 0, y: 1},
            barSize: 7
        },
        {
            skillID: 'sonic_raid',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [5]
        },
        {
            skillID: 'gale_rush',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
        },
        {
            skillID: 'flame_sabre',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'freeze_sabre',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'shock_sabre',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'delayed_chase',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'overkiller',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [7],
            postReqLevels: [3]
        },
        {
            skillID: 'full_slash',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1
        },
        {
            skillID: 'resonance',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: 'force_mastery',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 5
        },
        {
            skillID: 'vital_shut',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'mind_shut',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'absorb',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5]
        },
        {
            skillID: 'force_charge',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
        },
        {
            skillID: 'force_shield',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
            postReqLevels: [5]
        },
        {
            skillID: 'force_energy',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1,
        },
        {
            skillID: 'force_reset',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [10],
            postReqLevels: [5]
        },
        {
            skillID: 'limit_break',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
        },
        {
            skillID: 'phys_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'elem_atk_up',
            baseSkill: true,
            coords: {x: 0, y: 16},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'weapon_free',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 2,
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 17},
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 1, y: 17},
        },
        {
            skillID: 'mine',
            baseSkill: true,
            coords: {x: 2, y: 17},
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
            skillID: 'axe_mastery',
            baseSkill: true,
            coords: {x: 0, y: 6},
            barSize: 4
        },
    ],
    [ // Medic
        {
            skillID: 'heal_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 6
        },
        {
            skillID: 'cure',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'salve',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'unbind',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5],
        },
        {
            skillID: 'refresh',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5],
        },
        {
            skillID: 'immunize',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'regenerate',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'delayed_heal',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'heal',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [7],
        },
        {
            skillID: 'revive',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'cpr',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 5,
            numBefore: 0,
            numAfter: 0
        },
        {
            skillID: 'anaesthetic',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'toxin_injection',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'curare',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'diagnosis',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'clear_strike',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 2, y: 7},
            barSize: 3,
            numBefore: 0,
            numAfter: 0
        },
        {
            skillID: 'safe_passage',
            baseSkill: false,
            coords: {x: 2, y: 8},
            numAfter: 0,
            numBefore: 1,
            baseBefore: true,
            preReqLevels: [1],
        },
        {
            skillID: 'scavenge',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numAfter: 0,
            numBefore: 1,
            baseBefore: true,
            preReqLevels: [3],
        },
        {
            skillID: 'focus',
            baseSkill: false,
            coords: {x: 2, y: 10},
            numAfter: 0,
            numBefore: 1,
            baseBefore: true,
            preReqLevels: [10],
        },
        {
            skillID: 'atk_up',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 0
        },
        {
            skillID: 'caduceus',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 13},
            numAfter: 0,
            numBefore: 0,
        }
    ],
    [ // Protector
        {
            skillID: 'shield_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 7
        },
        {
            skillID: 'front_guard',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [5],
        },
        {
            skillID: 'rear_guard',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [5],
        },
        {
            skillID: 'defender',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'fire_wall',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'ice_wall',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'volt_wall',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'shield_smite',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [7],
        },
        {
            skillID: 'shield_rush',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'braverys_gift',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'def_up',
            baseSkill: true,
            coords: {x: 0, y: 8},
            barSize: 3
        },
        {
            skillID: 'provoke',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'parry',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'fortify',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5],
        },
        {
            skillID: 'aegis',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
            postReqLevels: [5],
        },
        {
            skillID: 'en_garde',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 12},
            barSize: 3
        },
        {
            skillID: 'safe_passage',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'flee',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'cure',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5],
        },
        {
            skillID: 'party_cure',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
            postReqLevels: [3],
        },
        {
            skillID: 'prayer',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numAfter: 0,
            numBefore: 0,
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numAfter: 0,
            numBefore: 0,
        },
    ],
    [ // Ronin
        {
            skillID: 'katana_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 8
        },
        {
            skillID: 'slantwise_cut',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'perfect_chaser',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [7],
        },
        {
            skillID: 'upper_stance',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 2,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'horse_slash',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'flame_grater',
            baseSkill: false,
            coords: {x: 2, y: 2},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'swallow_strike',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'clear_stance',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 2,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'razor_dodge',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'lightning_stab',
            baseSkill: false,
            coords: {x: 2, y: 4},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'arm_strike',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'drawing_stance',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 2,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'beheading_cut',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'frigid_slash',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'charging_slash',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'peerless_stance',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'atk_up',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 1
        },
        {
            skillID: 'crit_up',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'severing_slash',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 11},
            numAfter: 1,
            numBefore: 0,
        },
        {
            skillID: 'breath',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 12},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'indomitable_cry',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 0,
            numBefore: 0
        },
    ],
    [ // Sovereign

    ],
    [ // Survivalist
        {
            skillID: 'bow_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 3
        },
        {
            skillID: 'power_shot',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [5],
        },
        {
            skillID: 'disabling_shot',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
            postReqLevels: [3],
        },
        {
            skillID: 'multi-shot',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'sagittarius_shot',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'agi_up',
            baseSkill: true,
            coords: {x: 0, y: 4},
            barSize: 5
        },
        {
            skillID: 'hasten',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [2],
        },
        {
            skillID: 'trickery',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [2],
            postReqLevels: [2],
        },
        {
            skillID: 'sure_shot',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [2],
        },
        {
            skillID: 'chain_dance',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numAfter: 1,
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'endorphins',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'act_first',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'quick_step',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'predator',
            baseSkill: true,
            coords: {x: 0, y: 10},
            barSize: 3
        },
        {
            skillID: 'owl-eye',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'awareness',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'stalker',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 14},
            numAfter: 1,
            numBefore: 0,
            barSize: 0
        },
        {
            skillID: 'efficiency',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'resuscitate',
            baseSkill: false,
            coords: {x: 2, y: 14},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'chop',
            baseSkill: true,
            coords: {x: 0, y: 15},
            numAfter: 0,
            numBefore: 0
        },
        {
            skillID: 'mine',
            baseSkill: true,
            coords: {x: 1, y: 15},
            numAfter: 0,
            numBefore: 0
        },
        {
            skillID: 'take',
            baseSkill: true,
            coords: {x: 2, y: 15},
            numAfter: 0,
            numBefore: 0
        },
    ],
    [ // Troubadour
        {
            skillID: 'song_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 9
        },
        {
            skillID: 'warrior_song',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [5],
        },
        {
            skillID: 'shelter_song',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [1],
            postReqLevels: [5],
        },
        {
            skillID: 'holy_gift',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'skanda_song',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5],
        },
        {
            skillID: 'insight_melody',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5],
        },
        {
            skillID: 'recovery_aria',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'fire_prelude',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'flame_fantasia',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'ice_prelude',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'frost_fantasia',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'volt_prelude',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'shock_fantasia',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'echoing_rondo',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [7],
        },
        {
            skillID: 'healing_lullaby',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [3],
            postReqLevels: [5],
        },
        {
            skillID: 'eerie_chorus',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'peace_ballad',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5],
            postReqLevels: [5],
        },
        {
            skillID: 'taboo_rondo',
            baseSkill: false,
            coords: {x: 2, y: 8},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 10},
            barSize: 3
        },
        {
            skillID: 'frightful_yawl',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'restful_tune',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'barbaric_march',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 0,
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 1, y: 10},
            barSize: 0
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 1, y: 11},
            barSize: 0
        },
        
    ],
    [ // War Magus

    ]
]

export default treeData;