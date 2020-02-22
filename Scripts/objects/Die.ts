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
            this._changeFace();
        }

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("blank"), 0, 0, true);
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {

        }

        private _changeFace()
        {
            this.image = config.Game.ASSETS.getResult(this.faceValue) as HTMLImageElement;
        }

        // PUBLIC METHODS
        public Start(): void 
        {

        }

        public Update(): void 
        {

        }

        public Reset(): void 
        {

        }

    }
}