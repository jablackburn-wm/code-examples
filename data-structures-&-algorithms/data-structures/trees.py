class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


rootNode = TreeNode(2) 
leftNode = TreeNode(1)
rightNode = TreeNode(3)

rootNode.left = leftNode
rootNode.right = rightNode

