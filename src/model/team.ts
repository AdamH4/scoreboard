
interface TeamInterface {
  name: string,
  score: number,
}


class Team implements TeamInterface {
  name: string
  score: number = 0

  constructor(name: string) {
    this.name = name
  }
}


export default Team
