import { IonDatetime } from "@ionic/angular";

export class UserParkingHistory {

HistoryId? : number;
StartTime? : Date;
EndTime? : Date;
UserId?: number;
  ParkingLotId?: number;

  constructor(userparkinghistory: any)
  {
      this.StartTime =userparkinghistory.StartTime;
      this.EndTime = userparkinghistory.EndTime;
      this.UserId = userparkinghistory.UserId;
      this.ParkingLotId = userparkinghistory.ParkingLotId;
  }

}
