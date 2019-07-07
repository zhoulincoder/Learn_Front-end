/** 
 * ALL ACTIVE COMPLETED
 */

 export default (state = 'ALL', action) => {
   console.log('333');
   
   if(['ALL', 'ACTIVE', 'COMPLETED'].includes(action.type) ) {
     return action.type
   }
   return state
 }