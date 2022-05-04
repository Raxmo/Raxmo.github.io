export class StateMachine
{
    CurrState = {};
    NextState = {};

    Data = {}

    Tween(){}
    
    Transition()
    {
        this.CurrState.Exit();
        this.Tween();
        this.CurrState = this.NextState;
        this.NextState.Entry();
    }

    States = {};

    static State = class
    {
        Data = {}

        Entry(){}
        Action(){}
        Exit(){}

        constructor()
        {
            this.Entry.bind(this);
            this.Action.bind(this);
            this.Exit.bind(this);
        }
    }

    constructor()
    {
        this.Tween.bind(this);
        this.Transition.bind(this);
    }
}