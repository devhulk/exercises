class Mason {
  constructor (strength, vision, speed, agility) {
    this.strength = strength
    this.vision = vision
    this.speed = speed
    this.agility = agility
    this.defaultPlaybook = [
      {
        passType : 'lob'
      },
      {
        passType : 'bullet'
      },
      {
        passType : 'bullet'
      }
    ]
  }

  pass(expectedPassType) {
    this.defaultPlaybook.forEach((play) => {
      if (play.passType === expectedPassType) {
        console.log('mason threw a bullet')
      }
      if (play.passType === expectedPassType) {
        console.log('mason threw a lob')
      } 
    })
  }

  run() {
    console.log('mason ran')

  }

  block() {
    console.log('mason blocked')
  
  }
}

module.exports = Mason
