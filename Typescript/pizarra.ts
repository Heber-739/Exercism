export class GradeSchool {
  private list: Array<Array<string | number>> = [];

  public roster() {
    return this.grade(0);
  }

  public add(name: string, grade: number) {
    this.list = this.list.filter((e) => e[0] != name);
    this.list.push([name, grade]);
  }

  public grade(grade: number): any {
    let response: { [k: number]: string[] } = {};

    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      if (!response[element[1]]) {
        response[element[1]] = [element[0]];
      } else {
        response[element[1]].push(element[0]);
        response[element[1]].sort();
      }
    }
    if (grade === 0) {
      return response;
    }
    return response[grade];
  }
}
let school = new GradeSchool();
school.add("Franklin", 5);
school.add("Bradley", 5);
school.add("Jeff", 2);

let grade2 = school.grade(2);
grade2.push("Oops.");
console.log(grade2);
console.log(school.grade(2));
