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
        constructor(numberOfSides:number=6)
        {
            super(config.Game.ASSETS.getResult("blank"), 0, 0, true);
            
            this._numberOfSides = numberOfSides;
            
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
            this.Reset();
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
         * Randomize a die result based on the boundary set by the numberOfSides property.
         */
        public Roll(): number
        {
            this.faceValue = util.Mathf.RandomRange(1,this.numberOfSides);
            return this.faceValue;
        }

    }
}