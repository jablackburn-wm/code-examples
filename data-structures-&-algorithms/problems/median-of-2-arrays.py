#prompt:
#Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

#The overall run time complexity should be O(log (m+n)).

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        
        def calculate_median(nums):
            if (len(nums) % 2 == 0): 
                print(len(nums) // 2)
                return (nums[len(nums) // 2] + nums[(len(nums) // 2) - 1]) / 2
            print(len(nums) // 2)
            return nums[len(nums) // 2]
        
        def mergeArray():
            for i in nums2:
                nums1.append(i)
            print(nums1)
            nums1.sort()
            print(nums1)
            return calculate_median(nums1)
            
            
        return mergeArray()