export interface IHobby {
  hobbyName: string;
  yearsInHobby: number;
}

export interface IPerson {
  name: string;
  age: number;
  height: number;
  hobbies: IHobby[];
  weight: number;
  grow(): void;
  loseWeight(weight: number): void;
  addHobby(hobby: IHobby): void;
  getHobbiesNames(): string[];
}
