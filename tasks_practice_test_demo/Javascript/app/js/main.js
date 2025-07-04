let nums = [9, 3, 5, 2, 1, 4, 8, 6];
for(let i = 0; i < nums.length; i++)
    for(let j = 0; j < nums.length; j++)
        if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];

//**используем деструктуризацию для простейшей сортировки массива: */
         
console.log(nums);  // [1, 2, 3, 4, 5, 6, 8, 9]