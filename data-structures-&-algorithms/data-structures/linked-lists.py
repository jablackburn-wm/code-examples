class Node:
    data = 'some data'
    next = None

node1 = Node()
node2 = Node()
node3 = Node()

node1.next = node2
node2.next = node3

    


class Node:
    def __init__(self, data, next):
        self.data = data
        self.next = next

node1 = Node('data', Node('next node data', None))