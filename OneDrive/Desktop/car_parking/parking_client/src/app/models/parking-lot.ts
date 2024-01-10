export class ParkingLot {


ParkingLotId? : number;
ParkingName? : string;
LocationLatitude? : number;
LocatonLongitude? : number;
NumberOfFreeSpace? : number;

constructor (parkinglot:any)
{
    this.ParkingName = parkinglot.ParkingName;
    this.LocationLatitude = parkinglot.LocationLatitude;
    this.LocatonLongitude = parkinglot.LocatonLongitude;
    this.NumberOfFreeSpace = parkinglot.NumberOfFreeSpace;
}
}
