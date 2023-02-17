export class GradeSchool {
  private list: Array<{ [key: number]: string }> = [];

  public roster() {
    return this.grade(0);
  }

  public add(name: string, grade: number) {
    this.list = this.list.filter((e) => !Object.values(e).includes(name));
    let newRegist: { [key: number]: string } = {};
    newRegist[grade] = name;
    this.list.push(newRegist);
  }

  public grade(grade: number): any {
    let response: { [key: number]: string[] } = {};
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      let keys: number = parseInt(Object.keys(element)[0]);
      if (!response[keys]) {
        response[keys] = [element[keys]];
      } else {
        response[keys].push(element[keys]);
        response[keys].sort();
      }
    }
    if (grade == 0) {
      return response || [];
    }
    return response[grade] || [];
  }
}

let school = new GradeSchool();
school.add("Franklin", 5);
school.add("Bradley", 5);
school.add("Jeff", 2);

let grade2 = school.grade(2);
console.log(grade2);
grade2.push("oopd");
console.log(grade2);

console.log(school.grade(2));
