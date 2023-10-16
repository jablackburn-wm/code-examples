# prompt: 

#Given an integer x, return true if x is palindrome integer.

#An integer is a palindrome when it reads the same backward as forward.

class Solution:
    def isPalindrome(self, x: int) -> bool:
        digits = str(x)
        j = len(digits) - 1
        for i in digits:
            if i != digits[j]:
                return False
            if j < (len(digits) // 2):
                break
            j -= 1
        return True