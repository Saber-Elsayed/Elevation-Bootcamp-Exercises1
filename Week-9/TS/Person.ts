import { IPerson, IHobby } from "./Person.interface";

export class Person implements IPerson {
  constructor(
    public name: string,
    public age: number,
    public height: number,
    public hobbies: IHobby[],
    public weight: number
  ) {}

  grow(): void {
    this.age++;
  }

  loseWeight(weight: number): void {
    this.weight -= weight;
  }

  addHobby(hobby: IHobby): void {
    this.hobbies.push(hobby);
  }

  getHobbiesNames(): string[] {
    return this.hobbies.map((hobby) => hobby.hobbyName);
  }
}
