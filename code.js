class Media{
  constructor(author, title){
    this._author = author;
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !(this._isCheckedOut);
  }
 addRating(val){
   this._ratings.push(val);
 }
 getAverageRating(){
   return this._ratings.reduce((sum, num) => sum + num, 0) /this._ratings.length;
 }
  set isCheckedOut(val){
      this._isCheckedOut = val;
  }
}

class Book extends Media{
  constructor(author, pages,title){
    super(author, title);
    this._pages = pages;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(author,runTime,title){
    super(author,title);
    this._runTime = runTime;
  }
  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson',554,'A Short History of Nearly Everything');
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont',116,'speed');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
