export class TimedSequencer
{
    TimeLeft = 0;
    Sequence = [];
    idex = 0;

    static Step = class
    {
        time;
        action(){}
    }
}