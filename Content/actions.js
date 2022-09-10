window.Actions = {
  damage1: {
    name: "Whomp!",
    description: "Pillowy punch of dough",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 10}
    ]
  },
  saucyStatus: {
    name: "Juego de Tomates",
    description: "Aplica el estado Fresco",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "stateChange", status: { type: "saucy", expiresIn: 3 } }
    ]
  },
  clumsyStatus: {
    name: "Aceite de Oliva",
    description: "Esta todo muy resbaladizo",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "animation", animation: "glob", color: "#dafd2a" },
      { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
      { type: "textMessage", text: "{TARGET} esta todo resbaloso!"},
    ]
  },
  //Items
  item_recoverStatus: {
    name: "Te caliente",
    description: "Fresco y calientito",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} una un {ACTION}!"},
      { type: "stateChange", status: null },
      { type: "textMessage", text: "Te sientes fresco!", },
    ]
  },
  item_recoverHp: {
    name: "Fontina",
    targetType: "friendly",
    success: [
      { type:"textMessage", text: "{CASTER} ralla un poco {ACTION}!", },
      { type:"stateChange", recover: 10, },
      { type:"textMessage", text: "{CASTER} recovers HP!", },
    ]
  },
}