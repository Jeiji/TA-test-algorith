
///////////////////////////////////////////////////////////////////
//                                                               //
//                                                               //
//   TEST THE CODE HERE                                          //
//                                                               //
//                                                               //
///////////////////////////////////////////////////////////////////



let gloss1 = [ 'small' , 'mall' , 'ma' , 'martyr', 'samantha' ]
let gloss2 = [ 'light' , 'lion' , 'vitiligo' , 'ligation', 'linger' ]
let gloss3 = [ 'small' ]
let gloss4 = [ 'small' , 3 , 'eight' , 34 , gloss1 ]
let gloss5 = [ 'light' , 'smigge' , 'vitiligo' , 'ligation', 'liger' , 'live' ]
let gloss6 = [ 'light' , 'vi' , 'vitiligo' , 'ligation' , 'qiq' , 'linger' ]
let gloss7 = [ 'light' , 'corn' ]
let gloss8 = [ 'liglight' , 'smigglige' , 'vitiligo' , 'ligation', 'liger' , 'lige' ]
let gloss9 = [ 'millo' , 'milmillo' , 'milomildillo' ]

commonSub( gloss9 );
// compare( 'cool' , 'joobol' );



function compare( str1 , str2 ){
  var common = '';
  var temp = '';
  var exp = '';
  var matchChain = false;
  var str2Marker = 0;
  var str1Marker = 0;

  for( let i = str1Marker ; i < str1.length ; i++ ){
    matchChain = false;
    str2Marker = 0;
    console.log(`)))Looping on ${str1}[${i}](${str1[i]})`);
    for( let j = str2Marker ; j < str2.length ; j++ ){
      console.log(`         Comparing ${str1}[${i}](${str1[i]}) and ${str2}[${j}](${str2[j]})`);
      if( str1[i] == str2[j] && !matchChain ){
        console.log(`    +++########### Match! ${str1}[${i}](${str1[i]}) and ${str2}[${j}](${str2[j]})`);
        str1Marker = i;
        temp = str1[i]
        matchChain = true
        console.log(`           temp thus far: ${ temp }`);
        str2Marker = j+1;
        if( str1[i+1] && str2[j+1] ){
            i++;
        }else if( !str1[i+1] && !str2[j+1] ){
          console.log(           `---------- ( CAN NO LONGER COMPARE ( End of str2 ) )`);
          matchChain = false;
          break;
        }else{
          console.log(           `---------- ( CAN NO LONGER COMPARE ( End of str1 ) )`);
          if( temp.length > common.length ){
            console.log(`           REPLACING COMMON(${ common }) with TEMP(${ temp })`);
            common = temp;
          }else{
            console.log(`           STICKING WITH COMMON(${ common })... temp wasn't longer (${ temp })`);
          };
          temp = ''
          matchChain = false;
          break;
        };
      }else if( str1[i] == str2[j] && matchChain ){
        temp += str1[i]
        matchChain = true
        console.log(`    ########### Adding to new match in temp which is now (${ temp })`);
        if( str2[j+1] ){
          i++;
        }else{
          console.log('    ---------- ( End of inner loop on array entry )');
          if( temp.length > common.length ){
            console.log(`           REPLACING COMMON(${ common }) with TEMP(${ temp })`);
            common = temp;
          }else{
            console.log(`           STICKING WITH COMMON(${ common })... temp wasn't longer (${ temp })`);
          };
          temp = ''
          i = str1Marker++;
          break;
        };
      }else if( str1[i] != str2[j] && matchChain ){
        console.log(`    ----------  LOST IT ----`);
        matchChain = false
        if( temp.length > common.length && !matchChain ){
          console.log(`           REPLACING COMMON(${ common }) with TEMP(${ temp })`);
          common = temp;
        }else{
          console.log(`           STICKING WITH COMMON(${ common })... temp wasn't longer (${ temp })`);
        };
        temp = ''
        i = str1Marker;
        j--;
        continue;
      }else if( str1[i] != str2[j] && !matchChain ){
        matchChain = false
        console.log('         -- No match!');
      }
    }
    console.log(`   ENDING STRING ONE'S [${ i }](${ str1[i] })`);
    console.log(`   Resetting temp...`);
    temp = '';
    if( common.length > exp.length ){
      console.log(`   REPLACING EXP(${ exp }) with COMMON(${ common })`);
      exp = common;
    }else{
      console.log(`   STICKING WITH EXP(${ exp })... common wasn't longer (${ common })`);
    };
  }

  console.log(`   !!!!!!!!!!!!!!!!!!!! ENDING COMPARE  (${exp}) !!!!!!!!!!!!!!!!!!!!`);
  return exp
}





function commonSub( r ){
  // Global Variables ////
   var where = '', model, match = '', match2, check, matched, doOver,  checkMarker = 0, modelMarker = 0;

   /////////////////////////////
   //// Instant Break Cases ////
   /////////////////////////////

   let arrayOfStringsOnlyMsg = `********** ERROR ********* This function only takes arrays of strings.`;

   // Check to see if argument is an array
   if ( ! Array.isArray( r ) ){
     where = ' (Is an array?)'
     console.log( arrayOfStringsOnlyMsg , where );
   }else{
     // If 'r' IS an array, check to see if each array index is a string
     where = ' (Is array of strings?)'
     for ( let i = 0; i < r.length; i++ ) {
       if ( typeof( r[i] ) != 'string' ){
         console.log( arrayOfStringsOnlyMsg , where );
         return
       }
     }
     // Set first entry as the initial greatest common substring, which I'll cut away from as letters become unmatched
     // model = r[0];
   };
   // If the array has only one entry, that's the greatest common sub
   where = '(Only one entry)'
   if ( r.length == 1 ) {
     console.log( where );
     console.log(`\n************ SUCCESS:  The greatest common substring is '${ r[0] }' ************`);
     return r[0];
   }
   model = compare( r[0] , r[1] );
   if( !model ){
     console.log(`\n************ SUCCESS:  NO COMMON SUBSTRING! ************`);
     return
   }

   /////////////////////////////
   //////// Core Logic /////////
   /////////////////////////////

   for( let q = 2 ; q < r.length ; q++ ){
     model = compare( model , r[q] )
     console.log(`\n------------ Compared array[${q}](${ r[q] }) to model. Model is now '${ model }' `);

   };
   if( !model ){
     console.log(`\nNO COMMON SUBSTRING!`);
   }else{
     console.log(`\n************ SUCCESS: The greatest common substring is '${ model }' ************`);
     return `\n************ SUCCESS: The greatest common substring is '${ model }' ************`
   }
}
