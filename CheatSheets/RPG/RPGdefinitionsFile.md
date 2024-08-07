# RPG File Definitions

## Database Files

### Declaration

**Usage Keywords**  
**INPUT** - Read-only access  
**OUTPUT** - Write-only access  
**UPDATE** - Read and write access  
**DELETE** - Delete records  

dcl-f MyFile keyed;  
  // input and write  
dcl-f MyFile keyed usage(*input: *output);  
  // update  
dcl-f myFile keyed usage(*update);  
  // update and write  
dcl-f MyFile keyed usage(*update: *output);  
  // update and delete
dcl-f myFile keyed usage(*update: *delete);
  // write
dcl-f MyFile usage(*output);
  // all operations
dcl-f MyFile keyed usage(*update: *delete: *output);

  ### PRINTER FILES
  dcl-f MyPrinter printer infds(InfPrt) oflind(OverFlow);  
// file information area  
  dcl-ds InfPrt;  
  CurLin int(5) pos(367);  // current line  
    end-ds; 
  dcl-s OverFlow ind;  

  ### DISPLAY
          // display without subfile
        dcl-f MyDisplay workstn indds(dspfi);
          // indicator area
          dcl-ds DspfI;
            F5 ind pos(5);
            F7 ind pos(7);
          end-ds;
          // display with subfile
        dcl-f MyDisplay workstn sfile(rec01:sfrrn) infds(dsWstn) indds(dspfi);
          // file information area
          dcl-ds dsWstn;
            // number of records into the subfile
            SFNumRcds int(5) pos(380);
          end-ds;
          // indicator area
          dcl-ds DspfI;
            F5 ind pos(5);
            F7 ind pos(7);
            sflDsp ind pos(30);
            sflClr ind pos(31);
            sflEnd ind pos(32);
            sflNxtChg ind pos(40);
          end-ds;
          
  ### KEYWORD EXAMPLES
          // user open
         dcl-f MyFile keyed usropn;
          // record rename
         dcl-f MyFile keyed rename(MyRec:Newrec);
          // field rename: add prefix
         dcl-d MyFile keyed prefix(N_);
          // field rename: replacing prefix
         dcl-d MyFile keyed prefix(N_:2);
          // external file
         dcl-f MyFile keyed extfile('ABC12300F');
         dcl-f MyFile keyed extfile(Name);
         dcl-s Name char(21) inz('MYLIB/ABC12300F');
          // external member
         dcl-f MyFile keyed extmbr('A2021');
        // keyword alias
         // the RPG compiler use the alias names for the fields
         dcl-f MyTab alias;
          // template
           // The definition is to be used only for further LIKE or LIKEDS definitions
           // The file isn't open and you can't 
           // perform any I/O operations
         dcl-f MyTab template;

 ### SQL DATA Types

         // CLOB files
         dcl-s MyFile sqltype(clob_file);
           // result is ==>
             // path and name 
           MyFile_Name = '/home/Myfile.txt';
             // path length 
           MyFile_nl = %len(%trim(MyFile_name));
             // open mode
           MyFile_fo = SQFRD;   // read
           MyFile_fo = SQFCRT;  // create
           MyFile_fo = SQFOVR;  // create or overwrite
           MyFile_fo = SQFAPP;  // append

            exec sql
              set :Myfile = 'testo di esempio';