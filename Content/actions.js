window.Actions = {
    damage1: {
        name: "Whomp!",
        description: "A basic attack",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "animation", animation: "spin"},
            {type: "stateChange", damage: 10},
        ]
    },
    saucyStatus: {
        name: "Tomato Squeeze",
        description: "Recover hp for 3 turns",
        targetType: "friendly",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "stateChange", status: { type: "saucy", expiresIn: 3  } },
        ]
    },
    clumsyStatus: {
        name: "Olive oil",
        description: "Make the enemy miss attacks",
        success: [
            {type: "textMessage", text: "{CASTER} uses {ACTION}!"},
            {type: "animation", animation: "glob", color: "#dafd2a"},
            {type: "stateChange", status: { type: "clumsy", expiresIn: 3  } },
            {type: "textMessage", text: "{TARGET} is slepping all around!"},
        ]
    },
    //ITEMS
    item_recoverStatus: {
        name: "Heating Lamp",
        description: "Feeling fresh and warm",
        targetType: "friendly",
        success: [
            {type: "textMessage", text: "{CASTER} uses a {ACTION}!"},
            {type: "stateChange", status: null },
            {type: "textMessage", text: "Feeling fresh!", },
        ]
    },
    item_recoverHp: {
        name: "Parmesan Cheese",
        description: "Feeling fondueee",
        targetType: "friendly",
        success: [
            {type: "textMessage", text: "{CASTER} sprinkles on some {ACTION}!"},
            {type: "stateChange", recover: 10,  },
            {type: "textMessage", text: "{CASTER} recovers HP!", },
        ]
    }
}