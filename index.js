import { StateMachine } from "/src/js/StateMachine.js";

const PageMachine = new StateMachine();
PageMachine.State = class State extends StateMachine.State
{
    Data = 
    {
        NavItem: null
        ,NavName: "NULL"
    }

    Entry = function()
    {
        this.Data.NavItem.parentElement.removeChild(this.Data.NavItem);
        document.querySelector("#ContentTitle").appendChild(this.Data.NavItem);
        this.Data.NavItem.onclick = function(){};

        document.querySelector(`#${this.Data.NavName}_Content`).style.display = "block";
        PageMachine.NextState = this;
    }

    Exit = function()
    {
        this.Data.NavItem.parentElement.removeChild(this.Data.NavItem);
        document.querySelector("#NavContainer").appendChild(this.Data.NavItem);
        this.Data.NavItem.onclick = function()
        {
            PageMachine.NextState = this;
            PageMachine.Transition();
        }.bind(this);

        document.querySelector(`#${this.Data.NavName}_Content`).style.display = "none";
    }

    constructor(itemname)
    {
        super();

        this.Data.NavName = itemname;
        this.Data.NavItem = document.createElement("div");
        this.Data.NavItem.id = `${this.Data.NavName}_Button`;
        this.Data.NavItem.innerText = this.Data.NavName;
        this.Data.NavItem.onclick = function()
        {
            PageMachine.NextState = this;
            PageMachine.Transition();
        }.bind(this);
        this.Data.NavItem.classList.add("NavItem");

        document.querySelector(`#NavContainer`).appendChild(this.Data.NavItem);
    }
}
PageMachine.States = 
{
    LandingPage: new PageMachine.State("Landing_Page")
    ,Narsissism: new PageMachine.State("Narsissism")
    ,Words_of_Wisdom: new PageMachine.State("Words_of_Wisdom")
    ,Post_Mortems: new PageMachine.State("Post-Mortems")
    ,Games: new PageMachine.State("Games")
}

function main()
{
    PageMachine.CurrState = PageMachine.States.LandingPage;
    PageMachine.States.LandingPage.Entry();
}
main();