import { Component, computed, signal } from "@angular/core";


interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: "app-dragonball-page",
  templateUrl: "./dragonball-page.component.html"
})

export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 15000 },
    //{ id: 2, name: "Vegeta", power: 13000 },
    //{ id: 3, name: "Piccolo", power: 7000 },
    //{ id: 4, name: "Yamcha", power: 500 },
  ]);


  addCharacter() {
    if (this.name().trim().length === 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set("");
    this.power.set(0);
  }
}