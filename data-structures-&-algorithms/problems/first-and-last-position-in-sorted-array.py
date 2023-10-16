# prompt:

# Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

# If target is not found in the array, return [-1, -1].

# You must write an algorithm with O(log n) runtime complexity.

#brute force here would be to iterate until the correct value is found store that starting index, 
# then continue iterating until a new value is found, and store that ending index as well
# this way would be O(n) in time

# instead, we can use binary search:
# first we use basic binary search to find the lowest index of the target value
# then we determine the high index by adding the number of instances of the target value in the list to the low index
# we also have to subtract 1 from the high index since the count of target values in the list includes the lowest index, which is already accounted for
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        
        # find the lowest index of target value
        def findLower(nums, target):
            hi = len(nums) - 1
            lo = 0
            while hi >= lo:
                if hi == lo and nums[hi] != target:
                    # return -1 if no target is found
                    return -1
                mid = (hi + lo) // 2        
                
                if nums[mid] == target:
                    if mid == 0 or nums[mid - 1] != target:
                        return mid
                    hi = mid
                if nums[mid] > target:
                    hi = mid - 1
                if nums[mid] < target:
                    lo = mid + 1
            return hi
    
        # get lowest index
        lowest = findLower(nums, target)
        
        # if low index doesnt exist, high index doesnt either. 
        if lowest == -1:
            highest = -1
        else: 
            # highest must be equal to the lower index plus the number of target values in the list
            # minus 1 because we already counted the lowest index
            highest = lowest + nums.count(target) - 1
    
        return [lowest, highest]