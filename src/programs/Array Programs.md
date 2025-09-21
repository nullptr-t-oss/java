# Array programs

## Maximum Subarray

Given an integer array nums, find the `subarray` with the largest sum, and return its sum.\
Subarray meaning : A subarray is a `contiguous non-empty` sequence of elements within an array.
<br><br>

```
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 ```
```
Constraints:
* 1 <= nums.length <= 105
* -104 <= nums[i] <= 104
```
[Leetcode Link](https://leetcode.com/problems/maximum-subarray/description/)

### Solution
::: code-group
```java [Bruteforce O(n²)]
public int maxSubArray(int[] nums) {
    int maxSum = 0, currentSum = 0;
    
    for(int i = 0; i < nums.length; i++) {
        currentSum = 0;
        for(int j = 0; j < nums.length; j++){
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}
```
```java [Kayden's Algorithm O(n)]
public int maxSubArray(int[] nums) {
    int maxSum = nums[0], currentSum = nums[0];
    
    for(int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
```

:::

>[!NOTE] Bruteforce
> The bruteforce algorithm is easier to understand but is too slow!
> If you submit the bruteforce algorithm on leetcode, leetcode will simply reject the submission with reason : Time Limit Exceeded

[Failing test case link](https://leetcode.com/problems/maximum-subarray/submissions/1778154662)