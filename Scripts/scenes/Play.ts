module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _dieOne: objects.Die;
        private _dieTwo: objects.Die;
        private _rollButton: objects.Button;

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
            

            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {


        }

        
    }
}