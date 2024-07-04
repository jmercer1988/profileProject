## DATE AND TIME
______________________________
####  Definitions
dcl-s CurDataJob date inz(*job);
dcl-s CurDataSys date inz(*sys);
dcl-s CurOra time inz(*sys);
dcl-s CurDataOra timestamp inz(*sys);
#### Constants
Outdate = d'2010-12-31';
OutTime = t'13.59.59';
OutTimeStamp = z'2010-12-31-13.59.59.000000';
#### Current date and time
OutDate = %date();
OutTime = %time();
OutTimeStamp = %timestamp();

#### Conversion from char to date
dcl-s OutDate date;
dcl-s CharDate char(8) inz('20020101');
dcl-s NumDate packed(8) inz(20020101);
 #### *ISO0 is yyyymmdd format
 Outdate = %date(CharDate:*ISO0);
 Outdate = %date(123110:*MDY);
 Outdate = %date('12/31/10':*MDY/);

#### Conversione from number to date
OutDate = %date(NumDate:*iso);

####  Conversion from date to char
CharDate = %char(OutDate:*YMD/);
####  Conversion from date to number
NumDate = %dec(OutDate:*iso);
####  Conversion current date to number
NumDate = %dec(%date():*iso);

#### Adding and subtracting durations
 // Date2 = 2002-12-31
OutDate = Date2 - %days(14);  // 2002-12-17
OutDate = Date2 - %years(1);  // 2001-12-31
OutDate = Date2 - %months(2); // 2002-10-31
 // Time1 = 17.00.00
OutTime = Time1 - %hours(5);   // 12.00.00
OutTime = Time1 - %minutes(6); // 16.54.00
OutTime = Time1 - %seconds(1); // 16.59.59

#### Difference between dates and times
 dcl-s Date1 date inz(d'2002-01-01');
 dcl-s Date2 date inz(d'2002-12-31');
 dcl-s Date3 date inz(d'1995-01-01');
 dcl-s Date4 date inz(d'2010-12-31');
 dcl-s Days int(10);
 dcl-s Diff packed(7);
       
 Days   = %diff(Date2:Date1:*days);  // days > 0
 Days   = %diff(Date1:Date2:*days);  // days < 0
 Months = %diff(Date2:Date1:*months);
 Years  = %diff(Date2:Date1:*years );
 Diff   = %diff(Date4:Date3:*days);

#### Extraction of dates and times   

Year   = %subdt(Date2:*years);  
Month  = %subdt(Date2:*months);  
Day    = %subdt(Date2:*days);  
Hour   = %subdt(Time2:*hours);  

**Julian day**
FirstofYear = %date(%subdt(Date2:*years)*10000 + 0101:*ISO);
JulDay      = %diff(date2:FirstOfYear:*days) + 1;