function findMaxSequence( array ) { 
   var previousVal = Number.MIN_VALUE;
   var currentSequence = [], maxSequence = currentSequence;
 
   for ( var val of array ) {
      if ( previousVal < val ) {
         // Expand sequence and check whether new length is longest
         currentSequence.push(val);
         if ( maxSequence.length < currentSequence.length ) {
            maxSequence = currentSequence;
         }
      } else {
         currentSequence = [val];
      }
      previousVal = val;
   }

   return maxSequence.length <= 1 ? 'no' : `[ ${maxSequence.join(', ')} ]`;
}

console.log( findMaxSequence([3,2,3,4,2,2,4]) );
console.log( findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]) );
console.log( findMaxSequence([3,2,1]) );
