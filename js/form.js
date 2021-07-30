class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title1 = createElement('h2');
       this.reset = createButton('Reset');
       this.title2=createElement('h2');
       this.title3=createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
    }
    display() {
        this.title1.html("Save yourself ")
        this.title1.position(90, 70);
        this.title1.style('font-size', '55px');
        this.title1.style('color', 'maroon');
        this.title2.html("Don't get in contact with corona.")
        this.title2.position(90,150);
        this.title2.style('font-size', '40px');
        this.title2.style('color', 'black');
        this.title3.html("Collect more immunity boosters than your opponent to WIN.")
        this.title3.position(90,200);
        this.title3.style('font-size', '40px');
        this.title3.style('color', 'black');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lightblue');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'lightgreen');
            this.greeting.style('font-size', '100px');
        });
        
        this.reset.mousePressed(() => {
          var playerInfoRef = database.ref('players')
          playerInfoRef.remove();  
          player.updateCount(0)
            game.update(0)
            database.ref('/').update({
            players: null          
        });

    })

     }   
}