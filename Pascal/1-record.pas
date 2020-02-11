program Example;

type TDate = record
  Year: integer;
  Month: 1..12;
  Day: 1..31;
end;

type TPerson = record
  Name: string[10];
  City: string[10];
  Born: TDate;
end;

var
  P1: TPerson;
  FPerson: File of TPerson;

begin
  P1.Name := 'Marcus';
  P1.City := 'Roma';
  P1.Born.Day := 26;
  P1.Born.Month := 4;
  P1.Born.Year := 121;
  WriteLn('Name: ', P1.Name);
  WriteLn('City: ', P1.City);
  WriteLn('Born: ', P1.Born.Year, '-', P1.Born.Month, '-', P1.Born.Day);
  Assign(FPerson, './1-record.dat');
  Rewrite(FPerson);
  Write(FPerson, P1);
  Close(FPerson);
end.
