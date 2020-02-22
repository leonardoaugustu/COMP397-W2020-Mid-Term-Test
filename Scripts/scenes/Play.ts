/**
 * Source File Name: Play.ts
 * Author: Leonardo Augusto de Oliveira
 * Date: Feb 22, 2020
 * Description: Play Scene: The game will display a random result of two dies set 
 *              side by side within the webpage.
 */
module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _dieOne: objects.Die;
        private _dieTwo: objects.Die;
        private _labelOne: objects.Label;
        private _labelTwo: objects.Label;
        private _rollButton: objects.Button;
        private _tableBackground: createjs.Bitmap;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            this._tableBackground = new createjs.Bitmap(config.Game.ASSETS.getResult("tableBackground"));

            this._dieOne = new objects.Die(100,40, false);
            this._labelOne = new objects.Label("1", "30px", "Consolas", "#000000", 200, 270, true);

            this._dieTwo = new objects.Die(350,40, false);
            this._labelTwo = new objects.Label("2", "30px", "Consolas", "#000000", 450, 270, true);

            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 250, 350, false);

             this.Main();
        }        
        
        public Update(): void 
        {
            this._dieOne.Update();
            this._dieTwo.Update();

        }
        
        public Main(): void 
        {
            this.addChild(this._tableBackground);
            this.addChild(this._dieOne);
            this.addChild(this._labelOne);
            this.addChild(this._dieTwo);
            this.addChild(this._labelTwo);
            this.addChild(this._rollButton);

            // handler for click events 
            this._rollButton.on("click", ()=>{
                this._dieOne.Roll();
                this._dieTwo.Roll();
                this._labelOne.text = this._dieOne.faceValue.toString();
                this._labelTwo.text = this._dieTwo.faceValue.toString();
            });
        }

        
    }
}