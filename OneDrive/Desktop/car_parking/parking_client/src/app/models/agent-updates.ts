

export class AgentUpdates {

     UpdateId? : number;
     IsSpaceAvailable? : boolean;
     TimeStamp? : Date;
     Comment? : String;
     AgentId?: number;
     ParkingLotId?: number;

   constructor(agentupdates : any)
   {
     this.IsSpaceAvailable = agentupdates.IsSpaceAvailable;
     this.TimeStamp = agentupdates.TimeStamp;
     this.Comment = agentupdates.Comment;
     this.AgentId = agentupdates.AgentId;
     this.ParkingLotId = agentupdates.ParkingLotId;
   }
}
