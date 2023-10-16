# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        output = []
        for left in range(len(nums) - 2):
            if left > 0 and nums[left] == nums[left - 1]:
                continue
            mid, right = left + 1, len(nums) - 1
            while mid < right:
                sum = nums[left] + nums[mid] + nums[right]
                if sum > 0: 
                    right -= 1
                elif sum < 0:
                    mid += 1
                else:
                    valid_arr = [nums[left], nums[mid], nums[right]]
                    output.append(valid_arr)
                    while mid < right and nums[mid] == nums[mid + 1]:
                        mid += 1
                    while mid < right and nums[right] == nums[right - 1]:
                        right -= 1
                    right -= 1
                    mid += 1
        return output