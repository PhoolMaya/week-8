// Items and Menu
class Item {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
    
    describe() {
    //console.log(`${this.name} pays ${this.position}`)
    return `${this.name} pays ${this.price}`;
    }
    }
    class Menu1 {
    constructor(name) {
    this.name = name;
    this.item = [];
    }
    
    addItem(item) {
    if (item instanceof Item) {
    this.items.push(item);
    } else {
    throw new Error(`You can only add an instance of Item. 
    argument is not a item: ${item}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.items.length} items.`;
    }
    }
    class Menu { // what drives the application and our choices
    constructor() {
    this.menus = [];
    this.selectedItem = null; // manage one team at a time
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createItem();
    break;
    case '2' :
    this.viewItem();
    break;
    case '3' :
    this.deleteItem();
    break;
    case '4' :
    this.displayItem();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('See you again!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) create a new item
    1) view a item
    2) delete a item
    3) display all item
    4)exit
    `);
    }
    
    showTeamMenuOptions(menuInfo) {
    return prompt(`
    0) back
    1) add a new item
    2) delete a item
    -----------------
    ${menuInfo}
    `);
    }
    
    displayMenu1() {
    let menu1String = '';
    for (let i = 0; i < this.menu1.length; i++) {
    menu1String += i+ ') ' + this.menu1s[i].name + '\n';
    }
    alert(menu1String);
    }
    
    createItem() {
    let name = prompt('Enter name for new item: ');
    this.teams.push(new Item(name));
    }
    
    viewItem() {
    let index = prompt("Enter the index of the Item that you want to view:");
    if (index > -1 && index < this.items.length) {
    this.selectedItem = this.items[index];
    let description = 'Item Name: ' + this.selectedItem.name + '\n';
    description += ' ' + this.selectedItem.describe() + '\n ';
    for (let i = 0; i < this.selectedItem.menu1s.length; i++) {
    // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
    // + this.selectedTeam.players[i].position + '\n';
    description += i + ') ' + this.selectedItem.menu1s[i].describe() + '\n';
    }
    let selection1 = this.showItemMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createItem();
    break;
    case '2' :
    this.deleteItem();
    }
    } // validate user input
    }
    
    deleteItem() {
    let index = prompt('Enter the index of the item that you wish to delete: ');
    if (index > -1 && index < this.menu1s.length) {
    this.menu1s.splice(index,1);
    }
    }
    
    
    createItem() {
    let name = prompt('Enter name for new item: ');
    let price = prompt('Enter price for new item: ');
    //this.selectedItems.menu1s.push(new Item(name, price));
    this.selectedItem.addPrice(new Item(name,price));
    }
    
    deleteItem() {
    let index = prompt('Enter the index of the item that you wish to delete: ');
    if (index > -1 && index < this.selectedItem.menu1s.length) { this.selectedItem.menu1s.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start()
    // Example array
    const Items = new Item();
    const item = ["Momo", "Noodles" , "Pasta" ];
    console.log(item[0]);

