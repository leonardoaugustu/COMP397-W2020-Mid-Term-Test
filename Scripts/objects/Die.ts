/**
 * Source File Name: Die.ts
 * Author: Leonardo Augusto de Oliveira
 * Date: Feb 22, 2020
 * Description: Game object for modelling a die.
 */
module objects
{
    export class Die extends GameObject {

        // PRIVATE INSTANCE MEMBERS
        private _numberOfSides: number;
        private _faceValue: number;

        // PUBLIC PROPERTIES
        get numberOfSides()
        {
            return this._numberOfSides;
        }

        set numberOfSides(newNumberOfSides: number)
        {
            this._numberOfSides = newNumberOfSides;
        }

        get faceValue()
        {
            return this._faceValue;
        }

        set faceValue(newFaceValue: number)
        {
            this._faceValue = newFaceValue;
        }

        // CONSTRUCTOR
        constructor(x:number, y:number, centered:boolean)
        {
            super(config.Game.ASSETS.getResult("0"), x, y, centered);
            
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {

        }

        private _updateFace()
        {
            this.image = config.Game.ASSETS.getResult(this.faceValue) as HTMLImageElement;
        }

        // PUBLIC METHODS
        public Start(): void 
        {
            this._numberOfSides = 6;
            this.faceValue = 0;
        }

        public Update(): void 
        {
            this._updateFace();
        }

        public Reset(): void 
        {
            this.faceValue = 0;

        }

        /**
         * Randomize a die result based on the boundary set by the numberOfSides 
         * property.
         */
        public Roll(): number
        {
            this.faceValue = Math.floor(util.Mathf.RandomRange(1,this.numberOfSides));
            return this.faceValue;
        }

    }
}