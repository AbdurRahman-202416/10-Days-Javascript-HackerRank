// function modifyArray(nums) {
//     nums.forEach((num) => {
//         if (num % 2 === 0) {
//            return num[i].push()
//         } else {
//             console.log(`${num} is odd`);
//         }
//     });
// }
// let nums = [1, 2, 3, 4, 5];
// modifyArray(nums);


function modifyArray(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        nums[i] = nums[i] * 2;
        console.log(nums[i]);
      } else {
        nums[i] = nums[i] * 3;
        console.log(nums[i]);
      }
    }
    return nums;
  }
  let num=[1,2,3,4,5];
  modifyArray(num);
