class Stack {
    constructor() {
      this.storage = '';
    }
  
    push(val) {
      this.storage = this.storage.concat('***', val)
    }
  
    pop() {
      // slice off the last characters up untill ***
      const str = this.storage.slice(this.storage.lastIndexOf('***', + 3));

      // updating the new stack without the last item 
      this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));

      // return the last item
      return str;
    }
  
    size() {}
  }
  const myWeeklyMenu = new Stack();
  myWeeklyMenu.push('RedBeans')
  myWeeklyMenu.pop('RedBeans')