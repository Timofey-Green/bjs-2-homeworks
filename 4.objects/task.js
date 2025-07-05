function Student(name, gender, age) {
this.name = name;
this.gender = gender;
this.age = age;
this.marks = [];
 }

let student1 = new Student();
let student2 = new Student();
let student3 = new Student();




Student.prototype.setSubject = function (subjectName) {  //добавляем метод в прототип
this.subject = subjectName;   //добавляем новое свойство

  }



Student.prototype.addMarks = function (...marks) {
  if (this.marks) {  //проверка, что существует
    this.marks.push(...marks);  //добавляем в моссив из реста
    return marks; //возвращаем
  }
}



Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {  //проверяем массив, что существует и наполнен
      return 0;
  } else {
      let sum = this.marks.reduce((acc, mark) => acc + mark, 0);  //получаем сумму оценок
      return sum / this.marks.length;  //делим сумму на кол-во оценок
  }
}



Student.prototype.exclude = function (reason) {

 delete this.subject;  //удаляем свойства
 delete this.marks;


  this.excluded = reason; //добавляем свойство объекту
}
