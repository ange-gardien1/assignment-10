export class Agents {

    AgentId?:number;
    FirstName? : string;
    LastName? : string;
    Email?: string;
    PhoneNumber? : string;
    Pasword? : string;

    constructor(agent : any)
    {
        this.FirstName = agent.FirstName;
        this.LastName = agent.LastName;
        this.Email = agent.Email;
        this.PhoneNumber = agent.PhoneNumber;
        this.Pasword = agent.Password
    

    }

}
